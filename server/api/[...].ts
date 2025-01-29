import { createHttpResponse } from "~/server/utils/create-http-reponse";

export default defineEventHandler(async (event) => {
    return createHttpResponse(405, {}, "Method Not Allowed");
});
