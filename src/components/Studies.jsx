import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projects } from "../data";

export default function Studies() {
  return (
    <section id="studies" className="py-16 md:py-20 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 90% 0%, rgba(124,152,133,0.15), transparent 60%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6 relative">
        <Reveal>
          <SectionLabel tag="Research" title="Studies" dark />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <div className="p-6 rounded-xl h-full flex flex-col bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-sage/40 hover:-translate-y-1">
                <span className="font-mono text-[0.7rem] text-sage">{p.id}</span>
                <h3 className="mt-3 text-lg leading-snug mb-3 font-display font-semibold text-cream">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mt-auto text-cream/65">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
