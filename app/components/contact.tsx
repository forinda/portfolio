import { socialLinks } from "~/data/content";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-6">
        <p className="max-w-[32ch] font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
          Open to remote roles, contracts and open-source collaboration.
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[1.0625rem]">
          <li>
            <a href={`mailto:${socialLinks.email}`} className="link">
              {socialLinks.email}
            </a>
          </li>
          <li>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn<span aria-hidden="true"> ↗</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub<span aria-hidden="true"> ↗</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
