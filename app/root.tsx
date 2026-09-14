import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { container } from "./components/section";
import { GTAG_ID, gtagBootstrap } from "./lib/analytics";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        {GTAG_ID && (
          <>
            <script dangerouslySetInnerHTML={{ __html: gtagBootstrap(GTAG_ID) }} />
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
          </>
        )}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  const title = notFound ? "Page not found" : "Something went wrong";
  const details = notFound
    ? "The page you were looking for doesn't exist or has moved."
    : "An unexpected error stopped this page from loading.";
  const stack = import.meta.env.DEV && error instanceof Error ? error.stack : undefined;

  return (
    <main className={`${container} flex flex-col gap-6 py-24`}>
      <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08]">{title}</h1>
      <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">{details}</p>
      <a href="/" className="link self-start">
        Go to the homepage
      </a>
      {stack && (
        <pre className="overflow-x-auto border border-rule p-4 font-mono text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
