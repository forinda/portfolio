import { API_URL } from "./constants/api";

type Params = {};
type AccessGrantType = "token" | "forbidden";
export async function checkAuth(params: Params = {}) {
    const token = useCookie("access_token", {
        sameSite: "strict",
        secure: true,
    });
    // Query cookies to check if user is authenticated
    const resp = await fetch(API_URL + "/auth/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value ?? ""}`,
        },
        credentials: "include",
        body: JSON.stringify({}),
    });
    const data = (await resp.json()) as { access: boolean };
    return {
        ...data,
        type: resp.status === 403 ? "forbidden" : "token",
    } as { access: boolean; type: AccessGrantType };
}
