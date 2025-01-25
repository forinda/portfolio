import { API_URL } from "~/utils/constants/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const data = await checkAuth();
    console.log({ data });

    if (!data.access && data.type === "token") {
        console.warn("[no-auth] Access denied");

        return navigateTo({ name: "task-login" });
    }
});
