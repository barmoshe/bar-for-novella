import { PROJECTS, type Project } from "@/lib/projects";

const ACCENT: Record<Project["accent"], string> = {
  purple: "hover:border-purple/50",
  gold: "hover:border-gold-deep/50",
  mauve: "hover:border-mauve/50",
  plum: "hover:border-plum/40",
};
const TAG_TONE: Record<Project["accent"], string> = {
  purple: "text-purple",
  gold: "text-gold-deep",
  mauve: "text-mauve",
  plum: "text-plum",
};

export default function Work() {
  return (
    <section id="work" className="relative bg-lavender px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-bold uppercase tracking-[0.12em] text-gold-deep">
          Proof I can build
        </p>
        <h2 className="reveal mt-3 text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-1px] text-plum">
          Shipped, mostly solo.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group flex flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${ACCENT[p.accent]} ${
                p.span === 2 ? "md:col-span-2" : ""
              }`}
            >
              <span className={`text-[12px] font-bold uppercase tracking-wide ${TAG_TONE[p.accent]}`}>
                {p.tag}
              </span>
              <span className="mt-2 text-xl font-bold tracking-tight text-plum">{p.name}</span>
              <span className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">{p.blurb}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-mauve transition group-hover:text-plum">
                View
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
