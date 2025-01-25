import {
    createHttpErrorResponse,
    createHttpResponse,
} from "~/utils/create-http-reponse";
import { Jwt } from "~/utils/tokens";

export default defineEventHandler(async (event) => {
    try {
        // const header = getHeader(event, "Authorization");
        const accessToken = getCookie(event, "access_token");
        // console.log({header,accessToken});

        // if (!header && !accessToken) {
        //     return createHttpResponse(event, {
        //         status: 401,
        //         message: "Please provide auth token",
        //         access: false,
        //     });
        // }

        // if (header) {
        //     const [scheme, token] = header.split(" ");
        //     if (!token) {
        //         return createHttpResponse(event, {
        //             status: 401,
        //             message: "Unauthorized",
        //             access: false,
        //         });
        //     }

        //     if (/Bearer/.test(scheme)) {
        //         return createHttpResponse(event, {
        //             status: 401,
        //             message: "Invalid token scheme",
        //             access: false,
        //         });
        //     }
        //     if (accessToken !== token) {
        //         deleteCookie(event, "access_token");
        //         deleteCookie(event, "refresh_token");
        //         return createHttpResponse(event, {
        //             status: 401,
        //             message: "Invalid token",
        //             access: false,
        //         });
        //     }
        // }
        const ver = Jwt.verifyToken(accessToken!, "access");
        console.log({ ver });

        return createHttpResponse(event, {
            status: 200,
            message: "Token is valid",
            access: true,
        });
    } catch (error: any) {
        return createHttpErrorResponse(event, error, false);
    }
});
