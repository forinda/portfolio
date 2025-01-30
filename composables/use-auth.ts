import type { CheckAuthResponseType, LoginResponseType } from "~/types";
import type { LoginUserSchemaType } from "~/lib/schema/login-user-schema";

export async function useAuth() {
  const { setUser, user } = useAuthUser();
  const {
    public: { API_URL },
  } = useRuntimeConfig();
  type LoginOptions<Data = any, Err = Error> = {
    onSuccess?: (data: Data) => void;
    onError?: (error: Err) => void;
  };
  const loginUser = async (
    values: LoginUserSchemaType,
    options: LoginOptions<LoginResponseType> = {},
  ) => {
    try {
      const data = await $fetch<LoginResponseType>(API_URL + "/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser(data.data.user);

      if (options.onSuccess && typeof options.onSuccess === "function") {
        options.onSuccess(data);
      }
      return;
    } catch (error: any) {
      console.log({ error });

      if (options.onError && typeof options.onError === "function") {
        options.onError(error.response._data);
      }
    }
  };

  const logout = async () => {
    await $fetch<CheckAuthResponseType>(API_URL + "/auth/logout", {
      method: "POST",
    });
    setUser(null);
  };

  const getSession = async () => {
    if (user.value) return;
    try {
      const data = await $fetch<CheckAuthResponseType>(
        API_URL + "/auth/session",
        {
          method: "GET",
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        },
      );
      setUser(data.data as any);
    } catch (error: any) {
      setUser(null);
    }
  };
  return { loginUser, logout, getSession, sessionUser: user };
}
