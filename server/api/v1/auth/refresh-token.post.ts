export default defineEventHandler(async (event) => {
    try {
        const header = getHeader(event, "Authorization");
        if (!header) {
            return createHttpResponse(event, {
                status: 401,
                message: "Please provide auth token",
            });
        }
        const [scheme, token] = header.split(" ");
        if (!token) {
            return createHttpResponse(event, {
                status: 401,
                message: "Unauthorized",
            });
        }

        if (/Bearer/.test(scheme)) {
            return createHttpResponse(event, {
                status: 401,
                message: "Invalid token scheme",
            });
        }

        const prev = Jwt.verifyToken(token, "refresh");
        const tokens = Jwt.generateTokens({
            ...prev.claims,
        });
        return createHttpResponse(event, {
            status: 200,
            data: {
                ...tokens,
            },
            message: "Token refreshed",
        });
    } catch (error: any) {
        return createHttpErrorResponse(event, error);
    }
});
