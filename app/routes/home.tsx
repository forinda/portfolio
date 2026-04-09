import type { Route } from "./+types/home";
import { Portfolio } from "~/portfolio";
import { seo } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return seo({
    title: "Felix Orinda | Software Engineer",
    description:
      "Software engineer based in Nairobi, Kenya. Creator of KickJS — a 19-package Node.js framework. Designing and shipping production software across fintech, healthcare, SaaS, and data/AI.",
    url: "https://felixorinda.dev",
    image: "https://felixorinda.dev/og-image.png",
    siteName: "Felix Orinda",
    author: "Felix Orinda",
    keywords:
      "Felix Orinda, Software Engineer, KickJS, Node.js, TypeScript, Systems Design, Nairobi, Kenya",
  });
}

export default function Home() {
  return <Portfolio />;
}
