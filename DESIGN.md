---
name: cytsai-profile
description: Sharpened calm — a developer's personal site where content sits flat on the page and only chrome floats.
colors:
  surface: "#f3f8fb"
  surface-alt: "#e8f0f5"
  fg: "#37424c"
  fg-muted: "#66717c"
  accent: "#6f93af"
  accent-text: "#405d78"
  accent-bg: "#507392"
  accent-dim: "#405d78"
  highlight: "#d4a84b"
  highlight-dim: "#b88c35"
  border: "#d5e0e8"
  warning: "#ae5555"
  warning-bg: "#8a3838"
  surface-dark: "#0f1319"
  surface-alt-dark: "#161b22"
  fg-dark: "#e6edf3"
  fg-muted-dark: "#8b95a1"
  accent-dark: "#7aa5d8"
  accent-text-dark: "#7aa5d8"
  accent-bg-dark: "#3d6ba1"
  accent-dim-dark: "#345c8a"
  border-dark: "#262d38"
  warning-dark: "#c47878"
  warning-bg-dark: "#7a3232"
  code-block-bg: "#141210"
  code-block-fg: "#e8e0d5"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible, Noto Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Atkinson Hyperlegible, Noto Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Atkinson Hyperlegible, Noto Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, Noto Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Atkinson Hyperlegible, Noto Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.18em"
  mono:
    fontFamily: "Maple Mono CN, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  xs: "0.2rem"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.625rem"
  code: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  section: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-bg}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.mono}"
  button-primary-hover:
    backgroundColor: "{colors.accent-dim}"
  button-outline:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
  button-outline-hover:
    backgroundColor: "{colors.surface-alt}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
  nav-link-active:
    backgroundColor: "{colors.accent-bg}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    height: "2.75rem"
    width: "2.75rem"
  icon-button-hover:
    backgroundColor: "{colors.surface-alt}"
  list-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "0"
    padding: "1.25rem 0.75rem"
  list-row-alt:
    backgroundColor: "{colors.surface-alt}"
  dropdown:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: "0.25rem"
    width: "9rem"
---

# Design System: cytsai-profile

## 1. Overview

**Creative North Star: "The Legible Workbench"**

A workbench is not styled; it is arranged. Tools sit flat on the surface where you left them, the light is even, and
nothing is decorated to seem more important than it is. That is the posture of this site. The person it represents is a
developer who ships and writes, so the surface has to prove legibility rather than assert taste. Every page is a plain
field of readable type with a single sticky rail floating above it. Content never sits in a container that implies it
needs protecting.

The system is **sharpened calm**: an accessibility-first base (Atkinson Hyperlegible, WCAG AA contrast, reduced-motion
respected everywhere) with programmer texture applied as seasoning — a monospace face on metadata, a compressed corner
radius, a true-dark dark mode, one steel-blue accent. The mono is never allowed to become a costume. There are no fake
shell prompts, no blinking cursors, no matrix green. Mono marks the things a developer would scan (dates, periods,
stack values, code); prose and headings stay in the humanist sans.

This system explicitly rejects the **corporate LinkedIn clone** (stiff, buzzwordy, headshot-and-blazer) and **terminal
cosplay** (pretending the browser is a shell). It also rejects the card reflex: the blog index is a zebra-striped list
of rows, not a grid of tiles, because a list is what a reader actually scans. Depth comes from hairline borders and
tonal fills, not shadows.

**Key Characteristics:**

- **Flat content, floating chrome.** Only the nav, mobile menu, and dropdowns cast shadows or blur. Everything else is
  flush with the page.
- **One accent, one highlight.** Steel-blue carries all interaction; warm amber appears only on the pinned-post icon.
- **Mono as metadata, sparingly.** `Maple Mono CN` for résumé periods, contact meta, stack values, and code — never for
  prose, never for headings (section eyebrows are sans), and not for nav links or blog-index dates, which are sans.
- **Compressed radius.** The Tailwind radius ramp is retuned downward (`xl` → 8px, `2xl` → 10px). Nothing looks bubbly.
- **Content max-width is invariant.** Every page and the nav share `max-w-5xl` (64rem), so nothing drifts between routes.
- **Reduced motion is a real branch,** not a disabled animation: each animated path has an instant-state equivalent.

---

## 2. Colors: The Cool Slate Palette

Cool blue-grays throughout, with a single warm amber reserved as the only non-blue voice on the site. Light mode is a
faintly blue off-white, never cream. Dark mode is a near-black blue (`#0f1319`) with a _softened_ steel accent — the two
modes read as different rooms, not as one room with the lights dimmed.

All colors are CSS custom properties in `src/styles/global.css`, redeclared under `.dark` on `<html>` and mapped into
Tailwind via `@theme inline` so utilities emit `var(…)` and swap at runtime. No hex is ever baked into markup.

### Primary

- **Steel Blue** (`#6f93af` light / `#7aa5d8` dark): the accent proper. Icon tints, hairline emphasis, blockquote rule,
  focus-visible outline, checked task-list marks. Large or bold contexts only — it does not pass AA at body size on
  light surfaces.
- **Deep Slate Blue** (`#405d78` light / `#7aa5d8` dark): every link and every piece of small accent text. This is the
  AA-safe sibling of the accent (6.4:1 light, 6.9:1 dark) and exists specifically so links never fail contrast.
- **Harbor Blue** (`#507392` light / `#3d6ba1` dark): filled interactive surfaces — active nav pill, the one primary CTA,
  text selection, skip link. Its pressed/hover partner is **Harbor Blue Deep** (`#405d78` / `#345c8a`).

### Secondary

- **Signal Amber** (`#d4a84b`, identical in both modes): the only warm color in the system, and it appears in exactly one
  place — the pin icon on a featured post. Its rarity is the entire point. **Amber Deep** (`#b88c35`) is its
  hover/filled partner.

### Neutral

- **Cool Paper** (`#f3f8fb` light / **Ink Well** `#0f1319` dark): the page background. Blue-tinted, never warm.
- **Paper Fold** (`#e8f0f5` light / `#161b22` dark): tonal fill for zebra rows, inline code, outline buttons, and icon
  button hover.
  Almost always used at partial alpha (`/40`, `/55`) so it reads as a tint, not a panel.
- **Slate Ink** (`#37424c` light / `#e6edf3` dark): body text and all headings.
- **Washed Steel** (`#66717c` light / `#8b95a1` dark): dates, captions, secondary labels, list descriptions, and — via
  a global `footer a` override — every footer link at rest. Tuned up from a lighter value specifically to clear 4.5:1 on
  Cool Paper.
- **Hairline** (`#d5e0e8` light / `#262d38` dark): every divider, every card and control outline. The system's only
  structural line.

### Tertiary

- **Muted Rose** (`#ae5555` / `#c47878`) and **Deep Rose** (`#8a3838` / `#7a3232`): destructive and warning roles.
  Currently defined but unused — reach for these rather than inventing a red.
- **Terminal Char** (`#141210` bg / `#e8e0d5` text): fenced code blocks only. This is the one warm, mode-invariant
  surface in the system, and it stays warm in light mode on purpose — a code block should read as a different material.

### Named Rules

**The Auto-White Rule.** Any element with `bg-accent-bg`, `bg-accent-dim`, `bg-highlight`, or `bg-highlight-dim` —
including hover states and _all descendants_ — is forced to `color: #fff` by global CSS. **Never write `text-white` on
these elements, and never write a text color on them at all.** A `text-fg` class on a filled button is dead code that
lies to the next reader.

**The Two-Blues Rule.** `--accent` is for large, bold, or non-text use. `--accent-text` is for anything small or
textual. If you are about to put `text-accent` on body-size copy, you want `text-accent-text`. Getting this backwards is
the single most likely way to break AA on this site.

**The One Warm Thing Rule.** Amber marks featured content and nothing else. If a second warm element appears on a page,
one of them is wrong.

---

## 3. Typography

**Display / Body Font:** Atkinson Hyperlegible (falling back to Noto Sans, then system-ui)
**CJK Body Font:** Noto Sans TC / Noto Sans SC, swapped in as `--font-sans` by `html:lang(zh-TW)` and `html:lang(zh-CN)`
**Label / Mono Font:** Maple Mono CN (falling back to ui-monospace)

**Character:** One humanist sans doing all the reading work, contrasted against one monospace doing all the _scanning_
work. Atkinson Hyperlegible was drawn by the Braille Institute to disambiguate confusable letterforms; choosing it is
the site's accessibility claim made visible, and it is why there is no display face — hierarchy comes from weight and
size within a single family, never from a second decorative typeface. Maple Mono CN supplies the programmer texture and
also covers CJK, so the mono voice survives locale switches instead of dropping to a fallback.

### Hierarchy

- **Display** (700, `clamp(3rem, 8vw, 4.75rem)`, line-height 1.02, tracking -0.025em): the home hero wordmark only. Pulled
  left by `-ml-1` to optically align its stem with the body text below.
- **Headline** (700, 2.5rem → 2rem below 640px, line-height 1.25): page `h1`.
- **Title** (700, 1.875rem → 1.5rem below 640px for `h2`, then 1.5 / 1.25 / 1.125rem for `h3`–`h5`, line-height 1.25):
  section headings and list-row titles. All six heading levels share line-height 1.25 and weight 700.
- **Body** (400, 1.125rem → 1rem below 640px, line-height 1.75): all prose. Long-form measure is capped at `70ch` on the
  about page.
- **Label** (700, 0.875rem, tracking 0.18em, **sans**): section eyebrows on the about page (`sectionTitle` in
  `AboutPage.astro`), colored `text-accent-text`. This is the one place tracked small caps-adjacent type appears, and it
  is deliberately _not_ mono — the eyebrow is a heading, not metadata.
- **Kicker** (400, 0.875rem, tracking 0.08em, sans, `text-accent-text`): the single line above the home hero wordmark.
  Looser than the label and used exactly once.
- **Mono** (400, 0.875rem): job/education periods (with `tabular-nums`), contact meta, project links, stack values, and
  code. **Mono is narrower than it looks** — `font-mono-maple` appears in exactly two places site-wide: `AboutPage.astro`
  and `global.css`'s `code` / `pre` rules. The font itself (`@chinese-fonts/maple-mono-cn`) is imported only by
  `AboutPage.astro` and `BlogPost.astro`, so applying `font-mono-maple` on any other page silently falls back to
  `ui-monospace`. Import the face first if you extend it.

### Named Rules

**The Single-Family Rule.** There is no display typeface and there will not be one. Contrast is created with weight
(400 vs 700) and size, inside Atkinson Hyperlegible. Introducing a second sans or a serif display breaks the
accessibility claim the type is making.

**The Mono-Is-Metadata Rule.** Monospace is permitted on data a developer scans — periods, versions, stack values,
contact meta, code. It is forbidden on sentences, on headings, and on navigation. Mono prose is costume.

**The Invisible Underline Rule.** Links carry `text-decoration: underline` with a transparent decoration color at rest
and reveal it on hover. The color never shifts — the underline _is_ the affordance. This keeps a page dense with links
from looking speckled, while preserving a real underline for anyone who forces link styling. Footer links are the one
exception: they sit at `--fg-muted` at rest and _gain_ `--accent-text` on hover, because footer meta should recede.

**The Optical-Nudge Rule.** Two utilities in `global.css` exist purely to fix glyph geometry, and both adjust optics
without touching layout. `.paren-nudge` lifts parenthesis glyphs by `-0.08em` (tunable via `--paren-nudge`) because they
are drawn taller than caps and dip below the baseline — visible beside flat letters at display size. `.title-flush`
bottom-aligns a large title against a smaller subtitle on one line: `align-items: baseline` everywhere, upgrading to
`text-box-trim` under `@supports (text-box-edge: cap alphabetic)` so the boxes hug the glyphs. Reach for these rather
than hard-coding a `translateY` or a magic margin.

**The Tabular Column Rule.** Any number in a two-column `sm:grid-cols-[8rem_1fr]` layout (post dates, job periods,
degree years) takes `tabular-nums` so the left column stays a true column.

---

## 4. Elevation

**This system is flat.** Shadows exist on exactly three elements site-wide, and all three float above the page by
definition: the language dropdown, the mobile menu panel, and the timeline hover tooltip. No content surface — not a
list row, not a chip, not the hero, not a blog post — has a resting or hover shadow.

Depth on content is carried by three non-shadow devices instead:

1. **Hairline borders** (`border-border`) for structure — the only line the system draws.
2. **Tonal fills at partial alpha** (`bg-surface-alt/40` for zebra rows, `/55` for outline buttons) for grouping
   without enclosure.
3. **Backdrop blur** (`backdrop-blur-3xl` over `bg-surface/60`) for the sticky nav and mobile menu — the frosted layer
   is what says "this is above the page," so a shadow would be redundant.

### Shadow Vocabulary

- **Floating panel** (`box-shadow` via `shadow-lg`): language dropdown and mobile menu only.
- **Tooltip** (`shadow-sm`): the blog timeline's hover label only.

### Named Rules

**The Only-Overlays-Cast-Shadows Rule.** If an element is in the document flow, it gets no shadow. If it is absolutely
positioned above the page, it may have exactly one. There is no hover elevation anywhere; hover changes color or border,
never height.

**Ignore `BlogCard.astro`.** It is dead code — imported by nothing — and it contradicts this section on purpose-free
grounds: `rounded-2xl border bg-surface-alt transition-shadow hover:shadow-lg`. Hover elevation, a card grid, and the
system's only `rounded-2xl` container, all in one unused file. It is the pattern this system replaced with row lists,
not a sanctioned alternative. Delete it or leave it; do not copy it.

**The Frosted-Chrome Rule.** Frosted glass (`backdrop-blur` + a 60%-opaque surface fill) is reserved for chrome: nav,
mobile menu, cookie modal. Content is never glass.

**Anti-pattern test:** if a section looks like it could be dragged off the page, it has too much elevation.

---

## 5. Components

### Buttons

- **Shape:** gently rounded, 8px (`rounded-lg`, or the identical-after-retune `rounded-xl`). Every labelled button on
  the site is this shape; `rounded-full` is reserved for icon-only controls (see Icon button below).
- **Padding:** `px-6 py-3` for CTAs, `px-3 py-1.5` for nav links, `p-1.5`–`p-2` for icon buttons.
- **Primary (filled):** Harbor Blue fill (`bg-accent-bg`), white text applied automatically by the Auto-White Rule,
  hover deepens to `bg-accent-dim`. Used sparingly — one per view at most.
- **Outline (default CTA):** `border border-border bg-surface-alt/55 text-fg`; hover swaps the border to `border-accent`
  and lifts the fill to full `bg-surface-alt`. This is the site's _normal_ button; the filled variant is the exception.
- **Icon button — two variants, by context:**
  - _Navbar_ (compact): transparent, `text-fg-muted`, hover fills `bg-surface-alt` and darkens to `text-fg`. The visual
    box is smaller than 44px, so every navbar icon control wraps a `before:absolute before:-inset-2` pseudo-element to
    expand the tap target without disturbing layout.
  - _Social row_ (`SocialLinks.vue`): `h-11 w-11` (44px, so no pseudo-element is needed), `rounded-full`, `text-fg`,
    hover fills `bg-surface-alt` and fades to `text-fg/70`. Round is correct here because these are icon-only targets
    with no label, not because round is a general button shape.
- **Focus:** no per-button focus utility. Every focusable element inherits the single global ring:
  `outline: 2px solid var(--accent); outline-offset: 3px`.

**Known drift.** `NotFoundPage.astro` currently violates two rules on one row: its primary is `rounded-xl` while its
peer secondary is `rounded-full` (peer controls must match), and the secondary carries `hover:border-accent/40` with no
`border` class, so that hover does nothing. Copy the `HomePage.astro` CTA pair instead — that is the reference
implementation.

### Metadata Lists (there are no chips)

**This system has no chip, tag, pill, or badge component, and the absence is deliberate.** Everywhere a chip would be
the reflex, the site uses bare mono text instead:

- **Stack list** (about page): a `sm:grid-cols-[5.5rem_1fr]` two-column row per group — sans label left
  (`font-sans text-sm text-fg`), mono values right (`font-mono-maple text-sm text-fg-muted`) joined with `" / "`. Ten
  skills read as one scannable line, not ten boxes.
- **Contact meta** (about page header): a `flex flex-wrap gap-x-5` list of Lucide-icon + mono text pairs, no fill and no
  border.

**The No-Chip Rule.** Do not wrap short metadata in a bordered pill. If a list of short strings needs to be shown, set
it in mono and separate it with a delimiter. A chip implies a filter or a removable token; nothing here is either, and a
decorative chip is the card reflex at small scale.

### Cards / Containers

**Cards are not the default affordance here, and mostly do not exist.** The blog index and the home page's recent-posts
section both render a **zebra-striped row list**, not a grid:

- Row: `border-t border-border p-0 last:border-b even:bg-surface-alt/40`, no radius, no shadow, edge-to-edge.
- Row link: `group grid gap-x-6 gap-y-1 px-3 py-5 sm:grid-cols-[8rem_1fr]` — mono date left, title + description right.
- Title hover: `group-hover:text-accent`. The whole row is the target.

Where an actual container is needed:

- **Corner style:** 8px (`rounded-lg`/`rounded-xl`, identical after the retune) for everything. Images get 8px
  automatically from a global `img { border-radius: 0.5rem }`, so don't add a radius class to an `<img>`.
- **Background / border:** `bg-surface-alt` with `border-border`, or no fill at all.
- **Shadow strategy:** none. See Elevation.
- **Internal padding:** `p-5` inside a container, `px-7 sm:px-10` for page-level content wells.

**The hero is flat, not a card.** It sits at `mx-auto max-w-5xl p-7 sm:p-10` with no fill, no border, and no shadow —
the padding exists purely for rhythm.

### Inputs / Fields

**The project has no form inputs** — no text field, no search box, no select, anywhere. The only input-like element is
the read-only markdown task-list marker, which has two rendering paths:

- **Live path:** `rehypeTaskListLucide.mjs` replaces the checkbox with an inline Lucide SVG at build time
  (`1.05rem` square, `text-fg-muted`, switching to `--accent` via `.task-list-marker.is-checked`). This is what ships.
- **Fallback path:** if a raw `<input type="checkbox" disabled>` survives the pipeline, CSS styles it to match —
  `appearance: none`, `2px solid var(--fg-muted)` box, 0.2rem radius, clip-path checkmark that scales from 0 to 1 when
  checked, `--accent` when checked.

Both live in `global.css`; keep them visually identical if you touch either.

If a real input is ever added, derive it from the outline button: 8px radius, `border-border`, `bg-surface-alt/55`,
global focus outline, `--warning` for the error state.

### Navigation

- **Bar:** sticky, `z-50`, `border-b border-border bg-surface/60 backdrop-blur-3xl`. A three-column grid
  (`1fr auto 1fr`) at `md` and up, so the link cluster stays optically centered regardless of how wide the right-hand
  controls get; the left column is an empty spacer.
- **Links:** `text-sm font-medium capitalize`, 8px radius, set in the locale-appropriate **sans** (a computed
  `notoFontClass`, not mono). Inactive is transparent with a `hover:bg-surface-alt` fill; active is a filled
  `bg-accent-bg` pill.
- **There is no wordmark or logo in the bar.** The nav is controls only; identity lives in the hero.
- **Mobile:** below `md`, links collapse into a hamburger. The panel is a separate frosted sheet
  (`bg-surface/60 backdrop-blur-3xl shadow-lg`) dropped below the bar at `z-60`.
- **Z-index ladder:** nav `50` → mobile menu `60` → language dropdown `70` → skip link `9999`. Use these steps; do not
  invent values.

### Theme Switcher (signature component)

A compact icon at rest that expands into a three-segment pill (Light / System / Dark) on hover. The compact icon fades
and slides out (160ms, `out(3)`) while the pill springs in (`spring({ bounce: 0.2 })`); the transition reverses on
leave. The pill is `rounded-lg border border-border` with **no fill and no shadow** — it reads as an outline control,
not a floating menu. The active segment is `bg-accent-bg`; segments use `first:rounded-l-lg last:rounded-r-lg` so the
pill has one continuous outer radius. Hover expansion is gated on `(hover: hover) and (pointer: fine)`; touch devices
get the pill directly.

### Motion

Two systems, both anime.js v4, both with a real reduced-motion branch.

- **Scroll reveals** (`src/scripts/scrollAnimations.ts`): `opacity 0→target` + `translateY 18→0`, 480ms, `out(3)`.
  Staggered groups use `translateY 22→0`, 520ms, 65ms per-index delay. Driven by an IntersectionObserver at
  `threshold: 0.05`.
- **Interaction motion** (`NavBar.vue`): springs for anything entering (`bounce: 0.2` for the theme pill, `stiffness:
260, damping: 20, mass: 0.85` for the mobile panel), and short `out(3)` tweens (150–200ms) for anything leaving. Enter
  with physics, exit with a curve.

**The Reduced-Motion-Is-A-Branch Rule.** Under `prefers-reduced-motion: reduce`, scroll targets are marked
`data-animate-done` immediately and never animate, and every navbar animation writes its end state directly rather than
running at 0.01ms. The global `transition-duration: .01ms !important` override is the floor, not the strategy.

**The Never-Hide-Content Rule.** `[data-animate]` elements are only set to `opacity: 0` under `html.js`, a class an
inline script adds before first paint. Without JS — and in any headless renderer — content ships visible. Never gate
visibility on a class a runtime has to add later.

---

## 6. Do's and Don'ts

### Do:

- **Do** use `text-accent-text` (`#405d78`) for links and any accent text at body size. Reserve `text-accent`
  (`#6f93af`) for large, bold, or non-text use.
- **Do** let the Auto-White Rule apply the text color on `bg-accent-bg` / `bg-accent-dim` / `bg-highlight` /
  `bg-highlight-dim`.
- **Do** reach for a bordered, zebra-striped row list before a card grid. Rows are this site's list affordance.
- **Do** keep every page wrapper at `mx-auto max-w-5xl px-4 py-12`. The nav shares the same width; that alignment is the
  spine of the layout.
- **Do** put `font-mono-maple` on résumé periods, contact meta, stack values, and code — and only on pages that import
  the face. Put `tabular-nums` on anything that sits in a numeric column, mono or not.
- **Do** write a real reduced-motion branch (instant end state) for any new animation, not just a shortened duration.
- **Do** use the z-index ladder (50 / 60 / 70 / 9999) for anything that stacks.
- **Do** wrap small icon controls in `before:absolute before:-inset-2` to reach a 44px tap target without changing
  layout.
- **Do** verify new body text hits 4.5:1 against `--surface` in **both** modes before shipping it.

### Don't:

- **Don't** build the **corporate LinkedIn clone** — stiff, buzzwordy, headshot-and-blazer energy. The about page is a
  plain résumé in the site's own type, not a profile card.
- **Don't** build **terminal cosplay** — no fake CLI prompts, no blinking cursors, no matrix green. Mono accents are the
  seasoning; pretending to be a shell is the costume.
- **Don't** add `text-white` or any text color to a filled accent/highlight background. Global CSS already forces `#fff`,
  so your class is dead code. Three files currently carry this dead class — `NavBar.vue` (`bg-accent-bg text-white` on
  both the desktop and mobile active nav pill) and `NotFoundPage.astro` (`text-fg` on a filled button). Those are bugs,
  not the pattern.
- **Don't** add shadows to content. Shadows belong to the language dropdown, the mobile menu, and the timeline tooltip.
  There is no hover elevation on this site.
- **Don't** use `rounded-3xl`, `rounded-4xl`, or any radius above 10px on a container. The ramp was deliberately
  compressed (`--radius-xl: 0.5rem`, `--radius-2xl: 0.625rem`); over-rounding undoes it. Two deliberate exceptions:
  fenced code blocks (`.prose pre`, 12px) and icon-only controls (`rounded-full`). Both are different materials, not
  containers.
- **Don't** mix radii on peer controls. Buttons that sit in the same row are all `rounded-lg` / `rounded-xl` (the same
  8px after the retune). See the known drift on `NotFoundPage.astro` in Components.
- **Don't** invent a chip, tag, or badge. Short metadata is mono text with a delimiter. See The No-Chip Rule.
- **Don't** introduce a second typeface. Weight and size inside Atkinson Hyperlegible carry the hierarchy.
- **Don't** set monospace on prose. Mono is for metadata and code.
- **Don't** put a warm color anywhere except the featured/pinned indicator and the code-block surface.
- **Don't** gate content visibility on a JS-applied class outside the existing `html.js` + `[data-animate]` mechanism.
- **Don't** add a hover-only affordance without a `(hover: hover) and (pointer: fine)` guard and a touch equivalent.
- **Don't** invent a warning red, a new gray, or a one-off border color. `--warning`, `--fg-muted`, and `--border`
  already exist.
