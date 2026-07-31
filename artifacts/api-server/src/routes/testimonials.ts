import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, testimonialsTable } from "@workspace/db";
import {
  ListTestimonialsResponse,
  CreateTestimonialBody,
  CreateTestimonialResponse,
  UpdateTestimonialParams,
  UpdateTestimonialBody,
  UpdateTestimonialResponse,
  DeleteTestimonialParams,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /testimonials — public
router.get("/testimonials", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(testimonialsTable)
    .where(eq(testimonialsTable.published, true))
    .orderBy(testimonialsTable.createdAt);
  res.json(ListTestimonialsResponse.parse(serializeDates(rows)));
});

// POST /admin/testimonials
router.post("/admin/testimonials", async (req, res): Promise<void> => {
  const parsed = CreateTestimonialBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [t] = await db.insert(testimonialsTable).values(parsed.data).returning();
  res.status(201).json(CreateTestimonialResponse.parse(serializeDates(t)));
});

// PATCH /admin/testimonials/:id
router.patch("/admin/testimonials/:id", async (req, res): Promise<void> => {
  const params = UpdateTestimonialParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateTestimonialBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.clientName != null) updateData.clientName = body.data.clientName;
  if (body.data.companyName != null) updateData.companyName = body.data.companyName;
  if (body.data.sector != null) updateData.sector = body.data.sector;
  if (body.data.quote != null) updateData.quote = body.data.quote;
  if (body.data.rating !== undefined) updateData.rating = body.data.rating;
  if (body.data.published != null) updateData.published = body.data.published;

  const [updated] = await db
    .update(testimonialsTable)
    .set(updateData)
    .where(eq(testimonialsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Testimonial not found" });
    return;
  }
  res.json(UpdateTestimonialResponse.parse(serializeDates(updated)));
});

// DELETE /admin/testimonials/:id
router.delete("/admin/testimonials/:id", async (req, res): Promise<void> => {
  const params = DeleteTestimonialParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [deleted] = await db
    .delete(testimonialsTable)
    .where(eq(testimonialsTable.id, params.data.id))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Testimonial not found" });
    return;
  }
  res.sendStatus(204);
});

export default router;
