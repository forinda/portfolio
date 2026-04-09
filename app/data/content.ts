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
    "I'm a software engineer based in Nairobi, Kenya, with a BSc in Computer Science from Egerton University and 3+ years shipping production systems. Most developers choose a framework. I built one — KickJS, an open-source, decorator-driven Node.js ecosystem with 19 packages and docs in 8 languages.",
};

export const about = {
  paragraphs: [
    "I started coding during my Computer Science studies at Egerton University and quickly moved beyond coursework into real-world production systems. My curiosity wasn't satisfied by just using tools — I wanted to understand how they worked at the deepest level.",
    "That curiosity led me to build KickJS: a full Node.js framework that started as a personal scaffolding tool and grew into a 19-package ecosystem. Building it forced me to understand middleware pipelines under load, dependency injection containers, graceful shutdowns, and every layer of a production system.",
    "I've shipped software for real companies — from AI research platforms to data collaboration systems to urban intelligence tools. I write clean, well-documented, handoff-ready code and communicate proactively so stakeholders always know where things stand.",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "19", label: "NPM Packages" },
    { value: "8", label: "Doc Languages" },
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
    "An open-source, decorator-driven Node.js framework built on Express 5 and TypeScript — sitting between Express's bare-metal flexibility and NestJS's heavyweight abstraction. Decorators for structure, Express under the hood, zero magic.",
  highlights: [
    "Decorator-driven routing & DI",
    "REST, GraphQL, WebSocket & SSE",
    "Auto-generated OpenAPI from Zod",
    "Built-in auth, caching, cron & mailer",
    "Full CLI scaffolding in 2 seconds",
    "Vite 8 HMR in ~200ms",
  ],
  stats: [
    { value: "19", label: "Packages" },
    { value: "8", label: "Doc Languages" },
    { value: "10", label: "Example Apps" },
    { value: "MIT", label: "License" },
  ],
  quickStart: "npx @forinda/kickjs-cli new my-api",
  codeSnippet: `import { bootstrap, helmet, cors } from '@forinda/kickjs'
import { modules } from './modules'

bootstrap({
  modules,
  middleware: [helmet(), cors(), express.json()],
})`,
  codeFilename: "index.ts",
  packages: [
    { name: "@forinda/kickjs", desc: "Core framework — decorators, DI, routing" },
    { name: "@forinda/kickjs-cli", desc: "CLI scaffolding — new projects & modules" },
    { name: "@forinda/kickjs-auth", desc: "Authentication & authorization subsystem" },
    { name: "@forinda/kickjs-cache", desc: "Caching layer with pluggable adapters" },
    { name: "@forinda/kickjs-cron", desc: "Cron job scheduling & management" },
    { name: "@forinda/kickjs-mailer", desc: "Email subsystem with template support" },
    { name: "@forinda/kickjs-queue", desc: "Queue adapters — BullMQ, RabbitMQ, Kafka" },
    { name: "@forinda/kickjs-openapi", desc: "Auto-generated Swagger from Zod schemas" },
    { name: "@forinda/kickjs-telemetry", desc: "OpenTelemetry tracing integration" },
  ],
  links: {
    docs: "https://forinda.github.io/kick-js",
    github: "https://github.com/forinda/kick-js",
  },
};

export const projects = [
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
    title: "Software Engineer Intern",
    company: "Datawise Africa",
    period: "May 2025 – Present",
    description:
      "Engineering production platforms for an AI and data research company. Delivered the Datawise Africa platform and the Datalab Africa collaboration system.",
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
  kickjsDocs: "https://forinda.github.io/kick-js",
  email: "forinda82@gmail.com",
};

export const shortBio =
  "Felix Orinda is a software engineer based in Nairobi, Kenya, and the creator of KickJS — an open-source, decorator-driven Node.js framework with 19 packages and docs in 8 languages. He builds for Africa and beyond.";
