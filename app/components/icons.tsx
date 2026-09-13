import type { ReactNode } from "react";

export {
  IconBrandGithub as GitHubIcon,
  IconBrandLinkedin as LinkedInIcon,
  IconExternalLink as ExternalLinkIcon,
  IconMenu2 as MenuIcon,
  IconX as CloseIcon,
  IconChevronDown as ArrowDownIcon,
  IconCheck as CheckIcon,
  IconAward as AwardIcon,
  IconBrandTypescript as TypeScriptIcon,
  IconTerminal2 as TerminalIcon,
  IconCopy as CopyIcon,
  IconArrowUp as ArrowUpIcon,
  IconBriefcase as BriefcaseIcon,
  IconSchool as SchoolIcon,
  IconMapPin as MapPinIcon,
  IconMail as MailIcon,
} from "@tabler/icons-react";

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </Svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </Svg>
  );
}
