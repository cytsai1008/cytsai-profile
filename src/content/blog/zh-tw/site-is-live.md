---
title: "網站上線了"
description: "上線這個個人網站的一些筆記"
pubDate: 2026-07-19
tags:
  - astro
  - launch
  - meta
---

你正在看的這個網站上線了。這是第一篇不是參考指南的文章，所以我想順便記下它是什麼、以及是怎麼做出來的。

## 這是什麼

一個個人簡介和部落格。有一個 [關於頁面](/zh-tw/about) 放我的經歷、專案和技術棧，還有這個部落格。

## 怎麼做的

- 用 **[Astro](https://astro.build)** 做頁面，少數需要互動的部分用 Vue island（主題切換、語言切換、文章燈箱）。
- 三種語言，English、繁體中文、简体中文，每個頁面共用同一個元件。
- 樣式用 **Tailwind v4**，配一套我喜歡的會跟著淺色／深色模式切換的配色。
- 用 **Cloudflare** 部署。

## 接下來

大概就是更多文章。如果你發現 bug 或錯字，原始碼在 [GitHub 上](https://github.com/cytsai1008/cytsai-profile)，歡迎開 issue 或 PR。

謝謝你來看看。
