import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const caseStudiesTable = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  clientSector: text("client_sector").notNull(),
  tenderType: text("tender_type").notNull(),
  objective: text("objective").notNull(),
  challenge: text("challenge").notNull(),
  supportProvided: text("support_provided").notNull(),
  outcome: text("outcome").notNull(),
  clientFeedback: text("client_feedback"),
  published: boolean("published").notNull().default(true),
  isExample: boolean("is_example").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertCaseStudySchema = createInsertSchema(caseStudiesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudiesTable.$inferSelect;
