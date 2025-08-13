import { ServiceCard } from "./ServicesCard";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using React, Node.js, and cloud infrastructure. From design to deployment, I handle it all.",
    icon: "🧑‍💻",
    featured: false,
  },
  {
    title: "Frontend UX & UI Design",
    description:
      "Combining formal UX training with React expertise to build beautiful, user-friendly, and accessible interfaces.",
    icon: "🎨",
    featured: false,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Designing scalable and secure cloud architectures, implementing CI/CD pipelines, and managing deployments on AWS, Vercel, and more.",
    icon: "☁️",
    featured: false,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving app speed, accessibility, and scalability to ensure smooth user experiences on any device.",
    icon: "⚡",
    featured: false,
  },
  {
    title: "Creative Interactive Experiences",
    description:
      "Developing engaging, interactive projects using ThreeJS, PixiJS, React Spring for unique digital experiences.",
    icon: "✨",
    featured: false,
  },
  {
    title: "Security & Auth Integration",
    description:
      "Implementing best practices in authentication (OAuth2, JWT, Auth0) and API security to keep applications safe.",
    icon: "🔐",
    featured: false,
  },
  {
    title: "General Technical Consultation",
    description:
      "Providing expert advice on architecture, technology choices, code reviews, and best practices to help your project succeed.",
    icon: "💡",
    featured: true,
  },
];

export function Services() {
  return (
    <section className="p-6 my-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 animate-bg-image bg-repeat bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        What I Can Do For You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, description, icon, featured }) => (
          <ServiceCard
            key={title}
            title={title}
            description={description}
            icon={icon}
            featured={featured}
          />
        ))}
      </div>
    </section>
  )
}