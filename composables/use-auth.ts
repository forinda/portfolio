import type { CheckAuthResponseType } from "~/types";
import { API_URL } from "../utils/constants/api";

export async function useAuth() {
  const token = useCookie("access_token", {
    sameSite: "strict",
    secure: true,
  });

  const { data, status, error,refresh } = await useAsyncData("auth-check", async () => {
    const resp = await $fetch<CheckAuthResponseType>(API_URL + "/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value ?? ""}`,
      },
      credentials: "include",
      body: JSON.stringify({}),
    });
    return resp;
  });
  const errorDetails = computed(() => {
    const err = error.value;
    if (!err) return null;
    return {
      message: (err.toJSON() as any).data.message,
      status: error.value?.toJSON().statusCode,
    };
  });

  return {
    data,
    status,
    error: errorDetails,
    refresh
  };
}
