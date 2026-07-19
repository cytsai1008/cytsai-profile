# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
npm run lint       # eslint --fix over src + root .mjs
npm run format     # prettier --write over src + root .mjs/.md
npm run lf         # lint, then format
npx prettier --write <file>   # format a single file
npx eslint <file> --fix       # lint a single file
```

Use **npm** (not yarn) — project uses Tailwind CSS.
Run Prettier + ESLint on changed `.astro`, `.vue`, `.ts` before commit.

## Architecture

### i18n — three locales, file-based routing

- Locales: `en` (default, no prefix), `zh-tw` (`/zh-tw/…`), `zh-cn` (`/zh-cn/…`)
- **Never duplicate page logic.** One shared component per page in `src/components/pages/` accepts `locale` prop. Route
  files in `src/pages/` and `src/pages/zh-{tw,cn}/` are 3-line wrappers.
- Translation strings in `src/i18n/{en,zh-tw,zh-cn}.json`. Use `t(locale)` from `src/i18n/utils.ts`.
- Use `localePath(path, locale)` for locale-prefixed hrefs; `getLocaleFromUrl(url)` to detect locale.
- Root `/` prerendered. Locale detection client-side in `BaseHead.astro` (defers to `preferred-locale` cookie, then
  `navigator.languages`).

### Color system — Tailwind v4 with `@theme inline`

Defined in `src/styles/global.css`. Raw CSS vars in `:root` / `.dark` mapped into Tailwind tokens via `@theme inline` so
utilities output `var(…)` and respond to `.dark` at runtime.

Dark mode: add/remove `.dark` on `<html>`. Inline script in `BaseHead.astro` applies before first paint.

Key token rules:

- `text-accent` / `border-accent` — medium blue. **Large, bold, or non-text use only** — it does not pass AA at body
  size on light surfaces.
- `text-accent-text` — the AA-safe accent for links and any small accent text (6.4:1 light, 6.9:1 dark). Getting this
  backwards is the most likely way to break contrast here.
- `bg-accent-bg` / `bg-accent-dim` — darker blue for filled bg (white text auto via global CSS — never add `text-white`
  manually, or any text color)
- `bg-highlight` / `bg-highlight-dim` — warm amber fills (also auto-white text)

Radius ramp is deliberately compressed in `@theme`: `--radius-xl: 0.5rem`, `--radius-2xl: 0.625rem`. `rounded-lg` and
`rounded-xl` both render 8px; `rounded-2xl` renders 10px. Don't go above that on containers.

See `DESIGN.md` for full palette, typography, component patterns, elevation, motion, and do's/don'ts.

### Scroll animations

`src/scripts/scrollAnimations.ts` drives `data-animate` / `data-animate-stagger` via IntersectionObserver. Elements
start at `opacity: 0` (gated by `html.js` class applied before paint). Optional `data-opacity="0.5"` settles at sub-1
opacity. `data-animate-on-load-only` skips observer, fires immediately.

Interactive animations (nav, mobile menu) use **anime.js v4** with spring physics.
`prefers-reduced-motion` respected throughout.

### Content collections

Defined in `src/content.config.ts`:

| Collection | Source                                 | Notes                                                                                     |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| `blog`     | `src/content/blog/{locale}/*.{md,mdx}` | Locale-prefixed subdirs; filtered per locale by `getBlogPostsForLocale()`                 |
| `about`    | `src/content/about/{locale}.md`        | One structured résumé doc per locale (experience, education, projects, stack) — data-only |

### Components

- **Astro components** for static structure: `BaseHead.astro`, `SiteFooter.astro`, `FormattedDate.astro`,
  `CookieConsent.astro`
- **Page shells** in `src/components/pages/`: `HomePage`, `BlogIndexPage`, `AboutPage`, `NotFoundPage` — each takes a
  `locale` prop
- **Vue SFCs** (`client:load`) for interactive islands:
  - `NavBar.vue` — theme toggle (light/system/dark), language switcher, mobile menu
  - `SocialLinks.vue` — animated social icon row
  - `BlogLightbox.vue` — PhotoSwipe lightbox for blog post inline images
  - `BlogTimeline.vue` — hover-zooming year minimap on the blog index

`BlogCard.astro` exists but is **not imported anywhere** — the blog index and home page render zebra-striped row lists
instead. Don't treat it as the live list pattern.

### Markdown pipeline

Custom rehype plugins in `src/plugins/` run over all markdown: `rehypeTaskListLucide.mjs` (Lucide icons for task-list
checkboxes) and `rehypeImageCaption.mjs` (figure/caption wrapping, feeds `BlogLightbox`).

### OG images

`src/integrations/og-images.ts` is a custom Astro integration that renders Open Graph images at build time via
`satori` + `@resvg/resvg-js` into `public/og/`. Helpers live in `src/lib/og.ts`.

### Layouts

- `src/layouts/Layout.astro` — base HTML shell; builds locale-prefixed nav links, injects `NavBar.vue`
- `src/layouts/BlogPost.astro` — wraps Layout, adds article header with date + back link

## Adding content

**Blog post** — create `src/content/blog/{locale}/my-post.md` (e.g. `en/`, `zh-tw/`, `zh-cn/`).

Required frontmatter: `title`, `description`, `pubDate`.
Optional: `updatedDate`, `heroImage`, `tags`, `draft` (bool), `featured` (bool), `featured_priority` (int).

Locale prefix is stripped from URLs by `getBlogSlug()` in `src/lib/blog.ts`. Note `tags` is schema-only — it feeds
JSON-LD `keywords` and does not render as tag chips anywhere.

**About page** — edit `src/content/about/{locale}.md`. It's structured frontmatter, not prose; the page renders from the
fields, so add data there rather than markup in `AboutPage.astro`.
