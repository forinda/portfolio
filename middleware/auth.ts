import { API_URL } from "~/utils/constants/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { access, type } = await checkAuth();
    if (!access && type === "token") {
        console.warn("[no-auth] Access denied");

        return navigateTo({ name: "task-login" });
    }
});
