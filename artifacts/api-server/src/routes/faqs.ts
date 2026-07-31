import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, faqsTable } from "@workspace/db";
import {
  ListFaqsResponse,
  CreateFaqBody,
  CreateFaqResponse,
  UpdateFaqParams,
  UpdateFaqBody,
  UpdateFaqResponse,
  DeleteFaqParams,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /faqs — public
router.get("/faqs", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(faqsTable)
    .where(eq(faqsTable.published, true))
    .orderBy(faqsTable.sortOrder);
  res.json(ListFaqsResponse.parse(serializeDates(rows)));
});

// POST /admin/faqs
router.post("/admin/faqs", async (req, res): Promise<void> => {
  const parsed = CreateFaqBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [faq] = await db.insert(faqsTable).values(parsed.data).returning();
  res.status(201).json(CreateFaqResponse.parse(serializeDates(faq)));
});

// PATCH /admin/faqs/:id
router.patch("/admin/faqs/:id", async (req, res): Promise<void> => {
  const params = UpdateFaqParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateFaqBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.question != null) updateData.question = body.data.question;
  if (body.data.answer != null) updateData.answer = body.data.answer;
  if (body.data.category !== undefined) updateData.category = body.data.category;
  if (body.data.sortOrder != null) updateData.sortOrder = body.data.sortOrder;
  if (body.data.published != null) updateData.published = body.data.published;

  const [updated] = await db
    .update(faqsTable)
    .set(updateData)
    .where(eq(faqsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "FAQ not found" });
    return;
  }
  res.json(UpdateFaqResponse.parse(serializeDates(updated)));
});

// DELETE /admin/faqs/:id
router.delete("/admin/faqs/:id", async (req, res): Promise<void> => {
  const params = DeleteFaqParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [deleted] = await db
    .delete(faqsTable)
    .where(eq(faqsTable.id, params.data.id))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "FAQ not found" });
    return;
  }
  res.sendStatus(204);
});

export default router;
