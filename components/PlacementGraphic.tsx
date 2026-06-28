/**
 * Decorative centerpiece: Novella's E&S placement loop rebuilt as a living
 * diagram. A submission fans out to specialty markets, quotes stream back, one
 * binds (gold). Pure CSS/SVG animation, no interaction, reduced-motion safe.
 */
export default function PlacementGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      {/* purple + gold glow halo */}
      <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-[radial-gradient(closest-side,rgba(145,57,178,0.16),transparent)]" />
      <div className="pointer-events-none absolute -inset-4 top-1/3 rounded-[36px] bg-[radial-gradient(closest-side,rgba(255,214,115,0.20),transparent)]" />

      <div className="float glass relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
        {/* header */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-plum/15" />
          <span className="ml-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
            </span>
            placement intelligence · live
          </span>
        </div>

        {/* diagram */}
        <svg viewBox="0 0 480 360" className="block w-full" role="presentation">
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9139b2" />
              <stop offset="1" stopColor="#d79704" />
            </linearGradient>
            <linearGradient id="sub" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#512f5e" />
              <stop offset="1" stopColor="#371d41" />
            </linearGradient>
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffd673" />
              <stop offset="1" stopColor="#f3b53d" />
            </linearGradient>
          </defs>

          {/* slow orbit ring behind the submission */}
          <circle
            className="spin-slow"
            cx="128"
            cy="180"
            r="94"
            fill="none"
            stroke="#80588f"
            strokeOpacity="0.28"
            strokeWidth="1.5"
            strokeDasharray="2 9"
          />
          <circle cx="128" cy="180" r="70" fill="none" stroke="#ece4f0" strokeWidth="1" />

          {/* connectors: faint base + animated flow */}
          {[
            "M212,180 C250,150 258,92 300,76",
            "M212,180 C252,178 258,182 300,180",
            "M212,180 C250,210 258,268 300,284",
          ].map((d, i) => (
            <g key={d}>
              <path d={d} fill="none" stroke="#ece4f0" strokeWidth="2" />
              <path
                className="dash-flow"
                d={d}
                fill="none"
                stroke="url(#wire)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}

          {/* submission node */}
          <g>
            <rect x="44" y="138" width="166" height="84" rx="16" fill="url(#sub)" />
            {/* tiny skyscraper glyph */}
            <g fill="#ffd673" opacity="0.95">
              <rect x="62" y="158" width="8" height="22" rx="1.5" />
              <rect x="72" y="150" width="9" height="30" rx="1.5" />
              <rect x="83" y="164" width="7" height="16" rx="1.5" />
            </g>
            <text x="62" y="195" fill="#e9dcf0" fontSize="9.5" fontWeight="700" letterSpacing="1.3">
              SUBMISSION
            </text>
            <text x="62" y="211" fill="#ffffff" fontSize="14" fontWeight="700">
              Coastal high-rise
            </text>
            <text x="146" y="172" fill="#e6d6ef" fontSize="11" fontWeight="600">
              $50M · CAT
            </text>
          </g>

          {/* market nodes */}
          <MarketNode y={76} title="Lloyd's syndicate" status="Quoted · $182k" tone="quoted" delay={0} />
          <MarketNode y={180} title="E&S carrier" status="Bound" tone="bound" delay={0.6} />
          <MarketNode y={284} title="Specialty MGA" status="Quoting…" tone="quoting" delay={1.2} />
        </svg>
      </div>
    </div>
  );
}

function MarketNode({
  y,
  title,
  status,
  tone,
  delay,
}: {
  y: number;
  title: string;
  status: string;
  tone: "quoted" | "bound" | "quoting";
  delay: number;
}) {
  const bound = tone === "bound";
  const dot = tone === "bound" ? "#d79704" : tone === "quoted" ? "#9139b2" : "#80588f";
  return (
    <g>
      {/* arrival pulse */}
      <circle className="orbit-pulse" cx="300" cy={y} r="7" fill={dot} style={{ animationDelay: `${delay}s` }} />

      <rect
        x="300"
        y={y - 32}
        width="172"
        height="64"
        rx="16"
        fill={bound ? "url(#gold)" : "#ffffff"}
        stroke={bound ? "#e0b530" : "#ece4f0"}
        strokeWidth="1.5"
      />
      {bound && (
        <rect
          className="glow"
          x="300"
          y={y - 32}
          width="172"
          height="64"
          rx="16"
          fill="none"
          stroke="#ffd673"
          strokeWidth="3"
        />
      )}
      <circle cx="322" cy={y} r="5.5" fill={dot} />
      <text x="340" y={y - 4} fill={bound ? "#371d41" : "#2a1f33"} fontSize="15" fontWeight="700">
        {title}
      </text>
      <text
        x="340"
        y={y + 14}
        fill={bound ? "#5b3d05" : "#6f667a"}
        fontSize="12.5"
        fontWeight="600"
      >
        {status}
      </text>
    </g>
  );
}
