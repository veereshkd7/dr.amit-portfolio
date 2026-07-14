import { Activity, Beaker, ClipboardCheck, ShieldCheck, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data";

const icons = { ClipboardCheck, Activity, ShieldCheck, Beaker, Users };

export default function Competencies() {
  return (
    <section id="competencies" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <Reveal>
        <SectionLabel tag="Panel" title="Competencies" />
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 80}>
              <div className="p-6 rounded-xl h-full bg-cream border border-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/5 hover:border-sage/50 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-maroon/10 transition-colors duration-300 group-hover:bg-maroon/20">
                  <Icon size={18} className="text-maroon" />
                </div>
                <h3 className="text-base mb-3 font-display font-semibold text-navy">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-inkSoft">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
