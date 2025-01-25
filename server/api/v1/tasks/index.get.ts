import { createHttpResponse } from "~/utils/create-http-reponse";

export default defineEventHandler(async (event) => {
    return createHttpResponse(event, {
        status: 200,
        data: {
            message: "Hello, world!",
        },
    });
});
