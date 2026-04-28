# Liminar Design System

> Editorial, monochrome, single-accent design system for **Liminar** — a Chilean lead-generation and data-automation studio. Tagline: *"Tus próximos clientes ya están en internet. Nosotros los encontramos."*

---

## Sources

This system was reverse-engineered from a single landing page reference:

- **Codebase:** `Landing/index.html` (mounted local folder; copy preserved at `source/landing.html`)
- **Full-page screenshot:** `assets/liminar-full.png` (1244×3650, original capture)
- **No Figma file** was provided.
- **No slide template** was provided.
- **No app/dashboard** was provided — Liminar is, as far as the source shows, a single marketing landing page. The "product" being sold is a service.

If you have additional assets (Figma library, brand guidelines doc, app screens, presentation deck), please attach them via the Import menu — this system is currently extrapolated from a single artefact.

---

## What is Liminar?

Liminar is a **B2B service** based in Santiago, Chile. They monitor public Chilean data sources — `Mercado Público`, `Portal Inmobiliario`, `SIMEF / Poder Judicial`, `Yapo`, `Toctoc`, `Diario Oficial` — to surface qualified sales leads for clients in real estate, legal, and mediation. The product is sold via a static landing page with a contact form (Formspree) and a WhatsApp link; there is no SaaS UI.

Three case studies are documented:
1. **Real estate** — particular sellers → broker leads via Portal Inmobiliario monitoring.
2. **Legal** — losing bidders on Mercado Público → law firm leads.
3. **Mediation centres** — SIMEF case extraction → automated WhatsApp/email reminders to parties.

The page is **Spanish (`lang="es"`)** throughout.

---

## Index

Files in the root of this design system:

| File | What it contains |
|---|---|
| `README.md` | This document — content/visual/iconography fundamentals |
| `SKILL.md` | Agent-skill manifest for Claude Code compatibility |
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, motion, semantic styles |
| `assets/` | Logo SVG, full-page reference screenshot, hero chart, source-tag inventory |
| `fonts/` | Empty — fonts are loaded from Google Fonts at runtime (see *Type substitutions*) |
| `preview/` | HTML cards rendered in the Design System tab (one concept per card) |
| `ui_kits/landing/` | React/JSX recreation of the marketing site |
| `source/landing.html` | Verbatim copy of the original Liminar landing page |

UI kits available:
- **`ui_kits/landing/`** — single-product marketing site recreation. The only product surface that exists.

---

## Content fundamentals

### Language
- **Spanish (Chile).** Local idioms (*pauta* = paid ads, *Mercado Público* = the Chilean public-procurement portal) appear without translation. Build all UI copy in es-CL unless explicitly told otherwise.
- Spanish opens questions with `¿` and exclamations with `¡`.

### Voice
- **Direct, dry, confident.** Liminar does not hype. It states.
  - *"Tus próximos clientes ya están en internet. Nosotros los encontramos."*
  - *"Tú cierras. Nosotros seguimos encontrando."*
  - *"Si no identificamos al menos una fuente de leads concreta para tu negocio, no insistimos."*
- **Second-person singular (`tú`).** Never `usted`, never `nosotros los clientes`. The reader is one specific operator — a broker, a lawyer, a mediator.
- **First-person plural for Liminar.** *"Monitoreamos…", "Entregamos…", "Trabajamos sobre fuentes públicas…"*
- **Italic = the brand's italics.** Used in display headlines for the *one phrase that flips the meaning of the sentence* — `ya existen`, `familiar?`, `oportunidad cerrada`, `funcionando`, `no estás viendo?`. Always paired with the Fraunces italic-light weight and the cobalt accent (or accent-s on dark). Use sparingly — at most one italic phrase per heading.

### Tone
- **Anti-marketing.** Naming explicit pain in clients' own words is the brand's signature move:
  - *«Pago publicidad pero los leads no convierten.»*
  - *«Tengo data pero no sé qué hacer con ella.»*
  - *«Pierdo horas haciendo lo mismo cada semana.»*
- Quotes are wrapped in **Spanish guillemets** `« »`, not English curly quotes.
- Negative-space promises: *"Sin publicidad pagada. Sin cold calling masivo. Sin bases compradas."* The word `Sin` ("without") appears as a structural device — three short denials in a row.

### Casing & punctuation
- **Sentence-case** for headlines and body. No Title Case Anywhere.
- Section-tag eyebrows are **uppercase mono** — `01 / DIAGNÓSTICO`, `02 / MÉTODO`, `03 / CASOS`. The numeral and slash are part of the eyebrow form.
- Period-terminated headlines are common (*"Diagnóstico gratuito.", "Diseño del flujo."*) — feels declarative, not promotional.
- **Em-dashes `—`** for asides; the page uses them generously to chain clauses without commas.
- **Arrows `→`** appear in CTAs (*"Conversemos →", "Agenda diagnóstico gratis →", "Enviar →"*) — never `>>` or `›`.
- **Middle-dot `·`** as a separator for meta strings: `Santiago · CL`, `Liminar · 2026 · Hecho en Santiago`, `Real Estate · Portal Inmobiliario`.

### Numerals & proper nouns
- Numbered lists prefix with zero-padded numerals — `01`, `02`, `03`, `04`. Always two digits, in mono.
- Source/portal names are kept verbatim with their original casing — **Mercado Público**, **Portal Inmobiliario**, **SIMEF**, **Diario Oficial**, **ChileCompra**. Do not translate or anglicise.

### Emoji
- **None.** The site contains zero emoji. Do not introduce any. Use mono numerals, the cobalt dot, and the arrow glyph instead.

### Vibe
Half data-engineer, half publishing house. Think *El País* layout discipline meets a Bloomberg terminal. The page feels printed.

---

## Visual foundations

### Palette
- **Paper background `#F8F8F7`** — warm off-white. Not pure white. Pages should never be `#FFFFFF`.
- **Secondary paper `#EFEFEC`** — used for the CTA section bg and card hover fills. ~3% darker.
- **Deep ink `#0C0C10`** — full-bleed inverted background reserved for the *process / method* section. Slightly blue-shifted near-black.
- **Ink `#0F0F14`** — primary text colour, also slightly blue-shifted. Never pure `#000`.
- **Ink-secondary `#424248`** — body copy, hairlines on hover.
- **Ink-muted `#85858E`** — eyebrows, captions, mono meta.
- **Cobalt accent `#1B44E3`** — the *only* highlight colour. Used for: the brand dot, italic emphasis in headlines, primary CTA, the threshold-crossing line in the hero chart, focus rings, the success banner border.
- **Cobalt-soft `#BDC8F5`** — the same accent role *on dark backgrounds* (e.g. italic emphasis in the proceso h2).
- **Hover-state cobalt `#0F30C2`** — accent CTAs darken slightly on hover.

**Strict one-accent rule:** there is no green for success, no red for errors, no orange for warnings. Cobalt does all semantic work; absence/presence and italics carry meaning.

### Type
- **Fraunces** (variable, optical sizing) for all display. Always `font-weight: 400` for upright, `300` for italics. Italics are noticeably lighter than uprights — this is intentional.
- **Inter** for body. `400` and `500` only.
- **JetBrains Mono** for eyebrows, source tags, meta, footer copyright, chart labels. `0.6875rem` / `0.625rem`, uppercase, `letter-spacing: 0.06em`.
- Line-height is generous — body ~1.65–1.7, hero h1 1.05.
- Letter-spacing on display: `-0.025em` on the hero, `-0.02em` elsewhere.

### Layout
- **Max-width 1280px**, padding `24px → 48px → 80px` at three breakpoints.
- **Bordered grid cards** — pain-grid, cases-grid, steps-grid all share one outer `1px` border with internal `1px` dividers. No gap between cards. Cards are sharp-cornered (`border-radius: 0`).
- **Section rhythm:** `padding: 112px 0` on most sections, `128px` on hero and CTA. Section dividers are full-width 1px hairlines.
- **Section eyebrows:** mono number + slash + label, followed by a 56px hairline rule (`.stag-rule`). Sets the editorial tone immediately.
- **Two-column hero:** 58/42 split at ≥1024px, 88px gap. Below that, single column with 72px gap.

### Backgrounds & texture
- **Persistent grain overlay** — fractal-noise SVG at `0.032` opacity, fixed-positioned, `z-index: 9999`, `pointer-events: none`. Sits on top of *everything*. Critical to the brand feel; do not omit.
- **No gradients** anywhere. The "deep ink" section is a flat fill.
- **No images as backgrounds.** No hero photography. The hero illustration is an inline SVG line chart.
- **No repeating patterns** other than the grain.

### Animation & motion
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out, "settle"). Used everywhere.
- **Entrance choreography:** hero rises from `translateY(20px) opacity:0` in a staggered cascade — eyebrow at 0.10s, h1 at 0.22s, lede at 0.34s, CTAs at 0.46s, chart at 0.52s, source bar at 0.58s. Always 0.72s duration.
- **Chart draws** with `stroke-dasharray` — grey trend line draws over 1.9s starting at 0.95s; cobalt accent line draws over 1.3s starting at 2.15s; the threshold-crossing dot pulses (`r: 5 → 11 → 5`) at 2.2s; trailing dots fade in at staggered offsets.
- **Brand-dot pulse:** the cobalt dot in the wordmark and hero eyebrow uses `pulse 2.8s ease-in-out infinite` — `opacity 1→0.35→1`, `scale 1→0.65→1`. This is the brand's only ambient animation.
- **No bounces, no spring overshoots, no rotation.** Slides translate up; fills change colour; that's it.

### Hover, focus, press
- **Buttons** translate up 3px on hover (`transform: translateY(-3px)`) and shift colour:
  - `btn-dark`: ink → cobalt
  - `btn-accent`: cobalt → cobalt-press
  - `btn-ghost`: border-line → ink
- **Cards** (pain, case, step) shift bg from `transparent → bg2` on hover. No scale, no shadow.
- **Inline links** (in the contact section) underline with `border-bottom: 1px solid var(--line-s)`, transitioning to cobalt + cobalt border on hover.
- **Inputs** focus to a `1px solid var(--accent)` border with a `3px rgba(27,68,227,0.10)` ring. This is the only "shadow" the brand uses.
- **No press / `:active` state** is defined. Don't invent one.

### Borders, shadows, radii
- **Hairlines `rgba(15,15,20,0.08)`** for card grids and section dividers.
- **Stronger hairline `rgba(15,15,20,0.26)`** for ghost-button borders, input borders, source-tag borders.
- **No drop shadows.** Anywhere. Cards are flat, bordered shapes on paper.
- **Radii:**
  - Buttons: `999px` (pill)
  - Inputs, source tags, success banner: `4px`
  - Cards: `0`
  - Brand dot, hero eyebrow dot: `50%`

### Transparency & blur
- **Sticky nav** uses `rgba(248,248,247,0.85)` + `backdrop-filter: blur(20px) saturate(1.4)`. The only place blur is used.
- The threshold dashed line in the hero chart is `stroke #1B44E3` at `opacity 0.45` — a "ghosted" cobalt.
- Inverted-section text uses `rgba(248,248,247, 0.42 / 0.28 / 0.10)` for body / muted / hairline tiers.

### Imagery vibe
- **No photography is used.** If photography is added in future, it should be muted, slightly cool, possibly desaturated — not warm or punchy.
- **The hero illustration** is a line chart drawn entirely in SVG. Uses ink-muted grey for "before threshold" and cobalt for "after threshold". This is the visual metaphor the brand sells.

### Layout rules
- **Sticky nav** at the very top, 64px tall, full-width hairline border below.
- **Section eyebrows pinned to the top-left** of each section.
- **Footer** is a single 28px-padded row: brand wordmark on the left, mono copyright on the right.
- **No fixed-position elements** other than the nav and the grain overlay.

### Accessibility-relevant defaults
- `scroll-behavior: smooth`
- `-webkit-font-smoothing: antialiased`
- `overflow-x: hidden` on the body — relied on by the chart layout.
- ARIA labels on the nav (`aria-label="Principal"`), hero region, and each section.

---

## Iconography

### What's actually used
The site contains **no icon system**. Specifically:
- **No icon font, no SVG sprite, no `<svg>` icon library.**
- **No emoji.**
- **No Unicode symbols** acting as icons (no ★, ▶, ✦).
- The only graphical glyphs are:
  1. **The wordmark mark** — a 30×1.5px ink line + a 7×7px cobalt dot, side by side. SVG-equivalent saved as `assets/liminar-mark.svg` and `assets/favicon.svg`.
  2. **The pulsing eyebrow dot** — same cobalt dot, 8×8px, in `.h-eyebrow-dot`.
  3. **The arrow `→`** — typed Unicode RIGHTWARDS ARROW (U+2192), used in CTA labels. This is the only "icon" that travels with text.
  4. **The hero chart** — bespoke inline SVG, not an icon. Saved as `assets/hero-chart.svg`.

### Recommendation for future work
Liminar's voice is "the page feels printed". If you must add icons (e.g. for a future dashboard surface), use **[Lucide](https://lucide.dev/)** at `1.5` stroke width — its hairline-precise feel matches the brand's editorial restraint better than Heroicons or Phosphor. Stay monochrome (use `currentColor`); never tint icons cobalt unless they replace a CTA arrow.

> ⚠️ **Substitution flag:** No native icon system exists in the source. Lucide is a recommendation, not a brand-sanctioned choice. If Liminar has an internal preference, please share it and we'll swap.

### Logo usage
- The wordmark is the brand-name "Liminar" set in **Fraunces 500, 1.125rem, letter-spacing -0.01em**, paired with the line+dot mark to its left.
- The mark alone (line + pulsing dot) is the favicon and works at any size from 16px upward.
- **Clear space** ≥ the height of the brand-name cap-height around the wordmark.
- The mark must always be **ink line + cobalt dot**. Never invert the colours.
- On dark backgrounds: ink line becomes paper (`#F8F8F7`), dot stays cobalt.

---

## Type substitutions / open questions

- **Fonts:** Liminar loads Fraunces, Inter, and JetBrains Mono **directly from Google Fonts** in production. We have **not bundled local TTF/WOFF files** because the source doesn't ship any — `fonts/` is intentionally empty. If you have licensed local copies, drop them in `fonts/` and update `colors_and_type.css` to `@font-face` them.
- **Visual identity beyond the landing page** — logos in alternative formats (SVG outlined, dark variant, square avatar), product photography, decks, dashboard UI, social-media templates: **all missing.** This system is a strong floor but a thin ceiling.
- **Spanish localisation strings** beyond what appears on the landing page are absent. If you build new screens, follow the voice notes above and paste copy back here for review.
