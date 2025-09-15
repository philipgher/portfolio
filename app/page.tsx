import React from "react";
import { Expertises } from "./_components/Expertises";
import { Services } from "./_components/Services";
import { StrongUnderline } from "./_components/StrongUnderline";
import { DriftingShapes } from "./_components/DriftingShapes";
import { Contact } from "./_components/Contact";
import Clients from "./_components/Clients";
import Picture from "./_components/Picture";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-400 pb-20">
      <header className="max-w-4xl mx-auto p-6 mb-12 mt-6 flex justify-between items-center gap-4">
        <h1 className="text-3xl font-bold animate-bg-image bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Philip Ghering
        </h1>

        <div className="-my-[100%] translate-y-5 md:translate-y-10 lg:translate-y-16 hover:rotate-6 transition-transform">
          <Picture />
        </div>
      </header>

      <section
        id="about"
        className="mb-20 mx-auto"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="px-6 text-2xl leading-relaxed max-w-2xl my-20 lg:mt-32 lg:mb-52">
            I&apos;m a <strong>full-stack Node.js developer</strong> with over <strong>7 years of experience</strong> turning ideas into user-friendly, scalable, and secure cloud applications. My background in <strong>UX design</strong> means I don&apos;t just build features — I craft experiences that people enjoy using.
          </h2>
        </div>

        <div
          // className="bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-pink-900/80 backdrop-blur-xl shadow-[0_0_40px_rgba(236,72,153,0.15)] border-y border-purple-500/30 overflow-hidden group py-4"
          className="relative border-y border-purple-500/30 overflow-hidden group py-4"
        >
          <DriftingShapes />

          {/* Content */}
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              On the <StrongUnderline color="pink">frontend</StrongUnderline>, I specialize in <StrongUnderline color="blue">React</StrongUnderline> and love creating interfaces that feel fast, smooth, and accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              On the <StrongUnderline color="pink">backend</StrongUnderline>, I design robust{" "}
              <StrongUnderline color='blue'>Node.js</StrongUnderline> architectures that keep
              apps running reliably at scale. I&apos;m comfortable working across the stack —
              from database design and API integrations to CI/CD pipelines and production
              deployments.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              I&apos;ve built everything from <StrongUnderline color="purple">enterprise-level</StrongUnderline> platforms (where performance, security, and accessibility are critical) to bespoke, creative, interactive experiences.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Whether I&apos;m <StrongUnderline color="purple">collaborating</StrongUnderline> in a team of 20+ engineers or delivering a project end-to-end on my own, I bring a mix of <StrongUnderline color="purple">technical depth</StrongUnderline>, <StrongUnderline color="purple">problem-solving skills</StrongUnderline>, and a focus on <StrongUnderline color='blue'>getting things done right</StrongUnderline>.
            </p>
          </div>
        </div>
      </section >


      <Services />
      <Expertises />
      <Clients />

      <Contact />
    </div>
  );
}
