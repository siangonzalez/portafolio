import type { Metadata, Viewport } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/700-italic.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sian González — Diseño y desarrollo web",
    template: "%s · Sian González",
  },
  description:
    "Portafolio de Sian González: diseño y desarrollo de sitios y aplicaciones web, UX/UI, producción audiovisual y contenido digital. Bogotá, Colombia.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Sian González",
    images: ["/img/sian.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0f1e3a" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sian González Correa",
  jobTitle: "Diseñador y desarrollador web",
  address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  sameAs: [profile.linkedin, profile.github, profile.behance],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
