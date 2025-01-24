import { getBaseDbClient } from "~/server/db/clients/base-client";
import { createAccountSchema } from "~/server/validators/schema/create-account-schema";
import {
    createHttpErrorResponse,
    createHttpResponse,
} from "~/utils/create-http-reponse";
import { validateSchema } from "~/utils/validator";
import { hashPassword } from "~/utils/password";

export default defineEventHandler(async (event) => {
    try {
        const { User } = await getBaseDbClient();
        const payload = validateSchema(
            createAccountSchema,
            await readBody(event),
        );
        payload.password = await hashPassword(payload.password);
        const existingUser = await User.findOne({
            $or: [{ email: payload.email }, { username: payload.username }],
        });
        // existingUser?.fullName();
        if (existingUser) {
            const message =
                existingUser.email === payload.email
                    ? "Email already exists"
                    : "Username already exists";
            return createHttpResponse(event, {
                status: 400,
                message,
            });
        }
        await User.create(payload);

        return createHttpResponse(event, {
            status: 201,
            data: payload,
            message: "Account created successfully",
        });
    } catch (error: any) {
        return createHttpErrorResponse(event, error);
    }
});
