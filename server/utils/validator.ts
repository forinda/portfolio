import type { z } from "zod";
import { ApiError } from "~/server/utils/api-error";
import { HttpStatus } from "~/server/utils/http";
export function validateSchema<T=unknown>(schema: z.Schema<T>, payload: T): T {
    const { success, error } = schema.safeParse(payload);

    if (!success) {
        const firstIssue = error.issues[0];
        const message = firstIssue.message
            .toLowerCase()
            .includes(firstIssue.path.toString().toLowerCase())
            ? firstIssue.message
            : `[${firstIssue.path}] ${firstIssue.message}`;

        throw new ApiError(message, HttpStatus.BAD_REQUEST, {
            status: "error",
            type: "validation_error",
        });
    }

    return payload as z.infer<typeof schema>;
}
