import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, newsletterSubscribersTable } from "@workspace/db";
import {
  SubscribeNewsletterBody,
  SubscribeNewsletterResponse,
  ListNewsletterSubscribersResponse,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// POST /newsletter/subscribe — public
router.post("/newsletter/subscribe", async (req, res): Promise<void> => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  // Check for duplicates
  const [existing] = await db
    .select()
    .from(newsletterSubscribersTable)
    .where(eq(newsletterSubscribersTable.email, parsed.data.email));

  if (existing) {
    res.status(400).json({ error: "Already subscribed" });
    return;
  }

  const [subscriber] = await db
    .insert(newsletterSubscribersTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(SubscribeNewsletterResponse.parse(serializeDates(subscriber)));
});

// GET /admin/newsletter-subscribers — admin
router.get("/admin/newsletter-subscribers", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(newsletterSubscribersTable)
    .orderBy(newsletterSubscribersTable.subscribedAt);
  res.json(ListNewsletterSubscribersResponse.parse(serializeDates(rows)));
});

export default router;
