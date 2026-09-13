import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1080px] px-5 md:px-8";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-16 md:py-24">
      <div className={`${container} flex flex-col gap-10 md:gap-12`}>
        <h2 id={`${id}-title`} className="font-serif text-[2.25rem] leading-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
