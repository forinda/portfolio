import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./motion";
import { skills } from "~/data/content";

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return { ref, offset };
}

export function Skills() {
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden relative" ref={parallaxRef}>
      {/* Parallax background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-[10%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-100/30 dark:bg-accent-500/5 blur-2xl" />
        <div className="absolute bottom-[20%] left-[5%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent-200/20 dark:bg-accent-400/5 blur-3xl" />
        <div className="absolute top-[40%] left-[50%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-cyan-100/25 dark:bg-cyan-500/5 blur-2xl" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative mb-8 md:mb-10">
          <span
            aria-hidden
            className="heading-display text-[8rem] md:text-[14rem] text-gray-100 dark:text-white/[0.04] absolute -top-12 md:-top-20 -left-4 select-none pointer-events-none leading-none"
          >
            02
          </span>
          <div className="relative z-10 pt-8 md:pt-12">
            <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">Skills</p>
            <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              Technical
              <br />
              <span className="text-gradient">toolkit</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skills.categories.map((category, i) => (
            <FadeIn
              key={category.name}
              delay={i * 80}
              className={i % 2 === 1 ? "md:mt-12" : ""}
            >
              <h3 className="heading-display text-lg text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-full hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
