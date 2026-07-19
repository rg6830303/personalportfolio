# Dr. Raka Ghosh — Portfolio

A bespoke, editorial portfolio for **Dr. Raka Ghosh** — synthetic chemist turned research-ethics
and academic-governance leader. Built as an original design system (no off-the-shelf template),
with 3D motion, animated page transitions and a fully responsive layout.

## Concept

The palette — **white, yellow, green, red** — is used as a *compliance signal system* rather than
decoration: green reads as approved/integrity, yellow as attention, red as critical/flag. It mirrors
the language of the ethics and governance work itself. The recurring motif is a **molecular model**,
a nod to the doctoral chemistry background, rendered as a live 3D object in the hero.

## Highlights

- **Interactive 3D hero** — a live molecular structure (React Three Fiber / three.js) that rotates
  and reacts to the pointer.
- **Animated page transitions** — a three-panel coloured curtain sweeps between routes, with staggered
  content reveals (Framer Motion).
- **Motion throughout** — word-by-word heading reveals with 3D tilt, scroll-linked timeline rail,
  magnetic buttons, custom cursor, and a running marquee.
- **Fully responsive** — tuned for desktop and mobile, with a full-screen animated mobile menu.
- **Accessible** — honours `prefers-reduced-motion`, semantic markup, keyboard-navigable.
- **SEO ready** — metadata, Open Graph, `sitemap.xml`, `robots.txt` and an SVG favicon.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) · TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) · [drei](https://github.com/pmndrs/drei) · [three.js](https://threejs.org/)
- Fonts: Fraunces (display), Space Grotesk (sans), JetBrains Mono (mono) via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel

This project is a standard Next.js app and deploys to Vercel with zero configuration:

1. Push this repository to GitHub.
2. In Vercel, **New Project → Import** this repo.
3. Framework preset is detected automatically (Next.js). No environment variables are required.
4. Deploy.

## Structure

```
app/                 # Routes: / (index), /journey, /expertise, /contact
  layout.tsx         # Fonts, metadata, shell (nav, cursor, transitions, footer)
  globals.css        # Design tokens & base styles
src/
  components/        # Hero, Molecule (3D), Timeline, Nav, PageTransition, …
  data/resume.ts     # Single source of truth for all content
public/img/          # Portrait
```

All copy and portrait are sourced from Dr. Raka Ghosh's CV. To update content, edit
`src/data/resume.ts`.
