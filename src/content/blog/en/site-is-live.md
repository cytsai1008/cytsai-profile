---
title: "This site is live"
description: "Notes on launching my profile site"
pubDate: 2026-07-19
tags:
  - launch
---

The site you're reading is live. This is the first post that isn't a reference guide, so it seemed worth writing down what it is and how it's put together.

## What it is

A personal profile and blog. There's an [about page](/about) with my experience, projects, and stack, and this blog. That's the whole thing.

## How it's built

- **[Astro](https://astro.build)** for the pages, with Vue islands for the few interactive bits (theme toggle, language switcher, blog lightbox).
- Three languages, English, 繁體中文, and 简体中文, from one shared component per page.
- **Tailwind v4** for styling, with a small color system I like, and it responds to light and dark mode.
- **Cloudflare** for hosting.

## What's next

More posts, mostly. If you found a bug or a typo, the source is [on GitHub](https://github.com/cytsai1008/cytsai-profile), issues and PRs welcome.

Thanks for stopping by.
