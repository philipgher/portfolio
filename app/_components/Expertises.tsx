import { TiltCard } from "./TiltCard";

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
          <TiltCard key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
}