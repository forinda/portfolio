import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Simple wrapper that just passes through — content is always visible.
 * Keeps the API so we don't have to change all component imports.
 */
export function FadeIn({
  children,
  className = "",
  delay: _delay = 0,
  direction: _direction = "up",
}: FadeInProps) {
  return <div className={className}>{children}</div>;
}
