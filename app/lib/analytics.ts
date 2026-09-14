export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "analytics-consent";
const OPEN_EVENT = "analytics-consent:open";

/** Only accept a real GA4 Measurement ID, because it is interpolated into an inline script. */
export function parseGtagId(value: string | undefined): string | undefined {
  return value && /^G-[A-Z0-9]+$/.test(value) ? value : undefined;
}

// Optional chaining keeps this module importable by the plain-Node check script.
export const GTAG_ID = parseGtagId(import.meta.env?.VITE_GTAG_ID as string | undefined);

/**
 * Inline script for <head>: sets Consent Mode defaults before gtag.js loads.
 * Analytics storage stays denied until the visitor accepts; a stored choice is applied immediately.
 */
export function gtagBootstrap(id: string): string {
  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    `var consent="denied";try{if(localStorage.getItem("${CONSENT_KEY}")==="granted")consent="granted";}catch(e){}`,
    'gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:consent});',
    "gtag(\"js\",new Date());",
    `gtag("config","${id}");`,
  ].join("");
}

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
  window.gtag?.("consent", "update", { analytics_storage: value });
}

export function openConsentBanner(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentBannerOpen(listener: () => void): () => void {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}
