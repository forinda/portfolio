export default defineNuxtRouteMiddleware(async (to) => {
    const { data } = await useAuth();
    if (data.value!?.access) {
        console.log("Access granted");
        if (to.name === "task-login" || to.name === "task-register") {
            return navigateTo({ name: "task" });
        }
        return abortNavigation();
    }
});
