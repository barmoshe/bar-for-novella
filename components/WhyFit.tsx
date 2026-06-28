const FITS = [
  {
    n: "01",
    t: "Agents that ship, not demos",
    d: "I take a real workflow and turn it into an autonomous agent running in production, idea to deployed. The LLM is a means; the point is a measurable win, fewer manual hours for the broker.",
  },
  {
    n: "02",
    t: "Evals are how I know it works",
    d: "I build the datasets, benchmarks and monitoring that keep an LLM app honest as it changes. Quality becomes something you can see and defend over time, not something you hope for.",
  },
  {
    n: "03",
    t: "RAG and agent architectures, in TypeScript",
    d: "Retrieval over messy documents, tool-use and multi-step agents are home turf, and I'm happy living in TypeScript end to end. I track the frontier and verify against live docs, not stale memory.",
  },
];

export default function WhyFit() {
  return (
    <section id="fit" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-sm font-bold uppercase tracking-[0.12em] text-gold-deep">
          Why I&apos;d fit at Novella
        </p>
        <h2 className="reveal mt-3 max-w-2xl text-[clamp(1.8rem,1.2rem+2.4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-1px] text-plum">
          The role you wrote is the work I already do.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FITS.map((f) => (
            <div
              key={f.n}
              className="reveal rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <span className="serif-accent gradient-text text-4xl">{f.n}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-plum">{f.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
