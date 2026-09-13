export const hero = {
  name: "Felix Orinda",
  taglines: [
    "Software Engineer",
    "Framework Author",
    "Building for Africa & Beyond",
  ],
  oneLiner:
    "I design and ship production software across fintech, healthcare, SaaS, and data/AI — and I built the framework to build them faster.",
  paragraph:
    "I'm a software engineer based in Nairobi, Kenya, with a BSc in Computer Science from Egerton University and 3+ years shipping production systems. Most developers choose a framework. I built one — KickJS, an open-source, decorator-driven Node.js framework with 17 npm packages — plus fordb, a desktop database client, and fcms, a self-hostable CMS.",
};

export const about = {
  paragraphs: [
    "I started coding during my Computer Science studies at Egerton University and quickly moved beyond coursework into real-world production systems. My curiosity wasn't satisfied by just using tools — I wanted to understand how they worked at the deepest level.",
    "That curiosity led me to build KickJS: a full Node.js framework that started as a personal scaffolding tool and grew into a 17-package ecosystem running on Express, Fastify, or h3. Building it forced me to understand middleware pipelines under load, dependency injection containers, graceful shutdowns, and every layer of a production system.",
    "I've shipped software for real companies — from AI research platforms to data collaboration systems to urban intelligence tools. I write clean, well-documented, handoff-ready code and communicate proactively so stakeholders always know where things stand.",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "17", label: "NPM Packages" },
    { value: "3", label: "Open-Source Products" },
    { value: "5+", label: "Industries Served" },
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

export const kickjs = {
  summary:
    "A production-grade, decorator-driven Node.js framework for TypeScript — NestJS ergonomics without the complexity. Runs on Express, Fastify, or h3 (swap the engine in one line), with DI, modules, generators, and end-to-end type safety powered by Zod and Vite.",
  highlights: [
    "Decorator-driven routing & DI",
    "Express, Fastify or h3 runtimes",
    "Edge-ready: Workers, Bun & Deno",
    "Typegen + typed fetch client",
    "Auto OpenAPI from Zod schemas",
    "Vite HMR in ~200ms",
  ],
  stats: [
    { value: "17", label: "Packages" },
    { value: "v8", label: "Core Release" },
    { value: "4", label: "Runtimes" },
    { value: "MIT", label: "License" },
  ],
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
  packages: [
    { name: "@forinda/kickjs", desc: "Core framework — DI, decorators, pluggable HTTP runtimes" },
    { name: "@forinda/kickjs-cli", desc: "Scaffolding, generators & custom commands" },
    { name: "@forinda/kickjs-vite", desc: "Vite plugin — single-port HMR & typegen watcher" },
    { name: "@forinda/kickjs-client", desc: "Typed fetch client with end-to-end response types" },
    { name: "@forinda/kickjs-db", desc: "Native ORM — code-first schema & reversible migrations" },
    { name: "@forinda/kickjs-ws", desc: "WebSocket controllers on ws or Socket.IO" },
    { name: "@forinda/kickjs-ai", desc: "AI runtime — providers, tools, streaming, RAG & agents" },
    { name: "@forinda/kickjs-mcp", desc: "Expose controllers as Model Context Protocol tools" },
    { name: "@forinda/kickjs-swagger", desc: "OpenAPI generation, Swagger UI & ReDoc" },
    { name: "@forinda/kickjs-schema", desc: "Validation with Zod, Valibot, Yup, Joi or any Standard Schema" },
    { name: "@forinda/kickjs-queue", desc: "BullMQ queues & decorator-driven workers" },
    { name: "@forinda/kickjs-grpc", desc: "gRPC, gRPC-Web & Connect served from your app" },
    { name: "@forinda/kickjs-testing", desc: "TestModule builder & test helpers" },
    { name: "@forinda/kickjs-devtools", desc: "Dashboard — routes, DI container, metrics, health" },
    { name: "@forinda/kickjs-devtools-kit", desc: "Types, RPC & sampler for DevTools integrations" },
    { name: "@forinda/kickjs-cli-kit", desc: "Contract for CLI plugins & custom generators" },
    { name: "@forinda/kickjs-lint", desc: "Lint rules for framework conventions" },
  ],
  links: {
    docs: "https://kickjs.app",
    github: "https://github.com/forinda/kick-js",
  },
};

export const projects = [
  {
    name: "fordb",
    url: "https://github.com/forinda/fordb",
    role: "Creator & Maintainer",
    description:
      "Lean, keyboard-first desktop database client for PostgreSQL, SQLite, and MongoDB. Electron + TypeScript, with every destructive change previewed as SQL before it runs.",
  },
  {
    name: "fcms",
    url: "https://fcms.kickjs.app",
    role: "Creator & Maintainer",
    description:
      "Self-hostable CMS where your whole site is one readable file — edited through the admin, the CLI, or an AI agent over MCP. Embedded Postgres, zero setup.",
  },
  {
    name: "Forinda RTC SDK",
    url: "https://github.com/forinda/forinda-rtc-sdk",
    role: "Creator & Maintainer",
    description:
      "Framework-agnostic WebRTC SDK — publish, view, chat, screen-share, and record from TypeScript, React, Vue, or Web Components against any signaling backend. Core is ~8 KB gzipped.",
  },
  {
    name: "nuxt-swal",
    url: "https://github.com/forinda/nuxt-swal",
    role: "Creator & Maintainer",
    description:
      "Open-source SweetAlert2 module for Nuxt 3 with global alert methods, composable API, and full TypeScript support.",
  },
  {
    name: "Datawise Africa",
    url: "https://datawiseafrica.com",
    role: "Software Engineer",
    description:
      "Production platform for an AI and data research company partnered with Kaggle and Lacuna Fund.",
  },
  {
    name: "Datalab Africa",
    url: "https://datalabafrica.com",
    role: "Software Engineer",
    description:
      "Data collaboration platform enabling data creators to maintain ownership while giving users access to verified insights.",
  },
  {
    name: "UrbanEcho",
    url: "https://www.urbanecho.io",
    role: "Software Engineer",
    description:
      "Urban intelligence platform providing data-driven insights for urban planning and development.",
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
  {
    title: "Software Developer",
    company: "uTest",
    period: "Jul 2022 – Present",
    description:
      "Remote software development, testing, and quality engineering across client projects.",
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

export const socialLinks = {
  github: "https://github.com/forinda",
  linkedin: "https://www.linkedin.com/in/felixorinda",
  kickjsDocs: "https://kickjs.app",
  email: "forinda82@gmail.com",
};

export const shortBio =
  "Felix Orinda is a software engineer based in Nairobi, Kenya, and the creator of KickJS — an open-source, decorator-driven Node.js framework with 17 packages — and of fordb and fcms. He builds for Africa and beyond.";
