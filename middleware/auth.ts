export default defineNuxtRouteMiddleware(async (to, from) => {
  const { sessionUser:user } = await useAuth();
  // console.log("No auth middleware", { data:data.value, error });
  // const hasAccess = computed(() => data.value?.access);
  if (!user.value) {
    console.log(`[no-auth] Access denied ${user.value}`);
    
    console.warn("[no-auth] Access denied");

    return navigateTo({ name: "task-login" });
  }
});
