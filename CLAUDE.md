# CLAUDE.md — liminar_app

## Qué es

Sitio web estático de **Liminar** + su **Design System** (`Liminar Design System/`:
tokens de color/tipografía, UI kits, exploraciones y previews). Pensado para
desplegarse en **Vercel** (`vercel.json`, `sitemap.xml`, `robots.txt`, `og.png`).

No es un proyecto Python: **no usa `uv`**.

## Estructura

```
index.html                 → página principal
vercel.json                → config de despliegue Vercel
sitemap.xml / robots.txt   → SEO
og.png                     → imagen Open Graph
Liminar Design System/
  colors_and_type.css      → tokens
  ui_kits/ explorations/ preview/  → componentes y muestras
  SKILL.md / README.md
```

## Cómo ejecutarlo (local)

Es HTML estático; basta servirlo:

```bash
# Opción simple con Python (solo para previsualizar):
python3 -m http.server 8000      # luego abrir http://localhost:8000

# o con la CLI de Vercel si se instala:
npx vercel dev
```

Despliegue: push al repo conectado a Vercel, o `npx vercel --prod`.

## Datos / secretos

No maneja bases de datos ni credenciales. El `.gitignore` incluye igualmente
los patrones de datos de la convención global por consistencia.
