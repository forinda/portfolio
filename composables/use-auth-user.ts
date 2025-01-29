import type { IUserWithoutPassword } from "~/types/schema";

export const useAuthUser = () => {
  const user = useState<IUserWithoutPassword | null>("auth:user", () => null);
  const setUser = (newUser: IUserWithoutPassword | null) => {
    user.value = newUser;
  };
  return { user, setUser };
};
