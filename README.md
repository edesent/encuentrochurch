# Encuentro Church — Sitio Web

Sitio web bilingüe (español / inglés) de **Encuentro Church**, una iglesia
hispana bilingüe en el suroeste de Houston, TX. Construido en Next.js y alojado
en Vercel.

> **Pastor Rick:** para cambiar textos, horarios o enlaces, casi todo vive en un
> solo archivo: **`src/config/site.ts`**. Pídele a Claude o ChatGPT: _"cambia el
> horario del servicio"_ o _"actualiza el número de teléfono"_ y editará ese
> archivo por ti. Los cambios se publican solos en unos minutos.

---

## Dónde está cada cosa (edición rápida)

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre, teléfono, correo, dirección, horarios | `src/config/site.ts` |
| Enlaces (Donar, Test de Dones, Clase para Padres, Prospecto, WhatsApp) | `src/config/site.ts` → `links` |
| La historia del Pastor Rick y Maribel | `src/config/site.ts` → `story` |
| Misión, valores, ruta de discipulado | `src/config/site.ts` |
| El versículo destacado | `src/config/site.ts` → `scripture` |
| Fotos y el logo | carpeta `public/` y `public/images/` |
| El prospecto (páginas) | `public/images/prospecto-*.jpg` |

Las imágenes principales:

- `public/logo.png` — logo "El Encuentro"
- `public/images/hero-prayer.jpg` — foto principal (portada)
- `public/images/pastor-rick-maribel.jpg` — Pastor Rick y Maribel
- `public/images/congregation.jpg` — la congregación
- `public/images/prospecto-1.jpg` … `prospecto-8.jpg` — prospecto de plantación
- `public/icon.svg`, `favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — íconos del sitio

---

## Páginas

- **`/`** (Inicio) — `src/app/page.tsx`
- **`/home/espanol`** (En Español + prospecto) — `src/app/home/espanol/page.tsx`
- **`/contact-us`** (Conéctate) — `src/app/contact-us/page.tsx`

Las secciones de la portada son componentes en `src/components/`
(`Hero`, `Pillars`, `Story`, `ScriptureBanner`, `Visit`, `Resources`,
`Contact`, `Navbar`, `Footer`).

---

## Marca / diseño

- **Colores:** azul marino `#12345C`, verde `#6AA644`, crema `#F5F2EB`
  (definidos en `src/app/globals.css`).
- **Tipografías:** Archivo (títulos), Inter (texto), Caveat (frase manuscrita
  "Un lugar para todos").
- El formulario de contacto abre la aplicación de correo del visitante y envía
  el mensaje a `pastor@encuentrochurch.org` — no requiere ninguna configuración.

---

## Notas técnicas

- **Next.js 16** (App Router) + **React 19** + **Tailwind CSS v4**.
- ⚠️ Esta versión de Next.js tiene cambios importantes respecto a versiones
  anteriores. Antes de escribir código, lee la guía en
  `node_modules/next/dist/docs/`. Por ejemplo, en `next/image` la prop
  `priority` está obsoleta; usa `preload`.
- Ejecutar localmente: `npm run dev` → http://localhost:3000
- Compilar: `npm run build`
- Publicación: cada `push` a la rama `main` se despliega automáticamente en Vercel.
