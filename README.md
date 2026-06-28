# bar-for-novella

An AI Engineer application to [Novella](https://www.bynovella.com), built as a
one-screen pitch in Novella's own visual language instead of a cover letter.

The page is rebuilt from Novella's brand (deep-plum ink, a purple-to-plum gradient
with a signature gold accent, Poppins and Libre Baskerville) and elevated with
motion. Its centerpiece is a living diagram of Novella's E&S placement loop: a
submission fans out to specialty markets, quotes stream back, one binds. It is
pure CSS/SVG animation, decorative and reduced-motion safe, no network and no
model call.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind v4 (CSS-first `@theme`)
- `next/og` for the share image

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Layout

- `app/` — layout, page, global tokens, generated OG image
- `components/PlacementGraphic.tsx` — the animated placement-loop centerpiece
- `components/` — Nav, Hero, WhyFit, Work, Close, Footer, ScrollReveal
- `lib/projects.ts` — the shipped-work proof cards

Built by Bar Moshe. Not affiliated with Novella.
