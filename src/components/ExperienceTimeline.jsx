import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { experience } from "../data";

export default function ExperienceTimeline() {
  return (
    <section id="protocol" className="py-16 md:py-20 bg-paperDim">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <SectionLabel tag="Site Record" title="Experience Protocol" />
        </Reveal>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />
          {experience.map((v, i) => (
            <Reveal key={v.visit} delay={i * 90}>
              <div className="relative mb-10 last:mb-0 group">
                <div className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full border-2 bg-cream border-maroon transition-all duration-300 group-hover:scale-125 group-hover:bg-maroon" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="font-mono text-[0.72rem] tracking-wide text-maroon">{v.visit}</span>
                  <span className="font-mono text-[0.72rem] text-inkSoft">{v.window}</span>
                </div>
                <div className="p-6 rounded-xl bg-cream border border-line transition-all duration-300 group-hover:border-sage/50 group-hover:shadow-lg group-hover:shadow-navy/5 group-hover:-translate-y-0.5">
                  <h3 className="text-xl md:text-2xl mb-1 font-display font-semibold text-navy">{v.role}</h3>
                  <div className="text-sm mb-4 font-medium text-maroon">{v.org}</div>
                  <ul className="space-y-2">
                    {v.notes.map((n, idx) => (
                      <li key={idx} className="text-sm leading-relaxed flex gap-2 text-inkSoft">
                        <span className="text-sage">—</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
