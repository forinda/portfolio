import { CookieOptions } from "nuxt/app";
import { loginUserSchema } from "~/lib/schema/login-user-schema";

export default defineEventHandler(async (event) => {
  try {
    const { User } = await getBaseDbClient();
    const payload = validateSchema(loginUserSchema, await readBody(event));
    const filter = payload.emailOrUsername.includes("@")
      ? { email: payload.emailOrUsername }
      : { username: payload.emailOrUsername };
    const existingUser = await User.findOne(filter).select("+password");

    if (!existingUser) {
      return createHttpResponse(event, {
        status: 400,
        message: "Account does not exist",
      });
    }
    const isPasswordValid = await comparePassword(
      payload.password,
      existingUser?.password!,
    );
    if (!isPasswordValid) {
      return createHttpResponse(event, {
        status: 400,
        message: "Invalid login credentials",
      });
    }
    const { password: _, ...user } = existingUser?._doc;
    const config = useRuntimeConfig(event);
    const session = CookieProcessor.serialize({ userId: existingUser._id });
    const signedSession = CookieProcessor.sign(session, config.cookieSecret);
    const { rememberMeExpires, maxAge, ...otherCookieOptions } =
      config.cookieOptions;
      const expiry = new Date(Date.now() + (payload.rememberMe ? parseInt(rememberMeExpires) : parseInt(maxAge)));
      setCookie(event, config.cookieName, signedSession, {
      ...otherCookieOptions,
      sameSite: (otherCookieOptions.sameSite ||
        "lax") as CookieOptions["sameSite"],
      expires:expiry,
    });
    const tokens = Jwt.generateTokens({
      id: existingUser._id as string,
      email: existingUser.email,
      username: existingUser.username,
    });
    return createHttpResponse(event, {
      status: 200,
      data: {
        user: user,
        ...tokens,
      },
      message: "Login successful",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
