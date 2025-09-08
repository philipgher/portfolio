import { MailIcon, LinkedinIcon, GithubIcon, DiscordIcon } from "./Icons";

export const contacts = [
  {
    icon: <MailIcon />,
    href: "mailto:pghering@me.com",
    color: "bg-pink-500",
    srText: "Email me",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/philip-ghering-942460115/",
    color: "bg-blue-600",
    srText: "Connect on LinkedIn"
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/philipgher",
    color: "bg-gray-800",
    srText: "View my GitHub"
  },
  {
    icon: <DiscordIcon />,
    href: "https://discordapp.com/users/786879227466874891",
    color: "bg-indigo-800",
    srText: "Chat with me on Discord",
  },
  // {
  //   icon: <FiverrrIcon />,
  //   href: "https://nl.fiverr.com/s/P2EoKoL",
  //   color: "bg-green-600",
  //   srText: "Hire me on Fiverr",
  // }
];

export function ContactOptions({ isOpen }: { isOpen: boolean }) {
  return contacts.map((contact, i) => (
    <a
      key={contact.href}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transform transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } ${contact.color}`}
      style={{ transitionDelay: `${(isOpen ? 1 : -1) * i * 0.02}s` }}
    >
      <span className="size-4">
        {contact.icon}
      </span>
      <span className="sr-only">{contact.srText}</span>
    </a>
  ))
}