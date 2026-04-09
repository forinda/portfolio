interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  siteName?: string;
  locale?: string;
  type?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterHandle?: string;
  author?: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
}

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: "link"; rel: string; href: string };

export function seo({
  title,
  description,
  url,
  image,
  imageWidth = "1200",
  imageHeight = "630",
  siteName,
  locale = "en_US",
  type = "website",
  twitterCard = "summary_large_image",
  twitterHandle,
  author,
  keywords,
  canonical,
  noIndex = false,
}: SeoProps): MetaEntry[] {
  const meta: MetaEntry[] = [
    { title },
    { name: "description", content: description },
  ];

  if (noIndex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  // Open Graph
  meta.push(
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  );

  if (url) {
    meta.push({ property: "og:url", content: url });
  }

  if (image) {
    meta.push(
      { property: "og:image", content: image },
      { property: "og:image:width", content: imageWidth },
      { property: "og:image:height", content: imageHeight },
    );
  }

  if (siteName) {
    meta.push({ property: "og:site_name", content: siteName });
  }

  meta.push({ property: "og:locale", content: locale });

  // Twitter Card
  meta.push(
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  );

  if (image) {
    meta.push({ name: "twitter:image", content: image });
  }

  if (twitterHandle) {
    meta.push(
      { name: "twitter:site", content: twitterHandle },
      { name: "twitter:creator", content: twitterHandle },
    );
  }

  // Extras
  if (author) {
    meta.push({ name: "author", content: author });
  }

  if (keywords) {
    meta.push({ name: "keywords", content: keywords });
  }

  if (canonical) {
    meta.push({ tagName: "link", rel: "canonical", href: canonical });
  }

  return meta;
}
