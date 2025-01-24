import jwt from "jsonwebtoken";
type JwtPayload = {
    claims: {
        id: string;
        email: string;
        username: string;
    };
    type: "access" | "refresh";
};

export class Jwt {
    static createAccessToken(payload: JwtPayload) {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
            expiresIn: "15m",
        });
    }

    static createRefreshToken(payload: JwtPayload) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
            expiresIn: "7d",
            algorithm: "HS256",
        });
    }

    static verifyToken(token: string, secret: string) {
        return jwt.verify(token, secret);
    }

    static generateTokens(payload: Pick<JwtPayload, "claims">["claims"]) {
        const accessToken = Jwt.createAccessToken({
            claims: payload,
            type: "access",
        });
        const refreshToken = Jwt.createRefreshToken({
            claims: payload,
            type: "refresh",
        });

        return { accessToken, refreshToken };
    }
}
