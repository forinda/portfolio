import { cookieOptions } from "~/utils/cookie-options";
import {
  createHttpErrorResponse,
  createHttpResponse,
} from "~/utils/create-http-reponse";

export default defineEventHandler(async (event) => {
  try {
    deleteCookie(event, "access_token", cookieOptions);
    deleteCookie(event, "refresh_token", cookieOptions);
    return createHttpResponse(event, {
      status: 200,
      message: "Logout successful",
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error);
  }
});
