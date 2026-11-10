# NEPED / NEPeD website

React 19 + TypeScript + Vite + Tailwind 4. Deployed on Vercel.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Pulls CMS content (when `CMS_URL` is set), type-checks, builds to `dist/` |
| `npm run lint` | ESLint |
| `npm run fetch-cms` | Pull CMS content only |

## Layout

```
src/
  pages/          one file per route (landing, neped, neped-energy, shared)
  components/     neped/, neped-energy/, shared/, ui/
  data/           site content as TS files (neped, neped-energy, shared)
  lib/            helpers; siteContent.ts swaps in CMS data when present
  routes/paths.ts all URL paths
content/          markdown projects, blogs and gallery albums (loaded by src/lib/contentLoader.ts)
public/           only files the site actually serves (images as .webp, downloadable PDFs)
cms/              Strapi CMS (separate project, own package.json)
scripts/          fetch-cms.mjs, which runs before every build
_archive/         git-ignored, local only, see below
```

## Adding images

Put the `.webp` in `public/` and reference it as `/<path>.webp`. Keep the original
JPG/PNG in `_archive/public-webp-originals/` instead of `public/`, because everything
in `public/` gets deployed.

## `_archive/` (not committed, not deployed)

- `client-docs/`: PDFs, the zip, photo folders and notes supplied by the client
- `tooling/`: old Python PDF scripts, design notes, the Neue Montreal font files
- `public-unused/`: images and files from `public/` that no page references
- `public-webp-originals/`: full-size originals of the `.webp` files in `public/`
- `unused-code/`: components, demos and pages that nothing imports
