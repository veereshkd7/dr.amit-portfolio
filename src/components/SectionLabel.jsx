export default function SectionLabel({ tag, title, dark = false }) {
  return (
    <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
      <div>
        <div
          className={`font-mono text-xs tracking-[0.2em] uppercase mb-2 ${
            dark ? "text-sage" : "text-maroon"
          }`}
        >
          {tag}
        </div>
        <h2
          className={`text-3xl md:text-4xl font-display font-semibold ${
            dark ? "text-cream" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      <div className={`h-px flex-1 min-w-[40px] ${dark ? "bg-white/15" : "bg-line"}`} />
    </div>
  );
}
