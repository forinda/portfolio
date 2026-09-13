import type { Route } from "./+types/robots[.]txt";
import { siteUrl, textResponse } from "~/lib/site";

export function loader({ request }: Route.LoaderArgs) {
  return textResponse(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl(request)}/sitemap.xml\n`);
}
