import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { creator, profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navyDeep">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="font-mono text-[0.72rem] tracking-[0.2em] text-sage">GET IN TOUCH</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold text-cream">
            Let's talk clinical research.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm bg-maroon text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-maroon/30 hover:bg-maroonDeep"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm bg-white/8 text-cream border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-sage/60"
            >
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm bg-white/8 text-cream border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:border-sage/60"
            >
              <Phone size={16} /> {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10">
            <span className="font-mono text-[0.68rem] text-cream/40">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <a
              href={creator.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.68rem] text-cream/40 hover:text-sage transition-colors"
            >
              Portfolio crafted by {creator.name} ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
