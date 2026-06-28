import PlacementGraphic from "./PlacementGraphic";
import { cvHref } from "@/lib/contact";

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* Soft lavender + gold aurora, Novella's light hero treatment. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-14%] h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#f4ecf7,transparent)]" />
        <div className="absolute right-[4%] top-[18%] h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute left-[2%] top-[42%] h-72 w-72 rounded-full bg-purple/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-6 text-sm">
          <span className="font-extrabold tracking-tight text-plum">Bar Moshe</span>
          <span className="text-muted">For the Novella team</span>
        </div>

        <div className="grid items-center gap-10 pb-20 pt-8 sm:pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-28">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-gold-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
              AI Engineer · application for Novella
            </p>
            <h1 className="reveal mt-5 text-[clamp(2.3rem,1.3rem+4vw,4.1rem)] font-extrabold leading-[1.04] tracking-[-1.5px] text-plum">
              I build the AI that turns brokers into{" "}
              <span className="serif-accent gradient-text">super-producers.</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-[clamp(1rem,0.9rem+0.5vw,1.18rem)] leading-relaxed text-muted">
              I&apos;m Bar, an AI-native builder. I ship agentic, eval-driven LLM
              products into production, idea to deployed in hours to days. This page
              is me showing you, not telling you, built in Novella&apos;s own brand.
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-3">
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                download
                className="rounded-full btn-gold px-7 py-3.5 text-[15px] font-bold transition hover:opacity-95"
              >
                Download my CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-plum/20 bg-white/60 px-7 py-3.5 text-[15px] font-bold text-plum transition hover:bg-white"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>

          <div className="reveal">
            <PlacementGraphic />
          </div>
        </div>
      </div>
    </header>
  );
}
