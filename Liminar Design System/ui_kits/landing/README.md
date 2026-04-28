# Liminar — Landing UI Kit

A pixel-faithful React/JSX recreation of the Liminar marketing site. The only product surface that exists.

## Files

- `index.html` — the live, scrollable page (open this)
- `App.jsx` — top-level composition
- `Nav.jsx`, `Hero.jsx`, `Dolores.jsx`, `Proceso.jsx`, `Casos.jsx`, `CTA.jsx`, `Footer.jsx` — section components
- `primitives.jsx` — shared `Btn`, `Eyebrow`, `SectionTag`, `BrandMark`, `SourceTag`
- `data.js` — copy strings (es-CL) and case-study content

## How to use

Drop section components into a page in any order. All composition rules — bordered grids, 112px section padding, italic-emphasis convention — are baked in.

```jsx
<Nav />
<Hero />
<Dolores />
<Proceso />
<Casos />
<CTA />
<Footer />
```

For a custom hero, copy `Hero.jsx` and replace `<ThresholdChart/>` + the `<h1>` content; keep the eyebrow + lede + CTA-pair structure.
