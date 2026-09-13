interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  siteName?: string;
  locale?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterHandle?: string;
  author?: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  jsonLd?: object | object[];
}

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: "link"; rel: string; href: string }
  | { "script:ld+json": object };

export function seo({
  title,
  description,
  url,
  image,
  imageWidth,
  imageHeight,
  siteName,
  locale = "en_US",
  type = "website",
  twitterCard = "summary_large_image",
  twitterHandle,
  author,
  keywords,
  canonical,
  noIndex = false,
  publishedTime,
  modifiedTime,
  tags = [],
  jsonLd,
}: SeoProps): MetaEntry[] {
  const meta: MetaEntry[] = [{ title }, { name: "description", content: description }];

  if (noIndex) meta.push({ name: "robots", content: "noindex, nofollow" });
  if (canonical) meta.push({ tagName: "link", rel: "canonical", href: canonical });

  meta.push(
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: locale },
  );
  if (url) meta.push({ property: "og:url", content: url });
  if (siteName) meta.push({ property: "og:site_name", content: siteName });
  if (image) {
    meta.push({ property: "og:image", content: image });
    if (imageWidth) meta.push({ property: "og:image:width", content: imageWidth });
    if (imageHeight) meta.push({ property: "og:image:height", content: imageHeight });
  }

  if (type === "article") {
    if (publishedTime) meta.push({ property: "article:published_time", content: publishedTime });
    if (modifiedTime) meta.push({ property: "article:modified_time", content: modifiedTime });
    if (author) meta.push({ property: "article:author", content: author });
    for (const tag of tags) meta.push({ property: "article:tag", content: tag });
  }

  meta.push(
    { name: "twitter:card", content: twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  );
  if (image) meta.push({ name: "twitter:image", content: image });
  if (twitterHandle) {
    meta.push(
      { name: "twitter:site", content: twitterHandle },
      { name: "twitter:creator", content: twitterHandle },
    );
  }

  if (author) meta.push({ name: "author", content: author });
  if (keywords) meta.push({ name: "keywords", content: keywords });

  if (jsonLd) {
    for (const item of Array.isArray(jsonLd) ? jsonLd : [jsonLd]) {
      meta.push({ "script:ld+json": item });
    }
  }

  return meta;
}
