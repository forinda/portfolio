import type { H3Event } from "h3";
export async function getUserFromSession(event: H3Event) {
  const config = useRuntimeConfig(event);
  const cookie = getCookie(event, config.cookieName);
  if (!cookie) return null;
  const unsignedSession = CookieProcessor.unsign(cookie, config.cookieSecret);
  if (!unsignedSession) return null;

  const session = CookieProcessor.deserialize(unsignedSession);
  const { User } = await getBaseDbClient();
  return await User.findById(session.userId);
}
