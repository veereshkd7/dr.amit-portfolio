import { Linkedin } from "lucide-react";
import { profile } from "../data";

const links = ["ABOUT", "PROTOCOL", "COMPETENCIES", "STUDIES", "EDUCATION", "CONTACT"];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md border-b border-line bg-paper/85">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.15em] text-navy hover:text-maroon transition-colors"
        >
          DR. AMIT TAMMANAGOUDAR
        </a>

        <div className="hidden md:flex items-center gap-6 font-mono text-[0.72rem] tracking-[0.08em]">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative text-inkSoft hover:text-navy transition-colors group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-maroon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white bg-navy font-mono text-[0.7rem] transition-all duration-300 hover:bg-maroon hover:-translate-y-0.5 hover:shadow-lg hover:shadow-maroon/20"
        >
          <Linkedin size={13} /> LinkedIn
        </a>
      </div>
    </nav>
  );
}
