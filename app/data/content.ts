export const hero = {
  statement: "Kenyan software engineer, making tools other developers build on.",
  intro:
    "I build KickJS, fcms, fordb and the Forinda RTC SDK in the open, and ship production platforms as a software engineer at Datawise Africa.",
};

export const about = {
  paragraphs: [
    "I started coding while studying Computer Science at Egerton University and moved quickly from coursework to production systems. Using tools was never enough; I wanted to know how they worked underneath.",
    "That curiosity became KickJS, a framework that began as a scaffolding script and grew into 17 packages running on Express, Fastify or h3. Today I ship production platforms at Datawise Africa and keep building open-source tools: fcms, fordb and a WebRTC SDK.",
  ],
};

export const skills = {
  categories: [
    {
      name: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go"],
    },
    {
      name: "Systems & APIs",
      items: [
        "Node.js",
        "Express.js (v5)",
        "GraphQL",
        "REST API Design",
        "WebSocket / SSE",
        "Flask / FastAPI",
      ],
    },
    {
      name: "Frontend",
      items: ["React.js", "Vue.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      name: "Data & Storage",
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Drizzle ORM"],
    },
    {
      name: "Infrastructure",
      items: [
        "Docker",
        "CI/CD (GitHub Actions)",
        "OpenTelemetry",
        "Linux / Shell",
      ],
    },
    {
      name: "Messaging & Scheduling",
      items: ["BullMQ", "RabbitMQ", "Apache Kafka", "Cron Scheduling"],
    },
  ],
};

export type Link = { label: string; href: string };

export const kickjs = {
  name: "KickJS",
  summary:
    "A production-grade, decorator-driven Node.js framework for TypeScript. NestJS ergonomics without the weight: dependency injection, modules and generators, end-to-end types from Zod and Vite, and your choice of Express, Fastify or h3 underneath.",
  quickStart: "npx @forinda/kickjs-cli new my-api",
  codeSnippet: `@Controller()
export class HelloController {
  @Autowired() private readonly hello!: HelloService

  @Get('/')
  index(ctx: Ctx<KickRoutes.HelloController['index']>) {
    return this.hello.greet('World')
  }
}`,
  codeFilename: "hello.controller.ts",
  keyPackages: [
    { name: "@forinda/kickjs", desc: "Core: DI, decorators, pluggable HTTP runtimes" },
    { name: "@forinda/kickjs-cli", desc: "Scaffolding, generators and custom commands" },
    { name: "@forinda/kickjs-db", desc: "Code-first ORM with reversible migrations" },
    { name: "@forinda/kickjs-client", desc: "Typed fetch client, end-to-end response types" },
    { name: "@forinda/kickjs-ws", desc: "WebSocket controllers on ws or Socket.IO" },
    { name: "@forinda/kickjs-ai", desc: "AI providers, tools, streaming, RAG and agents" },
  ],
  packageCount: 17,
  allPackagesHref: "https://kickjs.app",
  links: [
    { label: "Docs", href: "https://kickjs.app" },
    { label: "GitHub", href: "https://github.com/forinda/kick-js" },
  ] satisfies Link[],
};

export const products: { name: string; description: string; links: Link[] }[] = [
  {
    name: "fcms",
    description:
      "A self-hostable CMS where your whole site is one readable file, edited through the admin, the CLI, or an AI agent over MCP. Postgres runs inside the process, so there is nothing to set up.",
    links: [
      { label: "Site", href: "https://fcms.kickjs.app" },
      { label: "GitHub", href: "https://github.com/forinda/fcms" },
    ],
  },
  {
    name: "fordb",
    description:
      "A keyboard-first desktop client for PostgreSQL, SQLite and MongoDB. Every destructive change is shown as SQL and confirmed before it runs.",
    links: [
      { label: "Docs", href: "https://forinda.github.io/fordb/" },
      { label: "GitHub", href: "https://github.com/forinda/fordb" },
    ],
  },
  {
    name: "Forinda RTC SDK",
    description:
      "A framework-agnostic WebRTC SDK: publish, view, chat, share screens and record from TypeScript, React, Vue or Web Components, against any signaling backend.",
    links: [
      { label: "Docs", href: "https://forinda.github.io/forinda-rtc-sdk/" },
      { label: "GitHub", href: "https://github.com/forinda/forinda-rtc-sdk" },
    ],
  },
];

export const clientWork: { name: string; role: string; description: string; href: string }[] = [
  {
    name: "Datawise Africa",
    role: "Software Engineer",
    description:
      "Production platform for an AI and data research company partnered with Kaggle and Lacuna Fund.",
    href: "https://datawiseafrica.com",
  },
  {
    name: "Datalab Africa",
    role: "Software Engineer",
    description:
      "Data collaboration platform where data creators keep ownership and users get verified insights.",
    href: "https://datalabafrica.com",
  },
  {
    name: "UrbanEcho",
    role: "Software Engineer",
    description: "Urban intelligence platform with data-driven insights for planning and development.",
    href: "https://www.urbanecho.io",
  },
  {
    name: "nuxt-swal",
    role: "Creator",
    description: "SweetAlert2 module for Nuxt 3 with global alert methods, a composable API and TypeScript support.",
    href: "https://github.com/forinda/nuxt-swal",
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Datawise Africa",
    period: "Dec 2025 – Present",
    description:
      "Engineering production platforms for an AI and data research company. Leading development of the Datawise Africa platform and the Datalab Africa collaboration system.",
  },
  {
    title: "Software Engineer Intern",
    company: "Datawise Africa",
    period: "May 2025 – Nov 2025",
    description:
      "Built and shipped the initial Datawise Africa platform and the Datalab Africa collaboration system.",
  },
  {
    title: "Software Engineer (Contract)",
    company: "Enaton",
    period: "Aug 2023 – Oct 2024",
    description:
      "Designed and built backend services, APIs, and data pipelines for production systems.",
  },
];

export const education = {
  degree: "Bachelor of Science, Computer Science",
  school: "Egerton University",
  years: "2019 – 2025",
  focus: ["Software Engineering", "Systems Design", "Algorithms"],
};

export const certifications = [
  "Learning Amazon Web Services (AWS) for Developers",
  "JavaScript: The Tricky Bits",
  "Learning ECMAScript 6+ (ES6+)",
  "Docker for Developers",
];

export const awards = [
  { name: "Microsoft Learn Student Ambassador", detail: "Microsoft, January 2022" },
];

export const socialLinks = {
  github: "https://github.com/forinda",
  linkedin: "https://www.linkedin.com/in/felixorinda",
  kickjsDocs: "https://kickjs.app",
  email: "forinda82@gmail.com",
};

export const shortBio =
  "Felix Orinda is a Kenyan software engineer and the creator of KickJS — an open-source, decorator-driven Node.js framework with 17 packages — and of fordb and fcms. He builds for Africa and beyond.";
