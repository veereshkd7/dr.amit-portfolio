import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sage bg-sage/10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
      </span>
      <span className="font-mono text-[0.72rem] tracking-wide text-navyDeep">
        STATUS: ACTIVE — ENROLLING NEW OPPORTUNITIES
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <header id="top" className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-20">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <Reveal>
            <StatusBadge />
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl md:text-6xl leading-[1.05] font-display font-semibold text-navy">
              Dr. Amit
              <br />
              Tammanagoudar
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-lg max-w-xl text-inkSoft">
              Pharm D graduate &amp; Clinical Research Coordinator, translating ICH-GCP protocol into
              site operations that stay audit-ready — from patient enrollment to trial-master-file precision.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#protocol"
                className="px-5 py-2.5 rounded-full text-sm text-white bg-maroon font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-maroon/25 hover:bg-maroonDeep"
              >
                View experience
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-navy hover:text-maroon transition-colors"
              >
                <Mail size={16} /> {profile.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-inkSoft">
              <span className="flex items-center gap-1.5">
                <Phone size={14} /> {profile.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto group">
            <div className="absolute -inset-3 rounded-full border border-dashed border-sage/60 transition-transform duration-700 group-hover:rotate-45" />
            <img
              src={profile.image}
              alt={profile.name}
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-cream transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-3 -right-3 rounded-full px-3 py-1.5 text-white bg-navy shadow-lg font-mono text-[0.65rem] transition-colors duration-300 group-hover:bg-maroon">
              Pharm D
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={500}>
        <div className="mt-16 flex justify-center">
          <ChevronDown size={20} className="text-inkSoft animate-bounce" />
        </div>
      </Reveal>
    </header>
  );
}
