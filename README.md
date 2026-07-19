# CYTsai profile

This repo powers CYTsai's personal site at <https://cytsai.photocat.blue>. It is built with Astro, uses a few Vue islands for the interactive bits, and is deployed on Cloudflare.

The site ships in three locales: `en`, `zh-tw`, and `zh-cn`. It holds the blog, an about/résumé page, and the Open Graph image generation that runs during the build.

## Stack

- Astro 7
- Vue 3 islands for interactive UI
- Tailwind CSS v4
- Cloudflare adapter + Wrangler
- Markdown/MDX content collections
- `anime.js` for motion, `photoswipe` for the image lightbox
- `satori` + `@resvg/resvg-js` for build-time Open Graph images

## Requirements

- Node.js `>=22.12.0`
- npm

## Local development

```sh
npm install
npm run dev
```

Useful commands:

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the local dev server at `localhost:4321`   |
| `npm run build`   | Build the site into `dist/`                      |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint with `--fix` over `src` + root `.mjs` |
| `npm run format`  | Run Prettier over `src` + root `.mjs`/`.md`      |
| `npm run lf`      | Lint, then format                                |

## Project structure

```text
.
├── public/                 # Static assets, including generated OG images
├── src/
│   ├── assets/             # Imported site assets (blog images)
│   ├── components/         # Astro components, Vue islands, and page shells
│   ├── content/            # Blog posts and about-page data
│   ├── i18n/               # Translation dictionaries and locale helpers
│   ├── integrations/       # Custom Astro integrations (OG image generation)
│   ├── layouts/            # Base layouts
│   ├── lib/                # Blog, OG, and cookie-consent helpers
│   ├── pages/              # Route wrappers for each locale
│   ├── plugins/            # Custom rehype plugins for the markdown pipeline
│   ├── scripts/            # Scroll animation driver
│   └── styles/             # Global styles and design tokens
├── astro.config.mjs
├── wrangler.jsonc
└── package.json
```

Design tokens, component patterns, and the visual do's and don'ts are documented in [DESIGN.md](DESIGN.md).

## How localization works

- English is the default locale, so its routes do not use a URL prefix.
- Traditional Chinese routes live under `/zh-tw/...`.
- Simplified Chinese routes live under `/zh-cn/...`.
- The root path `/` is prerendered; locale redirection happens client-side in `src/components/BaseHead.astro` by checking the `preferred-locale` cookie first and `navigator.languages` after that.
- Shared page logic lives in `src/components/pages/`; route files in `src/pages/` mainly pass the locale through.

## Content workflows

### Blog posts

Put blog posts in `src/content/blog/<locale>/` as `.md` or `.mdx` files.

Required frontmatter:

```yaml
---
title: My post
description: Short summary
pubDate: 2026-04-08
---
```

Optional fields:

- `updatedDate`
- `heroImage`
- `tags` — used for JSON-LD keywords only; not rendered as tag chips
- `draft`
- `featured`
- `featured_priority`

### About page

The about page is data-driven. Edit `src/content/about/<locale>.md` and fill in the structured frontmatter — name, role, location, experience, education, projects, and stack. The page renders from those fields, so content changes belong there rather than in `AboutPage.astro`.

### UI copy

Prefer adding strings to `src/i18n/<locale>.json` over hard-coding copy in page files.

## Deployment notes

- The site uses the Cloudflare Astro adapter with `output: "static"`.
- Because the site is prerendered, request-time Astro middleware is not used for locale detection.
- `wrangler.jsonc` is already configured for the custom domain `cytsai.photocat.blue`.
- Open Graph images are generated during the build and written to `public/og/`.

## Maintenance conventions

- Use npm, not yarn.
- Keep shared page logic in `src/components/pages/` instead of duplicating locale-specific page implementations.
- Prefer updating `src/i18n/*.json` over hard-coding copy in page files.
- Run `npm run lf` on changed files before committing.
