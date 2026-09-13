import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyButton({
  getText,
  label,
  className = "",
}: {
  getText: () => string;
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the text stays visible and selectable.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className={`text-ink-muted transition-colors hover:text-ink ${className}`}
      >
        {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
}
