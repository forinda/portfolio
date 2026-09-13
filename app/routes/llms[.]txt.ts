import type { Route } from "./+types/llms[.]txt";
import { hero, kickjs, products, socialLinks } from "~/data/content";
import { listArticles } from "~/lib/articles.server";
import { siteUrl, textResponse } from "~/lib/site";

export function loader({ request }: Route.LoaderArgs) {
  const origin = siteUrl(request);
  const articles = listArticles();

  const lines = [
    "# Felix Orinda",
    "",
    `> ${hero.statement}`,
    "",
    hero.intro,
    "",
    "## Products",
    "",
    `- [${kickjs.name}](${kickjs.links[0].href}): ${kickjs.summary}`,
    ...products.map(
      (product) => `- [${product.name}](${product.links[0].href}): ${product.description}`,
    ),
    "",
  ];

  if (articles.length > 0) {
    lines.push(
      "## Articles",
      "",
      ...articles.map(
        (article) => `- [${article.title}](${origin}/articles/${article.slug}): ${article.summary}`,
      ),
      "",
    );
  }

  lines.push(
    "## Contact",
    "",
    `- Email: ${socialLinks.email}`,
    `- GitHub: ${socialLinks.github}`,
    `- LinkedIn: ${socialLinks.linkedin}`,
    `- Website: ${origin}/`,
    "",
  );

  return textResponse(lines.join("\n"));
}
