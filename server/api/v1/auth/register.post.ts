import { createAccountSchema } from "~/utils/schema/create-account-schema";

export default defineEventHandler(async (event) => {
  try {
    const { User } = await getBaseDbClient();
    const payload = validateSchema(createAccountSchema, await readBody(event));
    payload.password = await hashPassword(payload.password);
    const existingUser = await User.findOne({
      $or: [{ email: payload.email }, { username: payload.username }],
    });
    if (existingUser) {
      const message =
        existingUser.email === payload.email
          ? "Email already exists"
          : "Username already exists";
      return createHttpResponse(event, {
        status: 400,
        message,
      });
    }
    await User.create(payload);

    return createHttpResponse(event, {
      status: 201,
      data: {},
      message: "Account created successfully",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
