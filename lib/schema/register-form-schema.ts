import { z } from "zod";

const registerUserSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
  username: z.string().min(1, { message: "Please enter your username" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .min(1, { message: "Please enter your email" }),
  password: z
    .string()
    .min(1, { message: "Please enter your password" })
    .min(8, { message: "Password must be at least 8 characters" }),
});
export const registerUserFormSchema = toTypedSchema(registerUserSchema);
export type RegisterUserFormType = Awaited<
  ReturnType<typeof registerUserFormSchema.parse>
>["value"];
