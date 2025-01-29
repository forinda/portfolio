import z from "zod";

export const loginUserSchema = z.object({
    emailOrUsername: z.string(), //.email(),
    password: z.string().min(8),
    rememberMe: z.boolean().optional(),
});

export type LoginUserSchemaType = z.infer<typeof loginUserSchema>;
