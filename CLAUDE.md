# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio for Matthieu Griffonnet, built with Astro (static output, no UI framework), Tailwind CSS v4, and GSAP. It is deployed as a Cloudflare Worker serving static assets, with no adapter. `wrangler.jsonc` points the Worker at `dist` (with `dist/404.html` for unknown paths), and `.node-version` pins Node 22 for the build. Cloudflare builds and deploys on every push to `main`. The Worker `name` in `wrangler.jsonc` must match the Worker's name in the Cloudflare dashboard.

The public address is `site` in `astro.config.mjs`. Canonical URLs, link previews, the sitemap and `public/robots.txt` all use it, so update both places if the domain changes.

The site has a one-page home, a detail page per project, and a 404 page. Each exists in English (`/`) and French (`/fr/`).

## Commands

- `npm run dev` (or `npm start`): dev server, by default at http://localhost:4321. Restart it after creating new files: Tailwind's dev scanner can miss classes that only appear in new files.
- `npm run build`: static build to `dist/`
- `npm run preview`: serve the built `dist/`

There are no tests and no linter configured. `npm run build` is the check: it fails on template errors. It does not type-check.

## Architecture

- **Routes:**
  - `src/pages/index.astro` and `src/pages/fr/index.astro` both render `src/components/HomePage.astro`.
  - `src/pages/projects/[slug].astro` and `src/pages/fr/projects/[slug].astro` both render `ProjectPage.astro`.
  - `src/pages/404.astro` shows English and French together.
- **Language:** Astro i18n in `astro.config.mjs` (`defaultLocale: 'en'`, `prefixDefaultLocale: false`). Components read the language with `Astro.currentLocale`, so the same component serves both languages.
- **Layout:** `src/layouts/Layout.astro` renders the `<head>` (localised title and description, canonical and `hreflang` links, Open Graph tags, favicon, inline theme script), then `Navbar`, `Controls`, the page, and `Footer`. `Controls` is the fixed top-right group: the EN/FR switch and `ThemeToggle`. Its `image` prop sets the link-preview image (default `public/og.jpg`; project pages pass `public/images/og/<screenshot>.jpg`), and `noindex` keeps a page out of search results (used by the 404).
- **SEO:** `@astrojs/sitemap` generates `sitemap-index.xml` with EN/FR alternates and leaves out the 404.
- **Home sections** (in `HomePage.astro`): `Name` (hero), `AboutMe`, `Experience`, `Skill`, `ProjectsHolder`, `Education`, `Contact`. Each sets its own `id`.
- **Section headers:** `SectionHeader.astro` takes `index` (for example `"03"`) and `title`. The indexes are hardcoded, so renumber them when you add or reorder a section.
- **Navbar:** links to `#id` on the home page and to `/#id` (or `/fr/#id`) elsewhere. An IntersectionObserver highlights the active link. Below `lg` the bar docks at the bottom of the screen and hides the Contact link; from `lg` it sits at the top, centred.

## Content and translations

- All visible text lives in `src/i18n/en.ts` and `src/i18n/fr.ts`. `fr.ts` is typed as `Dictionary` (the type of `en.ts`), so the two must keep the same keys. Get the dictionary with `useTranslations(Astro.currentLocale)`, and build links with `localizePath(path, lang)`. Some strings contain inline `<span>` markup and are rendered with `set:html`.
- Language-independent data lives in `src/data/site.ts`: contact links, experience stacks, project slugs, images, links, tools and galleries, and education logos and years. The dictionaries key their text by the same ids and slugs.
- **Adding a project:** add an entry to `projects` in `site.ts`, then add text under `projects.items[slug]` in both dictionaries (`summary` for the card; `intro`, `sections`, `team` and `captions` for the page).
- **Skills** are the exception: `skillGroups` in `Skill.astro` holds each skill's name, brand `color`, devicon `icon` file name, and `invert` (for black logos). Only the group titles and spoken-language names come from the dictionaries. Skills also appear in the `StackLoop.astro` marquee, so update both. Logos are self-hosted copies of devicon v2.17.0 in `public/icons/devicon/`; to add one, download it from `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/<name>/<file>.svg` into that folder.
- The hero's rotating taglines are passed to the client script as JSON in a `data-citations` attribute.

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
- `Education.astro`: on desktop the section pins (`end: '+=1400'`, with `refreshPriority: 1` so reveal triggers further down the page account for the pin's extra scroll space) while a rocket flies a zig-zag `MotionPathPlugin` path down through the alternating cards. The path is rebuilt from card positions on every ScrollTrigger refresh. Cards switch `data-reached` as the rocket passes, and that check runs in the timeline's `onUpdate` so it follows the smoothed scrub. On phones and under reduced motion, nothing pins and every card shows as reached.
- `StackLoop`: a pure-CSS infinite marquee in `src/styles/stack-loop.css`. That stylesheet is global, so keep its class names prefixed with `marquee-`. A generic class such as `.group` once collided with Tailwind's `group` and made every project card scroll.

## Assets

- Images are referenced as `/images/...`, which resolves to `public/images/`. Project screenshots are `.webp` files in `public/images/projects/`.
- School logos for the Education timeline are 256px square PNGs in `public/images/` (`polytech.png`, `iut.png` = Université Côte d'Azur symbol, `marine.png` = PMM insignia, `valbonne.png` = generic school icon, since the lycée has no published logo).
- The hero's Download CV button links to `public/cv/cv-en.pdf` and `public/cv/cv-fr.pdf`, which the owner provides.
- Fonts are self-hosted through `@fontsource-variable/inter` and `@fontsource-variable/space-grotesk`, imported in `Layout.astro`. The site loads nothing from third-party servers.
- Link-preview images are 1200×630 JPGs: `public/og.jpg` (a screenshot of the hero) and the per-project crops in `public/images/og/`. Regenerate a project crop with `magick <screenshot>.webp -resize 1200x630^ -gravity north -extent 1200x630 -quality 85 <name>.jpg` when its screenshot changes.
- The favicon is `public/favicon.svg`, with PNG versions for Apple devices and the manifest. If you change the SVG, regenerate the PNGs with `magick`.
