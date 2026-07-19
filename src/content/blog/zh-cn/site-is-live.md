---
title: "网站上线了"
description: "上线这个个人网站的一些笔记"
pubDate: 2026-07-19
tags:
  - launch
---

你正在看的这个网站上线了。这是第一篇不是参考指南的文章，所以我想顺便记下它是什么、以及是怎么做出来的。

## 这是什么

一个个人简介和博客。有一个 [关于页面](/zh-cn/about) 放我的经历、项目和技术栈，还有这个博客。就这样。

## 怎么做的

- 用 **[Astro](https://astro.build)** 做页面，少数需要交互的部分用 Vue island（主题切换、语言切换、文章灯箱）。
- 三种语言，English、繁體中文、简体中文，每个页面共用同一个组件。
- 样式用 **Tailwind v4**，配一套我喜欢的会跟着浅色／深色模式切换的配色。
- 用 **Cloudflare** 部署。

## 接下来

大概就是更多文章。如果你发现 bug 或错字，源代码在 [GitHub 上](https://github.com/cytsai1008/cytsai-profile)，欢迎开 issue 或 PR。

谢谢你来看看
