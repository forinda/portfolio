import { getBaseDbClient } from "~/server/db/clients/base-client";
import { createAccountSchema } from "~/server/validators/schema/create-account-schema";
import { createHttpResponse } from "~/utils/create-http-reponse";

export default defineEventHandler(async (event) => {
    try {
        const { User } = await getBaseDbClient();

        const payload = readValidatedBody(event, createAccountSchema.safeParse);
        return createHttpResponse(200, payload, "OK");
    } catch (e: any) {
        return createHttpResponse(
            500,
            {
                error: e.message,
            },
            "Internal Server Error",
        );
    }
});
