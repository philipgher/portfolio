import React from "react";
import { StrongUnderline } from "../_components/StrongUnderline";
import { ServiceCard } from "../_components/ServicesCard";
import { GithubIcon, LinkIcon, NextjsIcon } from "../_components/Icons";
import { Contact } from "../_components/Contact";
import Link from "next/link";

export default function PayloadCMSExpertise() {
  return (
    <div className="font-sans text-gray-400 pb-20">
      <header className="relative z-10 max-w-4xl mx-auto p-6 mb-12 mt-6">
        <h1 className="text-3xl font-bold animate-bg-image bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          <Link href="/">
            Philip Ghering
          </Link>
        </h1>
        <h2 className="text-4xl font-bold mt-20 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Payload CMS Expert & Consultant
        </h2>
      </header>

      <section
        className="max-w-4xl mx-auto px-6 space-y-6"
        aria-labelledby="payload-intro"
      >
        <header>
          <h2 id="payload-intro" className="sr-only">
            Introduction to Payload CMS Expertise
          </h2>
        </header>
        <p className="text-lg leading-relaxed">
          I specialize in{" "}
          <StrongUnderline color="purple">Payload CMS</StrongUnderline>, a modern,
          open-source headless CMS built with Next.js and TypeScript.
        </p>
        <p className="text-lg leading-relaxed">
          My expertise covers everything from custom content modeling and authentication to advanced API integrations and deployment strategies.
        </p>
        <p className="text-lg leading-relaxed">
          In my opinion it finds the best sweet spot on the current CMS market, balancing developer experience, user-friendliness and flexibility without the limitations of SaaS platforms.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
          aria-label="Payload CMS Features"
        >
          <ServiceCard
            title="Built with Next.js"
            description="Most of my Frontends will be built with Next.js.
            Payload connects in the smoothest, most performant and most secure way."
            icon={<NextjsIcon />}
          />
          <ServiceCard
            title="Open Source"
            description="Unlike all SaaS CMS's out there (DirectusIO, Sanity and alike) there are no restrictions on user seats, roles or usage whatsoever, ever."
            icon={<GithubIcon />}
          />
          <ServiceCard
            title="Integrates with everything"
            description="Due to its open core, I can integrate and couple all external systems."
            icon={<LinkIcon />}
          />
        </div>

        <p className="text-lg leading-relaxed group">
          With Payload, I deliver{" "}
          <StrongUnderline color="pink">scalable</StrongUnderline>,{" "}
          <StrongUnderline color="blue">secure</StrongUnderline>, and{" "}
          <StrongUnderline color="purple">highly customizable</StrongUnderline>{" "}
          solutions for startups and enterprises alike.
          I’ve built multi-tenant
          platforms, <StrongUnderline color="pink">e-commerce</StrongUnderline> backends, and <StrongUnderline color="blue">creative content</StrongUnderline> workflows using
          Payload&apos;s flexible architecture.
        </p>

        <section
          aria-labelledby="payload-use-cases"
          className="max-w-lg mx-auto my-20"
        >
          <h2 id="payload-use-cases" className="text-2xl font-bold mb-4">
            Use Cases
          </h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-xl font-semibold mb-2">
                E-commerce
              </h3>
              <p>
                Payload CMS is an excellent choice for building e-commerce sites due to its flexibility, extensibility, and developer-friendly architecture.
                <br />
                With Payload, you can model complex product catalogs, manage inventory, handle orders, and integrate payment gateways—all within a secure, customizable admin panel.
                <br />
                Its robust API enables seamless integration with frontend frameworks like Next.js, allowing for dynamic product displays, personalized shopping experiences, and real-time updates.
                <br />
                Payload’s granular access controls and authentication features ensure that sensitive data and workflows remain protected, making it ideal for scaling e-commerce platforms as your business grows.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2">Admin panels</h3>
              <p>
                Payload CMS excels at powering custom admin panels for businesses and organizations.
                <br />
                Its flexible schema system lets you define exactly the data structures and workflows your team needs, from user management to complex approval processes.
                <br />
                The built-in admin UI is fully customizable, so you can tailor the interface to match your branding and optimize productivity for your users.
                <br />
                With robust authentication, granular access controls, and audit logging, Payload ensures your admin panel remains secure and compliant.
                <br />
                Whether you need dashboards, reporting tools, or workflow automation, Payload provides the foundation for building scalable, maintainable admin solutions.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2">Marketing websites</h3>
              <p>
                Payload CMS is a powerful choice for marketing websites, offering marketers and developers full control over content, SEO, and design.
                <br />
                Its flexible content modeling lets you create landing pages, blogs, and campaign microsites tailored to your brand’s needs.
                <br />
                Payload’s rich-text editor, media management, and custom fields make it easy to manage dynamic content and assets.
                <br />
                With built-in SEO tools and fast API responses, your site can achieve optimal search rankings and performance.
                <br />
                Payload integrates seamlessly with modern frontend frameworks, enabling pixel-perfect designs and interactive experiences.
                <br />
                Whether you need rapid iteration for campaigns or robust localization, Payload provides the agility and scalability required for high-impact marketing sites.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2">Multi-tenant setups</h3>
              <p>
                Payload CMS supports multi-tenant architectures, enabling you to serve multiple clients or organizations from a single platform while keeping their data isolated and secure.
                <br />
                By leveraging Payload’s flexible schema and access control features, you can design collections and authentication strategies that ensure each tenant only accesses their own resources.
                <br />
                This approach is ideal for SaaS platforms, agencies, or businesses managing multiple brands.
                <br />
                You can implement tenant-aware APIs, custom roles, and granular permissions, allowing for tailored workflows and user experiences per tenant.
                <br />
                Payload’s extensibility also makes it easy to integrate external services or automate onboarding for new tenants, ensuring scalability as your platform grows.
              </p>
            </article>
          </div>
        </section>

        <p className="text-lg leading-relaxed">
          If you need a robust CMS that adapts to your business, or want to
          migrate from legacy systems to Payload, I can help architect and
          deliver a solution that fits your needs.
        </p>
      </section>

      <Contact />
    </div >
  );
}