import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, blogPostsTable } from "@workspace/db";
import {
  ListBlogPostsResponse,
  GetBlogPostParams,
  GetBlogPostResponse,
  ListAdminBlogPostsResponse,
  CreateBlogPostBody,
  CreateBlogPostResponse,
  UpdateBlogPostParams,
  UpdateBlogPostBody,
  UpdateBlogPostResponse,
  DeleteBlogPostParams,
  ListBlogPostsQueryParams,
} from "@workspace/api-zod";
import { serializeDates } from "../lib/serialize";

const router: IRouter = Router();

// GET /blog-posts — public
router.get("/blog-posts", async (req, res): Promise<void> => {
  const query = ListBlogPostsQueryParams.safeParse(req.query);
  const rows = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.published, true))
    .orderBy(desc(blogPostsTable.publishedAt));

  const filtered = query.success && query.data.category
    ? rows.filter((r) => r.category === query.data.category)
    : rows;

  res.json(ListBlogPostsResponse.parse(serializeDates(filtered)));
});

// GET /blog-posts/:slug — public
router.get("/blog-posts/:slug", async (req, res): Promise<void> => {
  const params = GetBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.slug, params.data.slug));

  if (!post || !post.published) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }
  res.json(GetBlogPostResponse.parse(serializeDates(post)));
});

// GET /admin/blog-posts — admin (includes drafts)
router.get("/admin/blog-posts", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(blogPostsTable)
    .orderBy(desc(blogPostsTable.createdAt));
  res.json(ListAdminBlogPostsResponse.parse(serializeDates(rows)));
});

// POST /admin/blog-posts
router.post("/admin/blog-posts", async (req, res): Promise<void> => {
  const parsed = CreateBlogPostBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const values = {
    ...parsed.data,
    publishedAt: parsed.data.published ? new Date() : null,
  };
  const [post] = await db.insert(blogPostsTable).values(values).returning();
  res.status(201).json(CreateBlogPostResponse.parse(serializeDates(post)));
});

// PATCH /admin/blog-posts/:id
router.patch("/admin/blog-posts/:id", async (req, res): Promise<void> => {
  const params = UpdateBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const body = UpdateBlogPostBody.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: body.error.message });
    return;
  }

  const updateData: Record<string, unknown> = {};
  if (body.data.title != null) updateData.title = body.data.title;
  if (body.data.slug != null) updateData.slug = body.data.slug;
  if (body.data.excerpt != null) updateData.excerpt = body.data.excerpt;
  if (body.data.content != null) updateData.content = body.data.content;
  if (body.data.category !== undefined) updateData.category = body.data.category;
  if (body.data.published != null) {
    updateData.published = body.data.published;
    if (body.data.published) updateData.publishedAt = new Date();
  }

  const [updated] = await db
    .update(blogPostsTable)
    .set(updateData)
    .where(eq(blogPostsTable.id, params.data.id))
    .returning();

  if (!updated) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }
  res.json(UpdateBlogPostResponse.parse(serializeDates(updated)));
});

// DELETE /admin/blog-posts/:id
router.delete("/admin/blog-posts/:id", async (req, res): Promise<void> => {
  const params = DeleteBlogPostParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }
  const [deleted] = await db
    .delete(blogPostsTable)
    .where(eq(blogPostsTable.id, params.data.id))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }
  res.sendStatus(204);
});

export default router;
