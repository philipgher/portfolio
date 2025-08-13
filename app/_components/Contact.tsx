import { ContactOptions } from "./ContactOptions";

export function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto p-6 my-20"
    >
      <h2 className="text-4xl font-bold text-center mb-8 animate-bg-image bg-repeat bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Let&apos;s Build Something Great Together
      </h2>
      <p className="text-lg text-center mb-12">
        I&apos;m always excited to take on new challenges and help bring your ideas to life. Whether you need a full-stack application, a frontend redesign, or just some expert advice, I&apos;m here to help.
      </p>

      <div className="flex justify-center items-center space-x-4">
        <ContactOptions isOpen={true} />
      </div>
    </section>
  )
}