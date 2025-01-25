import { API_URL } from "~/utils/constants/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { access } = await checkAuth();
    if (access) {
        console.log("Access granted");
        if (to.name === "task-login" || to.name === "task-register") {
            return navigateTo({ name: "task" });
        }
        return abortNavigation();
    }
});
