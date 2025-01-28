import {
  createHttpErrorResponse,
  createHttpResponse,
} from "~/utils/create-http-reponse";
import { Jwt } from "~/utils/tokens";

export default defineEventHandler(async (event) => {
  try {
    const header = getHeader(event, "Authorization");
    if (!header) {
      return createHttpResponse(event, {
        status: 401,
        message: "Invalid token",
        access: false,
      });
    }

    const [scheme, token] = header.split(" ");
    if (!token) {
      return createHttpResponse(event, {
        status: 401,
        message: "Please provide auth token",
        access: false,
      });
    }

    if (!/Bearer/.test(scheme.trim())) {
      return createHttpResponse(event, {
        status: 401,
        message: "Invalid token scheme",
        access: false,
      });
    }
    const ver = Jwt.verifyToken(token!, "access");

    return createHttpResponse(event, {
      status: 200,
      data: ver.claims,
      message: "Token is valid",
      access: true,
    });
  } catch (error: any) {
    return createHttpErrorResponse(event, error, false);
  }
});
