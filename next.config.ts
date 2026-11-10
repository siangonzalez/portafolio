import type { NextConfig } from "next";

// Sitio 100 % estático: se genera en el build y se publica en Netlify.
// Las imágenes y videos viven en Cloudinary, así que usamos un loader propio
// en lugar del optimizador de imágenes de Next.js.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Tailwind CSS v4 se procesa con su loader para Turbopack.
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
  },
};

export default nextConfig;
