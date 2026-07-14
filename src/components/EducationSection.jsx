import { Award, GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { certifications, education, languages } from "../data";

export default function EducationSection() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Reveal>
            <SectionLabel tag="Record" title="Education" />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex gap-4 mb-8 group">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 bg-maroon/10 transition-colors duration-300 group-hover:bg-maroon/20">
                <GraduationCap size={20} className="text-maroon" />
              </div>
              <div>
                <h3 className="text-base font-display font-semibold text-navy">{education.degree}</h3>
                <p className="text-sm mt-1 text-inkSoft">{education.college}</p>
                <p className="text-sm mt-2 text-inkSoft">{education.internship}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <LanguagesIcon size={16} className="text-maroon" />
                <h3 className="font-display font-semibold text-navy">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1.5 rounded-full text-sm bg-cream border border-line text-navy transition-all duration-300 hover:border-sage hover:text-maroon hover:-translate-y-0.5"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 mb-6">
              <Award size={16} className="text-maroon" />
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-navy">Certifications</h3>
            </div>
          </Reveal>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={150 + i * 90}>
                <div className="p-5 rounded-xl flex justify-between items-start gap-3 bg-cream border border-line transition-all duration-300 hover:border-sage/50 hover:shadow-md hover:shadow-navy/5 hover:-translate-y-0.5">
                  <div>
                    <h4 className="text-sm font-semibold text-navy">{c.title}</h4>
                    <p className="text-xs mt-1 text-inkSoft">{c.org}</p>
                  </div>
                  {c.year && <span className="font-mono text-[0.7rem] text-sage whitespace-nowrap">{c.year}</span>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
