export default defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) {
    return createHttpResponse(event, {
      status: 401,
      message: "Invalid token",
      access: false,
    });
  }
  return createHttpResponse(event, {
    status: 200,
    data: user,
    message: "Token is valid",
    access: true,
  });
});
