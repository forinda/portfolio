import * as z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
  status: z.enum(["completed", "in-progress", "not-started"]),
  priority: z.enum(["low", "medium", "high"]),
  startDate: z.string().date(),
  endDate: z.string().date(),
});
