import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, caseStudiesTable } from "@workspace/db";
import {
  ListCaseStudiesResponse,
  CreateCaseStudyBody,
  CreateCaseStudyResponse,
  UpdateCaseStudyParams,
  UpdateCaseStudyBody,
  UpdateCaseStudyResponse,
  DeleteCaseStudyParams,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /case-studies — public
router.get("/case-studies", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(caseStudiesTable)
    .where(eq(caseStudiesTable.published, true))
    .orderBy(caseStudiesTable.createdAt);
  res.json(ListCaseStudiesResponse.parse(serializeDates(rows)));
});

// POST /admin/case-studies
router.post("/admin/case-studies", async (req, res): Promise<void> => {
  const parsed = CreateCaseStudyBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [cs] = await db.insert(caseStudiesTable).values(parsed.data).returning();
  res.status(201).json(CreateCaseStudyResponse.parse(serializeDates(cs)));
});

// PATCH /admin/case-studies/:id
router.patch("/admin/case-studies/:id", async (req, res): Promise<void> => {
  const params = UpdateCaseStudyParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateCaseStudyBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.clientSector != null) updateData.clientSector = body.data.clientSector;
  if (body.data.tenderType != null) updateData.tenderType = body.data.tenderType;
  if (body.data.objective != null) updateData.objective = body.data.objective;
  if (body.data.challenge != null) updateData.challenge = body.data.challenge;
  if (body.data.supportProvided != null) updateData.supportProvided = body.data.supportProvided;
  if (body.data.outcome != null) updateData.outcome = body.data.outcome;
  if (body.data.clientFeedback !== undefined) updateData.clientFeedback = body.data.clientFeedback;
  if (body.data.published != null) updateData.published = body.data.published;
  if (body.data.isExample != null) updateData.isExample = body.data.isExample;

  const [updated] = await db
    .update(caseStudiesTable)
    .set(updateData)
    .where(eq(caseStudiesTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Case study not found" });
    return;
  }
  res.json(UpdateCaseStudyResponse.parse(serializeDates(updated)));
});

// DELETE /admin/case-studies/:id
router.delete("/admin/case-studies/:id", async (req, res): Promise<void> => {
  const params = DeleteCaseStudyParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [deleted] = await db
    .delete(caseStudiesTable)
    .where(eq(caseStudiesTable.id, params.data.id))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Case study not found" });
    return;
  }
  res.sendStatus(204);
});

export default router;
