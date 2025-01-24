
import z from "zod";

export const loginUserSchema = z.object({
    emailOrUsername: z.string(),//.email(),
    password: z.string().min(8),
});

export type LoginUserSchema = z.infer<typeof loginUserSchema>;