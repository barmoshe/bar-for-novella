import { ImageResponse } from "next/og";

export const alt =
  "Bar Moshe, for Novella: an AI Engineer application, in their own brand.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#fcfbfc";
const LAVENDER = "#f4ecf7";
const PLUM = "#371d41";
const PLUM2 = "#512f5e";
const PURPLE = "#9139b2";
const MAUVE = "#80588f";
const GOLD = "#ffd673";
const GOLD_DEEP = "#d79704";
const MUTED = "#6f667a";
const LINE = "#ece4f0";

async function loadPoppins(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Poppins:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((.+?)\)\s*format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

function Market({
  title,
  status,
  bound,
}: {
  title: string;
  status: string;
  bound?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 22px",
        borderRadius: 16,
        background: bound ? GOLD : "#ffffff",
        border: `1px solid ${bound ? GOLD_DEEP : LINE}`,
        boxShadow: bound ? "0 12px 30px rgba(215,151,4,0.30)" : "0 8px 24px rgba(55,29,65,0.08)",
      }}
    >
      <div style={{ display: "flex", width: 12, height: 12, borderRadius: 12, background: bound ? GOLD_DEEP : PURPLE }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 21, fontWeight: 700, color: bound ? PLUM : PLUM }}>{title}</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: bound ? "#5b3d05" : MUTED }}>{status}</span>
      </div>
    </div>
  );
}

export default async function OgImage() {
  const [bold, semi] = await Promise.all([loadPoppins(800), loadPoppins(500)]);
  const fonts = [
    bold && { name: "Poppins", data: bold, weight: 800 as const, style: "normal" as const },
    semi && { name: "Poppins", data: semi, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 800 | 500; style: "normal" }[];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          fontFamily: "Poppins, sans-serif",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -200, left: 200, width: 760, height: 600, borderRadius: 9999, background: `radial-gradient(circle, ${LAVENDER}, rgba(252,251,252,0) 70%)`, display: "flex" }} />
        <div style={{ position: "absolute", bottom: -160, right: 120, width: 440, height: 440, borderRadius: 9999, background: "radial-gradient(circle, rgba(255,214,115,0.40), rgba(255,214,115,0) 70%)", display: "flex" }} />

        {/* Left: pitch */}
        <div style={{ display: "flex", flexDirection: "column", padding: "70px 0 70px 72px", width: 640 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 9999,
              background: "#ffffff",
              border: `1px solid ${LINE}`,
              fontSize: 20,
              fontWeight: 500,
              color: GOLD_DEEP,
            }}
          >
            <div style={{ display: "flex", width: 11, height: 11, borderRadius: 9999, background: GOLD_DEEP }} />
            AI Engineer · application for Novella
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 32, lineHeight: 1.08 }}>
            <span style={{ fontSize: 58, fontWeight: 800, letterSpacing: "-0.03em", color: PLUM }}>
              I build the AI that
            </span>
            <span style={{ fontSize: 58, fontWeight: 800, letterSpacing: "-0.03em", color: PLUM }}>
              turns brokers into
            </span>
            <span
              style={{
                fontSize: 58,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                backgroundImage: `linear-gradient(90deg, ${PURPLE}, ${PLUM2})`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              super-producers.
            </span>
          </div>

          <span style={{ fontSize: 23, fontWeight: 500, color: MUTED, marginTop: 26, maxWidth: 540 }}>
            Agentic, eval-driven LLM products, shipped to production.
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "auto" }}>
            <div style={{ display: "flex", width: 16, height: 16, borderRadius: 9999, background: `linear-gradient(135deg, ${PURPLE}, ${GOLD_DEEP})` }} />
            <span style={{ fontSize: 24, fontWeight: 500, color: PLUM }}>Bar Moshe · AI engineer · Tel Aviv</span>
          </div>
        </div>

        {/* Right: placement markets */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, paddingRight: 64 }}>
          <Market title="Lloyd's syndicate" status="Quoted · $182k" />
          <Market title="E&S carrier" status="Bound" bound />
          <Market title="Specialty MGA" status="Quoting…" />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
