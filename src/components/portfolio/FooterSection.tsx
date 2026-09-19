import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import Logo from "../../assets/footer-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const social = [
    { icon: <FaGithub  className="w-5 h-5"/>, href: "https://github.com/emranhossain-ador" },
    { icon: <LuLinkedin  className="w-5 h-5"/>, href: "https://www.linkedin.com/in/emran-hossain-ador/" },
    { icon: <MdMailOutline className="w-5 h-5" />, href: "mailto:emranhossain.ador@gmail.com" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-5 sm:flex-row sm:justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <img src={Logo} alt="" className="h-16 w-auto object-cover"/>
        </a>

        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {social.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 AL Emran. Built with passion & clean code.
      </div>
    </footer>
  );
}
