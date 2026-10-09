# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Matthieu Griffonnet, built with Astro (static output, no UI framework), Tailwind CSS v4, and GSAP. It is deployed to Cloudflare Pages with build command `npm run build` and output directory `dist`, and it uses no adapter. The page is one long scroll of sections; there is no routing beyond `src/pages/index.astro`.

## Commands

- `npm run dev` (or `npm start`): dev server, by default at http://localhost:4321
- `npm run build`: static build to `dist/`
- `npm run preview`: serve the built `dist/`

There are no tests and no linter configured. `npm run build` is the check: it fails on template errors. It does not type-check.

## Architecture

- `src/pages/index.astro` wraps the sections in `src/layouts/Layout.astro`, in this order: `Navbar`, `ThemeToggle`, `Name` (hero), `AboutMe`, `Experience`, `Skill`, `ProjectsHolder`, `Education`, `Contact`, `Footer`. All of them live in `src/components/*.astro`.
- The layout owns `<head>`: meta tags, the favicon and manifest, Google Fonts (Inter and Space Grotesk), and the inline theme script. It also imports `src/styles/global.css`, loads `src/scripts/reveal.ts`, and renders the fixed background glows.
- **Section headers:** `SectionHeader.astro` takes `index` (for example `"03"`) and `title`. The indexes are hardcoded per section, so renumber them when you add or reorder a section.
- **Navigation:** `Navbar` lists in-page anchors (`#about`, `#experience`, `#skills`, `#projects`, `#education`). Each section sets its own `id` on its `<section>`. An IntersectionObserver highlights the active link. On phones the navbar docks at the bottom (`sm:` and up it sits at the top); it fits only 5 links at phone width.
- **Content is hardcoded data arrays** in the component frontmatter:
  - `experiences` in `Experience.astro`
  - `skillGroups` in `Skill.astro`: each skill has `name`, a brand `color`, an optional devicon `icon` path, and `invert` for black logos
  - `stackIcons` in `StackLoop.astro`
  - `projects` in `ProjectsHolder.astro`, rendered through `ProjectCard.astro`, which splits `description` into paragraphs on `\n\n`
  - `educationData` in `Education.astro`
  - `contacts` in `Contact.astro`
- **Skills appear twice:** as chips in `Skill.astro` and as icons in the `StackLoop.astro` marquee. Update both when the tech stack changes.

## Theming

- Colours are tokens in the `@theme` block of `global.css`: `canvas`, `surface`, `ink`, `muted`, `accent`, `accent-2` and `tint`. Those values are the dark theme; `:root[data-theme="light"]` overrides them.
- Use `tint/N` (white in dark mode, black in light mode) for borders and subtle fills, never `white/N` or `black/N`.
- The inline script in `Layout.astro` sets `data-theme` on `<html>` before first paint. It uses `localStorage.theme` if the visitor chose one, otherwise the OS preference. `ThemeToggle.astro` flips the theme through `window.__applyTheme`.
- The `dark:` variant is remapped to `[data-theme=dark]` with `@custom-variant`.
- Tailwind v4 is configured from CSS through `@tailwindcss/vite`; there is no `tailwind.config.js`. Use v4 syntax, for example `bg-black/50`, not `bg-opacity-*`.

## Animations

Animations use plain client `<script>` tags, which Astro bundles. There are no framework islands, so don't add React or another UI framework just to animate something. Respect `prefers-reduced-motion` in new animations.

- `Name.astro`: the name is real text in the HTML, so search engines and screen readers see it. GSAP `ScrambleTextPlugin` scrambles it in with `gsap.from`, and `TextPlugin` rotates the tagline, skipping while the tab is hidden.
- `src/scripts/reveal.ts`: ScrollTrigger scroll reveals. Add `data-reveal` to fade in a single element, or `data-reveal-batch` for cards that should animate in together with a stagger.
- `Education.astro`: on desktop the section pins (`end: '+=1400'`) while a rocket flies a zig-zag `MotionPathPlugin` path down through the alternating cards. The path is rebuilt from card positions on every ScrollTrigger refresh. Cards switch `data-reached` as the rocket passes, and that check runs in the timeline's `onUpdate` so it follows the smoothed scrub. On phones and under reduced motion, nothing pins and every card shows as reached.
- `StackLoop`: a pure-CSS infinite marquee in `src/styles/stack-loop.css`. That stylesheet is global, so keep its class names prefixed with `marquee-`. A generic class such as `.group` once collided with Tailwind's `group` and made every project card scroll.

## Assets

- Images are referenced as `/images/...`, which resolves to `public/images/`.
- The project screenshots (`letsGo.png`, `erp.png`, `port.png`, `noesis.png`) and school logos (`valbonne.png`, `marine.png`, `iut.png`, `polytech.png`) are not in the repo yet, so they show as broken until they're added.
- The favicon is `public/favicon.svg`, with PNG versions for Apple devices and the manifest. If you change the SVG, regenerate the PNGs with `magick`.
