import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <Reveal>
        <SectionLabel tag="Objective" title="About" />
      </Reveal>
      <Reveal delay={100}>
        <div className="p-8 md:p-10 rounded-2xl bg-cream border border-line transition-shadow duration-300 hover:shadow-lg hover:shadow-navy/5">
          <p className="text-lg md:text-xl leading-relaxed font-display text-navy">{about.lead}</p>
          <p className="mt-4 text-base leading-relaxed text-inkSoft">{about.body}</p>
        </div>
      </Reveal>
    </section>
  );
}
