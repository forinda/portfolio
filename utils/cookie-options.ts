import type { CookieOptions } from "#app";

export const cookieOptions: CookieOptions = {
    secure: process.env.NODE_ENV === "production",
    domain: process.env.NUXT_COOKIE_DOMAIN ?? "localhost",
    sameSite: (process.env.NUXT_COOKIE_SAMESITE ||
        "strict") as CookieOptions["sameSite"],
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
};
