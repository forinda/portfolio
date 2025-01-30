import { IUserWithoutPassword } from "~/types/schema";

export default defineEventHandler(async (event) => {
  const user = await getUserFromSession(event);
  if (user) event.context.user = user as unknown as IUserWithoutPassword;
});

declare module "h3" {
  interface H3EventContext {
    user?: IUserWithoutPassword;
  }
}
