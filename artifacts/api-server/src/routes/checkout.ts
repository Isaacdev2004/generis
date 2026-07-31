import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, ordersTable } from "@workspace/db";
import {
  CreateCheckoutSessionBody,
  CreateCheckoutSessionResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// POST /checkout/create-session
router.post("/checkout/create-session", async (req, res): Promise<void> => {
  const parsed = CreateCheckoutSessionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { packageType, clientName, clientEmail, companyName, description, amount } = parsed.data;

  const defaultAmounts: Record<string, number> = {
    tender_research: 5000,
    bid_review: 15000,
    full_tender: 25000,
    retainer: 0,
    custom: 0,
  };
  const amountPence = amount ?? defaultAmounts[packageType] ?? 0;

  const [order] = await db.insert(ordersTable).values({
    clientName,
    clientEmail,
    companyName,
    packageType,
    description,
    amountPence,
  }).returning();

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    logger.warn("STRIPE_SECRET_KEY not configured — returning placeholder checkout URL");
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
    res.json(CreateCheckoutSessionResponse.parse({
      url: `${siteUrl}/payment-success?order=${order.id}&demo=true`,
      sessionId: `demo_session_${order.id}`,
    }));
    return;
  }

  try {
    const Stripe = await import("stripe").then((m) => m.default);
    const stripe = new Stripe(stripeSecretKey);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { name: description },
            unit_amount: amountPence,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/payment-cancelled`,
      customer_email: clientEmail,
      metadata: { orderId: String(order.id), companyName, packageType },
    });

    await db
      .update(ordersTable)
      .set({ stripeSessionId: session.id })
      .where(eq(ordersTable.id, order.id));

    res.json(CreateCheckoutSessionResponse.parse({
      url: session.url ?? "",
      sessionId: session.id,
    }));
  } catch (err) {
    req.log.error({ err }, "Stripe checkout session creation failed");
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// POST /checkout/webhook — must receive raw body for signature verification
router.post("/checkout/webhook", async (req, res): Promise<void> => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    res.json({ received: true });
    return;
  }

  try {
    const Stripe = await import("stripe").then((m) => m.default);
    const stripe = new Stripe(stripeSecretKey);
    const sig = req.headers["stripe-signature"] as string;
    const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await db
          .update(ordersTable)
          .set({ status: "paid", stripeSessionId: session.id })
          .where(eq(ordersTable.id, parseInt(orderId, 10)));
      }
    }

    if (event.type === "payment_intent.payment_failed") {
      const pi = event.data.object;
      if (pi.metadata?.orderId) {
        await db
          .update(ordersTable)
          .set({ status: "failed" })
          .where(eq(ordersTable.id, parseInt(pi.metadata.orderId, 10)));
      }
    }

    res.json({ received: true });
  } catch (err) {
    req.log.error({ err }, "Webhook error");
    res.status(400).json({ error: "Webhook error" });
  }
});

export default router;
