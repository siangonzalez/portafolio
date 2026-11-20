import type { Metadata } from "next";
import Image from "next/image";
import { BrandCaseCard, ClientStrip, LogoWall } from "@/components/BrandBlocks";
import { MotionClip } from "@/components/MotionClip";
import { Section } from "@/components/Section";
import { brandCases, logoWall, moreManuals, motionClips } from "@/data/brand-projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Identidad de marca y motion",
  description:
    "Logos, manuales de marca, líneas gráficas para redes y motion graphics de Sian González: Caoba Hotels, Aquí es Inmobiliaria, GECCO, Sonrieme, Marco Barberia's y más de 25 marcas.",
  alternates: { canonical: "/marca/" },
  openGraph: { title: "Sian González — Identidad de marca y motion", images: ["/marca/caoba/manual-01.webp"] },
};

export default function MarcaPage() {
  return (
    <>
      <section className="bg-navy text-ice">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Diseño de marca</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold text-white sm:text-6xl">
            Marcas que se ven bien y funcionan en todas partes.
          </h1>
          <p className="mt-5 max-w-2xl text-ice/85">
            Diseño el logo, escribo el manual y después lo llevo a la web, a las redes y al video. Como también programo y
            animo, la marca no se queda en un PDF: la pongo a funcionar.
          </p>
        </div>
      </section>
      <ClientStrip />

      <Section id="casos" eyebrow="Casos" title="Identidades completas" intro="Del concepto al kit de archivos que usa el cliente todos los días.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandCases.map((c) => (
            <BrandCaseCard key={c.slug} item={c} />
          ))}
        </div>
      </Section>

      <Section id="motion" dark eyebrow="Motion graphics" title="Marcas en movimiento" intro="Cortinillas, videos animados y logos animados para marcas e instituciones.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {motionClips.map((c) => (
            <MotionClip key={c.src} clip={c} dark />
          ))}
        </div>
      </Section>

      <Section id="logos" eyebrow="Logos" title="Marcas con las que he trabajado" intro={`${logoWall.length} marcas: diseños desde cero, rediseños y ajustes de logos existentes, para restaurantes, firmas legales, salud, minería, podcasts, moda y emprendimientos.`}>
        <LogoWall />
      </Section>

      <Section id="manuales" eyebrow="Más manuales" title="Otros manuales de marca">
        <div className="space-y-12">
          {moreManuals.map((m) => (
            <div key={m.name}>
              <h3 className="font-display text-xl font-bold text-navy">{m.name}</h3>
              <p className="text-sm text-deep/70">{m.note}</p>
              <ul className="mt-4 flex snap-x gap-4 overflow-x-auto pb-3">
                {m.pages.map((p) => (
                  <li key={p.src} className="w-72 shrink-0 snap-start sm:w-96">
                    <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="384px" className="h-auto max-h-96 w-full rounded-lg border border-ice object-contain" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href={profile.behance} className="mt-10 inline-block text-sm text-mid underline">
          Más trabajos en Behance ↗
        </a>
      </Section>
    </>
  );
}
