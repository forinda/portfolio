export default defineNuxtRouteMiddleware(async (to) => {
    const { sessionUser:user } = await useAuth();
    if (user.value) {
        if (to.name === "task-login" || to.name === "task-register") {
            return navigateTo({ name: "task" });
        }
        return abortNavigation();
    }
});
