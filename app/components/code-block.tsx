import { useRef, type ComponentPropsWithoutRef } from "react";
import { CopyButton } from "./copy-button";

export function CodeBlock(props: ComponentPropsWithoutRef<"pre">) {
  const pre = useRef<HTMLPreElement>(null);

  return (
    <div className="relative">
      <pre ref={pre} {...props} />
      <CopyButton
        getText={() => pre.current?.innerText ?? ""}
        label="Copy code"
        className="absolute top-2 right-2 p-1.5"
      />
    </div>
  );
}
