export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data, error } = await useAuth();
  console.log("No auth middleware", { data:data.value, error });
  const hasAccess = computed(() => data.value?.access);
  if (!hasAccess.value) {
    console.log(`[no-auth] Access denied ${hasAccess.value}`);
    
    console.warn("[no-auth] Access denied");

    return navigateTo({ name: "task-login" });
  }
});
