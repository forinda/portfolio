import z from "zod";

export const createAccountSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    username: z.string().min(3).max(20),
    firstName: z.string().min(2).max(20),
    lastName: z.string().min(2).max(20),
});

export type CreateAccountSchema = z.infer<typeof createAccountSchema>;
