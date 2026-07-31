import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, projectsTable, projectMessagesTable, ordersTable } from "@workspace/db";
import {
  GetPortalProjectParams,
  GetPortalProjectResponse,
  ListPortalProjectsResponse,
  ListProjectMessagesParams,
  ListProjectMessagesResponse,
  SendProjectMessageParams,
  SendProjectMessageBody,
  SendProjectMessageResponse,
  ListPortalOrdersResponse,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /portal/projects
router.get("/portal/projects", async (req, res): Promise<void> => {
  const clientEmail = req.headers["x-client-email"] as string | undefined;
  let rows = await db
    .select()
    .from(projectsTable)
    .orderBy(projectsTable.updatedAt);

  if (clientEmail) {
    rows = rows.filter((r) => r.clientEmail === clientEmail);
  }

  res.json(ListPortalProjectsResponse.parse(serializeDates(rows)));
});

// GET /portal/projects/:id
router.get("/portal/projects/:id", async (req, res): Promise<void> => {
  const params = GetPortalProjectParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [project] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.id, params.data.id));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(GetPortalProjectResponse.parse(serializeDates(project)));
});

// GET /portal/projects/:id/messages
router.get("/portal/projects/:id/messages", async (req, res): Promise<void> => {
  const params = ListProjectMessagesParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const rows = await db
    .select()
    .from(projectMessagesTable)
    .where(eq(projectMessagesTable.projectId, params.data.id))
    .orderBy(projectMessagesTable.createdAt);
  res.json(ListProjectMessagesResponse.parse(serializeDates(rows)));
});

// POST /portal/projects/:id/messages
router.post("/portal/projects/:id/messages", async (req, res): Promise<void> => {
  const params = SendProjectMessageParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = SendProjectMessageBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }
  const [msg] = await db
    .insert(projectMessagesTable)
    .values({ projectId: params.data.id, ...body.data })
    .returning();
  res.status(201).json(SendProjectMessageResponse.parse(serializeDates(msg)));
});

// GET /portal/orders
router.get("/portal/orders", async (req, res): Promise<void> => {
  const clientEmail = req.headers["x-client-email"] as string | undefined;
  let rows = await db
    .select()
    .from(ordersTable)
    .orderBy(ordersTable.createdAt);

  if (clientEmail) {
    rows = rows.filter((r) => r.clientEmail === clientEmail);
  }

  res.json(ListPortalOrdersResponse.parse(serializeDates(rows)));
});

export default router;
