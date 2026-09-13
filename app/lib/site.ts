const configuredUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, "");

// Without a configured URL, links come from the request's Host header, so a shared cache
// could store a response built from a forged Host. Only allow public caching when configured.
const CACHE = configuredUrl ? "public, max-age=3600" : "no-store";

export function siteUrl(request: Request): string {
  return configuredUrl || new URL(request.url).origin;
}

export function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function xmlResponse(body: string, type = "application/xml"): Response {
  return new Response(body, {
    headers: { "Content-Type": `${type}; charset=utf-8`, "Cache-Control": CACHE },
  });
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": CACHE },
  });
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(isoDate: string): string {
  return dateFormat.format(new Date(`${isoDate}T00:00:00Z`));
}
