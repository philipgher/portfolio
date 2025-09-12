import Link from "next/link";
import { TiltCard } from "./TiltCard";
import { DriftingShapes } from "./DriftingShapes";

const skillsData = [
  {
    category: "🎨 Frontend",
    items: [
      "TypeScript, React.js, Next.js",
      "Tailwind CSS, Styled Components",
      "Redux, Zustand, React Query",
      "Three.js, Framer Motion, React Spring",
      "Accessibility (WCAG), SEO best practices",],
  },
  {
    category: "🔧 Backend",
    items: [
      "Node.js (Express, Next.js)",
      "Drizzle, Prisma",
      "PostgreSQL, MySQL, MongoDB, Redis",
      "REST, GraphQL",
    ],
  },
  {
    category: "🤖 AI",
    items: [
      "OpenAI API, LangChain, Hugging Face, Tensorflow",
      "Prompt engineering, RAG, LLM orchestration",
      "AI-powered search, chatbots, assistants",
      "Responsible AI, privacy, ethics",
    ],
  },
  {
    category: "🛠️ CMS's & Integrations",
    items: [
      "Payload, Contentful, Sanity, Strapi, Umbraco Headless",
      "Shopify, Stripe",
      "AWS S3, Cloudinary",
    ],
  },
  {
    category: "☁️ DevOps & Cloud",
    items: [
      "GitHub Actions, GitLab CI, Azure CI",
      "Digital Ocean, Vercel",
      "Docker",
    ],
  },
  {
    category: "🔐 Security & Auth",
    items: [
      "OAuth2, JWT, Auth0",
      "OWASP Top 10, RBAC, secure API development",
    ],
  },
  {
    category: "📈 Monitoring & Analytics",
    items: [
      "Application Insights, Datadog, Sentry",
      "Google Analytics, Plausible",
    ],
  },
  {
    category: "🧪 Testing & QA",
    items: [
      "Unit, Integration, E2E testing",
      "Jest/Vitest, Cypress, Playwright",
    ],
  },
  {
    category: "🧰 Tooling & Project Management",
    items: [
      "Git, Docker, Postman, Jira, Notion, Slack",
      "Agile, Scrum, Kanban",
    ],
  },
];

export function Expertises() {
  return (
    <section
      id="skills"
      className="p-6 my-20 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12 animate-bg-image bg-repeat bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        My Expertises
      </h2>

      <div className="grid grid-cols-1 row-auto sm:grid-cols-2 gap-8">
        {skillsData.map(({ category, items }) => (
          <TiltCard
            key={category}
            category={category}
            items={items}
          />
        ))}
      </div>

      <ul className="space-y-4 mt-20 text-center">
        <li>
          <Link
            href={"/payloadcms-expertise"}
            className="group inline-flex items-center gap-6 px-10 py-6 rounded-full text-white
                        shadow-2xl shadow-indigo-400/40 hover:scale-105 transition-all
                        border border-white/15
                        bg-gradient-to-r from-indigo-500/40 via-purple-500/60 to-pink-500/50"
          >
            <span className="flex flex-col">
              Why I choose Payload CMS
              <span className="text-xs">
                (and you should too)
              </span>
            </span>
            <svg
              className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)",
                zIndex: 1,
              }}
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}