export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event);
    deleteCookie(event, config.cookieName, config.cookieOptions as any);
    return createHttpResponse(event, {
      status: 200,
      message: "Logout successful",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
