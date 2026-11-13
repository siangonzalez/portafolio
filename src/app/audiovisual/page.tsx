import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { Chip, Section } from "@/components/Section";
import { profile } from "@/data/profile";
import {
  CATEGORY_PRIORITY,
  featuredCase,
  mediaExperience,
  multimediaProfile,
  multimediaStats,
  multimediaTools,
  process,
} from "@/data/multimedia";
import { getGalleryProjects, type GalleryProject } from "@/lib/portfolio-api";

export const metadata: Metadata = {
  title: "Productor multimedia — video, motion y diseño",
  description:
    "Portafolio audiovisual de Sian González: diseño de piezas audiovisuales, edición de video, motion graphics, líneas gráficas y campañas digitales. Bogotá, Colombia · remoto.",
  alternates: { canonical: "/audiovisual/" },
  openGraph: { title: "Sian González — Productor multimedia", images: ["/img/sian.jpg"] },
};

// Prioridad de un proyecto según su mejor categoría (menor = primero).
function rank(p: GalleryProject): number {
  const positions = p.categories.map((c) => CATEGORY_PRIORITY.indexOf(c)).filter((i) => i >= 0);
  return positions.length ? Math.min(...positions) : CATEGORY_PRIORITY.length;
}

function sortForMultimedia(projects: GalleryProject[]): GalleryProject[] {
  return [...projects].sort((a, b) => rank(a) - rank(b) || Number(b.featured) - Number(a.featured));
}

export default async function AudiovisualPage() {
  const gallery = sortForMultimedia(await getGalleryProjects());

  return (
    <>
      {/* Presentación */}
      <section className="bg-navy text-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 md:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{profile.location}</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">{profile.name}</h1>
            <p className="mt-3 font-display text-xl italic text-muted sm:text-2xl">{multimediaProfile.role}</p>
            <p className="mt-6 max-w-2xl text-ice/85">{multimediaProfile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#trabajos" className="rounded-full bg-mid px-5 py-2.5 font-medium text-white hover:bg-white hover:text-navy">
                Ver trabajos
              </Link>
              <a href={`mailto:${profile.email}`} className="rounded-full border border-ice/40 px-5 py-2.5 font-medium hover:border-white hover:text-white">
                Escribirme
              </a>
              <a href={profile.behance} className="rounded-full border border-ice/40 px-5 py-2.5 font-medium hover:border-white hover:text-white">
                Behance ↗
              </a>
            </div>
          </div>
          <Image
            src="/img/sian.jpg"
            alt="Retrato de Sian González"
            width={480}
            height={481}
            priority
            className="mx-auto w-48 rounded-2xl border-4 border-deep object-cover shadow-xl md:w-full"
          />
        </div>
        <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-6 border-t border-white/10 px-5 py-8 sm:grid-cols-3">
          {multimediaStats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white">{s.value}</dd>
              <dd className="text-sm text-ice/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Galería: video, motion y diseño primero */}
      <Section
        id="trabajos"
        dark
        eyebrow="Portafolio"
        title="Video, motion, diseño y fotografía"
        intro="Toca un trabajo para verlo completo. Usa los filtros para ver solo video, motion o piezas gráficas."
      >
        <Gallery projects={gallery} />
        <a href={profile.behance} className="mt-8 inline-block text-sm text-muted underline hover:text-white">
          Más trabajos en Behance ↗
        </a>
      </Section>

      {/* Caso destacado */}
      <Section id="caso" eyebrow={`Caso · ${featuredCase.client}`} title={featuredCase.title}>
        <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${featuredCase.youtube}`}
            title={`Video: ${featuredCase.title}`}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full rounded-xl bg-navy shadow-lg"
          />
          <ol className="space-y-4">
            {featuredCase.story.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="font-display text-2xl font-bold text-mid">{i + 1}</span>
                <p className="text-deep/85">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Proceso */}
      <Section id="proceso" dark eyebrow="Cómo trabajo" title="De la idea a la pieza publicada">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.step} className="rounded-xl border border-white/10 bg-deep p-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Paso {i + 1}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">{p.step}</h3>
              <p className="mt-2 text-sm text-ice/80">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Experiencia */}
      <Section id="experiencia" eyebrow="Trayectoria" title="Medios, marcas e instituciones">
        <ol className="space-y-7 border-l-2 border-ice pl-6">
          {mediaExperience.map((job) => (
            <li key={job.title + job.period} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-mid" aria-hidden />
              <p className="text-sm font-medium text-mid">{job.period}</p>
              <h3 className="font-display text-xl font-bold text-navy">{job.title}</h3>
              <p className="text-sm text-deep/70">{job.org}</p>
              <p className="mt-1 text-deep/85">{job.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-deep/80">
          <b>Ingeniero de Sonido</b> (Universidad de San Buenaventura) con <b>Especialización Tecnológica en Producción de Contenidos Animados</b> (SENA).
        </p>
      </Section>

      {/* Herramientas */}
      <Section id="herramientas" eyebrow="Herramientas" title="Con qué trabajo">
        <div className="grid gap-8 sm:grid-cols-2">
          {multimediaTools.map((g) => (
            <div key={g.title}>
              <h3 className="font-medium text-navy">{g.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li key={i}>
                    <Chip>{i}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-deep/80">
          ¿Buscas diseño y desarrollo web?{" "}
          <Link href="/" className="font-medium text-mid underline">
            Ver mi portafolio web →
          </Link>
        </p>
      </Section>

      {/* Contacto */}
      <Section id="contacto" dark eyebrow="Contacto" title="Hablemos." intro="Disponible para proyectos y cargos, freelance o de planta, en Bogotá o remoto.">
        <ul className="flex flex-wrap gap-3">
          <li><a className="rounded-full bg-mid px-5 py-2.5 font-medium text-white hover:bg-white hover:text-navy" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.whatsapp}>WhatsApp {profile.phone}</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.linkedin}>LinkedIn ↗</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.behance}>Behance ↗</a></li>
        </ul>
      </Section>
    </>
  );
}
