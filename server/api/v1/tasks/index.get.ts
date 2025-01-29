import { createHttpResponse } from "~/server/utils/create-http-reponse";

export default defineEventHandler(async (event) => {
    return createHttpResponse(event, {
        status: 200,
        data: {
            message: "Hello, world!",
        },
    });
});
