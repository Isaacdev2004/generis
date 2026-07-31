import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, projectsTable, projectMessagesTable, ordersTable, enquiriesTable, testimonialsTable, blogPostsTable, newsletterSubscribersTable, caseStudiesTable } from "@workspace/db";
import {
  GetAdminStatsResponse,
  ListAdminProjectsResponse,
  UpdateAdminProjectParams,
  UpdateAdminProjectBody,
  UpdateAdminProjectResponse,
  ListAdminOrdersResponse,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /admin/stats
router.get("/admin/stats", async (_req, res): Promise<void> => {
  const [enquiries, orders, projects, testimonials, blogPosts, subscribers] = await Promise.all([
    db.select().from(enquiriesTable),
    db.select().from(ordersTable),
    db.select().from(projectsTable),
    db.select().from(testimonialsTable).where(eq(testimonialsTable.published, true)),
    db.select().from(blogPostsTable),
    db.select().from(newsletterSubscribersTable),
  ]);

  const newEnquiries = enquiries.filter((e) => e.status === "new").length;
  const paidOrders = orders.filter((o) => o.status === "paid");
  const totalRevenuePence = paidOrders.reduce((sum, o) => sum + o.amountPence, 0);
  const activeStatuses = ["enquiry_received", "awaiting_documents", "under_review", "information_required", "drafting", "client_review", "revision", "final_quality_check", "ready_for_submission"];
  const activeProjects = projects.filter((p) => activeStatuses.includes(p.status)).length;
  const completedProjects = projects.filter((p) => p.status === "completed").length;

  // Project status breakdown
  const statusMap: Record<string, number> = {};
  for (const p of projects) {
    statusMap[p.status] = (statusMap[p.status] ?? 0) + 1;
  }
  const projectsByStatus = Object.entries(statusMap).map(([status, count]) => ({ status, count }));

  const recentEnquiries = enquiries
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const recentOrders = orders
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const stats = {
    totalEnquiries: enquiries.length,
    newEnquiries,
    totalOrders: orders.length,
    totalRevenuePence,
    activeProjects,
    completedProjects,
    totalTestimonials: testimonials.length,
    totalBlogPosts: blogPosts.length,
    totalSubscribers: subscribers.length,
    recentEnquiries,
    recentOrders,
    projectsByStatus,
  };

  res.json(GetAdminStatsResponse.parse(serializeDates(stats)));
});

// GET /admin/projects
router.get("/admin/projects", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(projectsTable)
    .orderBy(projectsTable.updatedAt);
  res.json(ListAdminProjectsResponse.parse(serializeDates(rows)));
});

// PATCH /admin/projects/:id
router.patch("/admin/projects/:id", async (req, res): Promise<void> => {
  const params = UpdateAdminProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateAdminProjectBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.status != null) updateData.status = body.data.status;
  if (body.data.adminNotes !== undefined) updateData.adminNotes = body.data.adminNotes;
  if (body.data.tenderDeadline !== undefined) updateData.tenderDeadline = body.data.tenderDeadline;

  const [updated] = await db
    .update(projectsTable)
    .set(updateData)
    .where(eq(projectsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(UpdateAdminProjectResponse.parse(serializeDates(updated)));
});

// GET /admin/orders
router.get("/admin/orders", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(ordersTable)
    .orderBy(ordersTable.createdAt);
  res.json(ListAdminOrdersResponse.parse(serializeDates(rows)));
});

export default router;
