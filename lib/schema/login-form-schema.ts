import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
export const loginFormSchema = toTypedSchema(
  z.object({
    emailOrUsername: z
      .string()
      .min(1, { message: "Please enter your email/username" }),
    password: z
      .string()
      .min(1, { message: "Please enter your password" })
      .min(8, { message: "Password must be at least 8 characters" }),
  }),
);
export type LoginUserFormType =  Awaited<ReturnType<typeof loginFormSchema.parse>>['value']
