# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Matthieu Griffonnet, built with Astro (static output, no UI framework), Tailwind CSS v4, and GSAP. It is deployed to Cloudflare Pages with build command `npm run build` and output directory `dist`, and it uses no adapter. The page is one long scroll of sections; there is no routing beyond `src/pages/index.astro`.

## Commands

- `npm run dev` (or `npm start`): dev server at http://localhost:4321
- `npm run build`: static build to `dist/`
- `npm run preview`: serve the built `dist/`

There are no tests and no linter configured. `npm run build` is the check: it fails on template and type errors.

## Architecture

- `src/pages/index.astro` wraps the sections in `src/layouts/Layout.astro`, in this order: `Navbar`, `Name`, `AboutMe`, `Skill`, `ProjectsHolder`, `Education`, `Footer`. All of them live in `src/components/*.astro`.
- The layout owns `<head>`, imports `src/styles/global.css` (Tailwind import, `MOELA` font, body colours), and loads `src/scripts/reveal.ts`.
- **Navigation:** `Navbar` links to in-page anchors (`#about`, `#skills`, `#projects`, `#education`). The `id`s are set inside the section components. `#skills` is on the `StackLoop` carousel, not on `Skill`. Keep the ids in sync if you rename or move a section.
- **Content is hardcoded data arrays** in the component frontmatter: `projects` in `ProjectsHolder.astro` (rendered via `ProjectCard.astro`), `educationData` in `Education.astro`, and `stackIcons` in `StackLoop.astro`. `ProjectCard` splits `description` into paragraphs on `\n\n`.
- **Skills appear twice:** `Skill.astro` has shields.io badges and `StackLoop.astro` has devicon icons. Update both when the tech stack changes.
- `SectionHeader.astro` (`title` prop) is the shared header card used by every section.

## Animations

Animations use plain client `<script>` tags, which Astro bundles. There are no framework islands, so don't add React or another UI framework just to animate something.

- `Name.astro`: GSAP `ScrambleTextPlugin` and `TextPlugin` on `.name`, `.last-name` and `.desc`, plus an infinite loop that rotates the tagline.
- `src/scripts/reveal.ts`: GSAP ScrollTrigger scroll reveals, disabled under `prefers-reduced-motion`. Add `data-reveal` to fade in a single element, or `data-reveal-batch` for cards that should animate in together with a stagger.
- `StackLoop`: pure-CSS infinite marquee in `src/styles/stack-loop.css`. The icon list is rendered twice and translated by the `spin` keyframe.

## Styling

- Tailwind v4 is configured from CSS through `@tailwindcss/vite` in `astro.config.mjs`; there is no `tailwind.config.js`. Use v4 syntax, for example `bg-black/50`, not `bg-opacity-*`.
- Recurring palette: page background `#1a1414`, card background `#3A2622` with a `#5a3a2a/30` border, and accent gold `#FFD700` / `#E1B12C` (`.highlight`).

## Assets

Images are referenced as `/images/...`, which resolves to `public/images/`. `.gitignore` excludes `*.png`, `*.jpg`, `*.jpeg` and `*.gif`, so project screenshots and school logos are **not in the repo**. A fresh clone or a Cloudflare build shows broken images for these. SVGs are committed.
