# Portfolio redesign — editorial index

Date: 2026-09-13
Status: approved in conversation, pending spec review

## Goal

Replace the current templated single-page portfolio (typing hero, blurred blobs,
giant faded section numbers, gradient-accented headings, scroll fade-ins,
zigzag project grid, alternating timeline) with an editorial layout that leads
with the open-source products Felix ships: KickJS, fcms, fordb and the Forinda
RTC SDK.

Articles (MDX) and `sitemap.xml` are separate follow-up projects. This redesign
must leave room for them (an "Articles" nav link appears only once articles
exist) but does not build them.

## Decisions

| Topic | Decision |
|---|---|
| Direction | C, "Index": serif display type, products as large ruled rows, no version numbers |
| Structure | Option 1: rebuild each section in place; stays a single page |
| Sections kept | About, Work (products), Client work, Skills, Experience, Education & certifications, Contact |
| KickJS | Feature row: larger first product row, not its own section |
| Theme | Follows system `prefers-color-scheme`; toggle overrides and persists |
| Source of content | `app/data/content.ts` stays the single source |

## Visual system

### Colour tokens

Defined as CSS custom properties in `app/app.css` on `:root`, redefined under
`.dark` (the existing `@custom-variant dark` class strategy stays).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#f7f7f3` | `#15140f` | page background |
| `--ink` | `#141414` | `#ecebe4` | primary text |
| `--ink-muted` | `#5b5b56` | `#a3a29a` | descriptions, dates, secondary text |
| `--rule-strong` | `#1a1a1a` | `#e8e7df` | product row rules |
| `--rule` | `#dcdcd5` | `#34332d` | light list dividers |
| `--accent` | `#2a3fbf` | `#9aa8ff` | links on hover, focus outline only |

Tokens are exposed to Tailwind via `@theme` (`--color-paper`, `--color-ink`,
etc.) so components use classes like `bg-paper text-ink`. No gradients; no
single-word coloured accents in headings.

### Typography

- **Newsreader** (Google Fonts, opsz axis, weight 400): section headings, the
  opening statement, product names.
- **IBM Plex Sans** (400, 600): body copy, descriptions, navigation, labels.
- **IBM Plex Mono** (400): KickJS code sample and install command only.
- Removed: Inter, Space Grotesk, JetBrains Mono.

Scale (rem): 0.8125 meta · 0.9375 body-small · 1.0625 body · 1.5 row name ·
2.25 section heading · clamp(2.25, 5vw, 3.75) opening statement. Headings use
`text-wrap: balance`. Running text max ~65ch.

### Layout

- One left-aligned column, `max-w-[1080px]`, side padding `px-5 md:px-8`.
- Sections start with a plain Newsreader `<h2>`: no eyebrow label, no number,
  no background glyph.
- Lists are ruled rows: CSS grid columns for name / description / meta. Below
  `md` they stack (name + meta on one line, description beneath).
- Section spacing via `py-16 md:py-24` on each `<section>` only; inner spacing
  via `gap`, never sibling margins.

### Motion

No scroll-triggered or load animations. Only colour/underline transitions on
hover and focus, and the mobile menu open/close. All transitions disabled under
`prefers-reduced-motion: reduce`.

## Page structure

1. **Header** — "Felix Orinda" (links to top), nav: Work, About, Experience,
   Contact; theme toggle. Not fixed-transparent-to-blur: a static header at the
   top of the page. Mobile: menu button opens a full-screen overlay; closes on
   Escape, on link click, and via close button.
2. **Opening** — one Newsreader sentence ("Software engineer in Nairobi, making
   tools other developers build on.") and one Plex Sans line naming the
   products and current role. Height set by content, not `min-h-screen`.
3. **Work** —
   - KickJS feature row: name, one-paragraph pitch, code sample (existing
     `kickjs.codeSnippet`), install command with copy button, 6 key packages
     (kickjs, cli, db, client, ws, ai) as a compact list, links "Docs" and
     "GitHub", and "All 17 packages" linking to kickjs.app.
   - Standard rows for fcms, fordb, Forinda RTC SDK: name / description /
     link(s).
4. **Client work** — smaller rows: Datawise Africa, Datalab Africa, UrbanEcho,
   nuxt-swal (name / role / description / link).
5. **About** — two paragraphs left; skills right as one line per category
   ("Languages — TypeScript, JavaScript, Python, Go"). Stat tiles removed.
6. **Experience** — aligned list: role · company · period. uTest kept as
   "Jul 2022 – Present" with role labelled "Software Developer (part-time)"
   (user did not specify an end date).
7. **Education & certifications** — degree, school, years; Microsoft Learn
   Student Ambassador; four certifications as a plain list.
8. **Contact** — one sentence plus Email, LinkedIn, GitHub text links.
9. **Footer** — short bio line, copyright, links.

## Component changes

| File | Change |
|---|---|
| `app/app.css` | New tokens, fonts, focus ring, reduced-motion rule. Remove `text-gradient`, `heading-display`, keyframes, scrollbar styling, `.divider`. |
| `app/root.tsx` | New Google Fonts URL. Inline theme script: apply `dark` if stored `"dark"`, or no stored value and system prefers dark (fixes light flash). |
| `app/components/navbar.tsx` | Rewrite as static header; remove framer-motion; add Escape-to-close. |
| `app/components/hero.tsx` | Rewrite as opening statement; remove typing hook, blobs, "FO". |
| `app/components/work.tsx` | New. Replaces `kickjs.tsx` and `projects.tsx` (both deleted). |
| `app/components/about.tsx` | Rewrite; absorbs skills. `skills.tsx` deleted. |
| `app/components/experience.tsx` | Rewrite as aligned list. |
| `app/components/education.tsx` | Rewrite as list. |
| `app/components/contact.tsx` | Rewrite as sentence + links. |
| `app/components/footer.tsx` | Restyle. |
| `app/components/theme-toggle.tsx` | Inline SVG sun/moon; label names target theme; sync state with class set by root script. |
| `app/components/icons.tsx` | Keep only icons still used. |
| `app/components/motion.tsx`, `app/hooks/use-intersection.ts` | Delete. |
| `app/portfolio.tsx` | New section order. |
| `app/data/content.ts` | `projects` split into `products` (fcms, fordb, RTC SDK) and `clientWork`; add `links: { label, href }[]` per item; add `kickjs.keyPackages`; remove `about.stats`, `kickjs.stats`, `kickjs.highlights`; mark uTest part-time. |
| `package.json` | Remove `framer-motion`, `@tabler/icons-react`. |

Unchanged: `app/routes.ts`, `app/routes/home.tsx` meta, `app/utils/seo.ts`,
Netlify plugin config, Dockerfile.

## Accessibility

- Visible focus outline (`2px solid var(--accent)`, offset 3px) on all
  interactive elements.
- Theme toggle `aria-label` names the theme it switches to; `aria-pressed`
  not used.
- Mobile menu: `aria-expanded` on trigger, Escape closes, focus returns to the
  trigger.
- Each section has an `id` and an `<h2>`; external links keep
  `rel="noopener noreferrer"`.
- Colour contrast: `--ink-muted` on `--paper` ≥ 4.5:1 in both themes.

## Verification

- `pnpm typecheck` and `pnpm build` pass.
- Visual check: one screenshot each at 1440px and 390px, light and dark.
- Manual: theme follows system with no stored value; toggle persists across
  reload with no flash; mobile menu opens, closes on Escape; copy button copies
  the install command.

## Out of scope

- MDX articles and `/articles` routes.
- `sitemap.xml` and `robots.txt`.
- Per-product pages, live npm version fetching, OG image regeneration.
