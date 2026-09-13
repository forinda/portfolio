import type { Route } from "./+types/home";
import { socialLinks } from "~/data/content";
import { listArticles } from "~/lib/articles.server";
import { siteUrl } from "~/lib/site";
import { Portfolio } from "~/portfolio";
import { seo } from "~/utils/seo";

export function loader({ request }: Route.LoaderArgs) {
  return { origin: siteUrl(request), articles: listArticles().slice(0, 3) };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const origin = loaderData?.origin ?? "";
  const url = `${origin}/`;
  return seo({
    title: "Felix Orinda | Software Engineer",
    description:
      "Kenyan software engineer. Creator of KickJS, fcms, fordb and the Forinda RTC SDK, and a software engineer at Datawise Africa.",
    url,
    canonical: url,
    image: `${origin}/forinda.png`,
    siteName: "Felix Orinda",
    author: "Felix Orinda",
    keywords:
      "Felix Orinda, Software Engineer, KickJS, fcms, fordb, Node.js, TypeScript, Kenya",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Felix Orinda",
        url,
        jobTitle: "Software Engineer",
        nationality: { "@type": "Country", name: "Kenya" },
        sameAs: [socialLinks.github, socialLinks.linkedin],
        knowsAbout: ["TypeScript", "Node.js"],
      },
      { "@context": "https://schema.org", "@type": "WebSite", name: "Felix Orinda", url },
    ],
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Portfolio articles={loaderData.articles} />;
}
