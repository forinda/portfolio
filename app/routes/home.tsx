import type { Route } from "./+types/home";
import { socialLinks } from "~/data/content";
import { siteUrl } from "~/lib/site";
import { Portfolio } from "~/portfolio";
import { seo } from "~/utils/seo";

export function loader({ request }: Route.LoaderArgs) {
  return { origin: siteUrl(request) };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const origin = loaderData?.origin ?? "";
  const url = `${origin}/`;
  return seo({
    title: "Felix Orinda | Software Engineer",
    description:
      "Software engineer based in Nairobi, Kenya. Creator of KickJS, fcms, fordb and the Forinda RTC SDK, and a software engineer at Datawise Africa.",
    url,
    canonical: url,
    image: `${origin}/forinda.png`,
    siteName: "Felix Orinda",
    author: "Felix Orinda",
    keywords:
      "Felix Orinda, Software Engineer, KickJS, fcms, fordb, Node.js, TypeScript, Nairobi, Kenya",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Felix Orinda",
        url,
        jobTitle: "Software Engineer",
        address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
        sameAs: [socialLinks.github, socialLinks.linkedin],
        knowsAbout: ["TypeScript", "Node.js"],
      },
      { "@context": "https://schema.org", "@type": "WebSite", name: "Felix Orinda", url },
    ],
  });
}

export default function Home() {
  return <Portfolio />;
}
