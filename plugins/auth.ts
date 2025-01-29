export default defineNuxtPlugin(async () => {
  const { getSession } = await useAuth();
  await getSession();
});