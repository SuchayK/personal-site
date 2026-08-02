# Personal site

Personal website for Suchay Kommisetty. Next.js 16 (App Router) + Tailwind 4, statically
prerendered, deployed on Vercel.

## Editing content

**All copy lives in [`src/data/content.ts`](src/data/content.ts).** Add a project, a paper, a
job, or an award by editing that file — the components read from it and lay themselves out.
You should not need to touch a component to change what the site says.

> One rule for that file: **nothing on this site names a company that hasn't announced
> itself.** Current startup work is deliberately absent.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deploying

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). No configuration needed — Vercel
   detects Next.js and the defaults are correct.
3. Add a custom domain in the Vercel project settings, then update `site.url` in
   `content.ts` so canonical URLs and social cards point at the right place.

## Structure

```
src/
├── app/
│   ├── layout.tsx        fonts, metadata, Open Graph
│   ├── page.tsx          section composition
│   └── globals.css       palette and base styles
├── components/
│   ├── Header.tsx        sticky nav; grows a rule once you scroll past the hero
│   ├── Hero.tsx          name, tagline, contact links
│   ├── Section.tsx       two-column section wrapper (label in a left gutter)
│   ├── ResearchList.tsx  academic-convention entries: title, venue, year, summary
│   ├── ProjectList.tsx   linked cards with tech tags
│   ├── ExperienceList.tsx
│   └── Tag.tsx
└── data/
    └── content.ts        ← everything you edit
```

## Design notes

Light minimal, sitting between a developer portfolio and an academic homepage — research and
projects get equal billing, which matches the actual record better than either extreme.

- **Palette.** Warm off-white paper, near-black ink, one accent — UT Austin burnt orange
  (`#bf5700`), desaturated enough to sit under body text. Dark mode is a full re-map via
  `prefers-color-scheme`, not an inversion.
- **Type.** Inter for text, JetBrains Mono for metadata — venues, years, tech tags, section
  labels. The mono is doing structural work, not decoration.
- **Sections** carry their label in a narrow left gutter on desktop and stack on mobile.
- **Accessibility.** Skip link, visible focus rings, semantic landmarks, ordered lists for
  chronological content, and `prefers-reduced-motion` honoured.

## To do

- [ ] Add competition placements for Robot Tour and VEX once confirmed
- [ ] Custom domain, then update `site.url`
- [ ] `public/og.png` — social preview image, then reference it in `layout.tsx`
- [ ] Consider a `/writing` route if there's ever anything to put in it
