import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      message: "Please enter a title",
    })
    .min(3)
    .max(100),
  description: z
    .string({
      message: "Please enter a description",
    })
    .min(3)
    .max(1000),
  status: z
    .enum(["completed", "in-progress", "not-started"])
    .default("not-started"),
  priority: z.enum(["low", "medium", "high"]).default("low"),
  startDate: z.coerce.date({
    message: "Please enter a valid start date",
  }),
  endDate: z.coerce.date({
    message: "Please enter a valid end date",
  }),
});
export const createTaskFormSchema = toTypedSchema(createTaskSchema);

export type CreateTaskFormType = Awaited<
  ReturnType<typeof createTaskFormSchema.parse>
>["value"];
