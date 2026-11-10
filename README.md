# Portafolio · Sian González

Mi portafolio personal: diseño y desarrollo web, UX/UI y producción audiovisual.
**En vivo:** [sian-gonzalez.netlify.app](https://sian-gonzalez.netlify.app)

## Tecnologías

- **Next.js (App Router) + React + TypeScript**
- **Tailwind CSS v4** con la paleta de Nómada Estudio
- **Exportación estática** (`output: "export"`) publicada en **Netlify**
- **Cloudinary** para imágenes y video, con un loader propio para `next/image`

## Cómo está hecho

- `src/data/web-projects.ts`: fichas tipadas de cada proyecto web (rol, stack, funcionalidades, rendimiento/SEO, análisis UX, enlaces).
- `src/app/web/[slug]/page.tsx`: una página estática por proyecto con `generateStaticParams` y metadatos propios.
- `src/lib/portfolio-api.ts`: consume en el build la API del portafolio de Nómada Estudio y normaliza los datos; si la API no responde usa una muestra local.
- `src/components/Gallery.tsx`: componente de cliente con filtros por categoría y un visor accesible con `<dialog>`.
- `src/app/sitemap.ts` y `robots.ts`: SEO técnico generado por Next.js, más datos estructurados (JSON-LD) de tipo Person.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # genera la carpeta out/
```

La galería se actualiza con cada build. Para refrescarla sin tocar código, usa un *build hook* de Netlify.
