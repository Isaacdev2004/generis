import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, enquiriesTable } from "@workspace/db";
import {
  SubmitEnquiryBody,
  SubmitEnquiryResponse,
  ListAdminEnquiriesResponse,
  GetAdminEnquiryParams,
  GetAdminEnquiryResponse,
  UpdateAdminEnquiryParams,
  UpdateAdminEnquiryBody,
  UpdateAdminEnquiryResponse,
  ListAdminEnquiriesQueryParams,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// POST /enquiries — public contact/service enquiry
router.post("/enquiries", async (req, res): Promise<void> => {
  const parsed = SubmitEnquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [enquiry] = await db.insert(enquiriesTable).values(parsed.data).returning();
  res.status(201).json(SubmitEnquiryResponse.parse(serializeDates(enquiry)));
});

// GET /admin/enquiries — admin list with optional status filter
router.get("/admin/enquiries", async (req, res): Promise<void> => {
  const params = ListAdminEnquiriesQueryParams.safeParse(req.query);
  const rows = await db
    .select()
    .from(enquiriesTable)
    .orderBy(enquiriesTable.createdAt);

  const filtered = params.success && params.data.status
    ? rows.filter((r) => r.status === params.data.status)
    : rows;

  res.json(ListAdminEnquiriesResponse.parse(serializeDates(filtered)));
});

// GET /admin/enquiries/:id
router.get("/admin/enquiries/:id", async (req, res): Promise<void> => {
  const params = GetAdminEnquiryParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [enquiry] = await db
    .select()
    .from(enquiriesTable)
    .where(eq(enquiriesTable.id, params.data.id));

  if (!enquiry) {
    res.status(404).json({ error: "Enquiry not found" });
    return;
  }
  res.json(GetAdminEnquiryResponse.parse(serializeDates(enquiry)));
});

// PATCH /admin/enquiries/:id
router.patch("/admin/enquiries/:id", async (req, res): Promise<void> => {
  const params = UpdateAdminEnquiryParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateAdminEnquiryBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.status != null) updateData.status = body.data.status;
  if (body.data.adminNotes != null) updateData.adminNotes = body.data.adminNotes;

  const [updated] = await db
    .update(enquiriesTable)
    .set(updateData)
    .where(eq(enquiriesTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Enquiry not found" });
    return;
  }
  res.json(UpdateAdminEnquiryResponse.parse(serializeDates(updated)));
});

export default router;
