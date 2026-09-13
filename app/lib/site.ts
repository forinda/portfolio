const CACHE = "public, max-age=3600";

export function siteUrl(request: Request): string {
  const configured = import.meta.env.VITE_SITE_URL as string | undefined;
  return (configured || new URL(request.url).origin).replace(/\/+$/, "");
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
