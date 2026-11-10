import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { Chip, Section } from "@/components/Section";
import { WebProjectCard } from "@/components/WebProjectCard";
import { courses, experience, profile, skillGroups, stats } from "@/data/profile";
import { otherSites, webProjects } from "@/data/web-projects";
import { getGalleryProjects } from "@/lib/portfolio-api";

export default async function Home() {
  const gallery = await getGalleryProjects();

  return (
    <>
      {/* Presentación */}
      <section className="bg-navy text-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 md:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{profile.location}</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl">{profile.name}</h1>
            <p className="mt-3 font-display text-xl italic text-muted sm:text-2xl">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-ice/85">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#web" className="rounded-full bg-mid px-5 py-2.5 font-medium text-white hover:bg-white hover:text-navy">
                Ver proyectos web
              </Link>
              <a href={`mailto:${profile.email}`} className="rounded-full border border-ice/40 px-5 py-2.5 font-medium hover:border-white hover:text-white">
                Escribirme
              </a>
              <a href={profile.github} className="rounded-full border border-ice/40 px-5 py-2.5 font-medium hover:border-white hover:text-white">
                GitHub ↗
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
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 border-t border-white/10 px-5 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white">{s.value}</dd>
              <dd className="text-sm text-ice/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Proyectos web */}
      <Section
        id="web"
        eyebrow="Diseño y desarrollo web"
        title="Sitios y aplicaciones en línea"
        intro="Cada proyecto tiene su ficha: qué hice, con qué tecnologías, qué funciones tiene, cómo cuidé el rendimiento y el SEO, y el enlace al sitio y al código."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((p) => (
            <WebProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <h3 className="mt-12 font-display text-xl font-bold text-navy">Otros sitios publicados</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {otherSites.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener" className="block rounded-lg border border-ice p-4 hover:border-mid">
                <span className="font-medium text-navy">{s.name} ↗</span>
                <span className="block text-sm text-deep/70">{s.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Galería audiovisual */}
      <Section
        id="trabajos"
        dark
        eyebrow="Portafolio"
        title="Fotografía, video, marca y redes"
        intro="Toca un trabajo para verlo completo. Esta galería se carga desde la API del portafolio de mi estudio."
      >
        <Gallery projects={gallery} />
        <a href={profile.behance} className="mt-8 inline-block text-sm text-muted underline hover:text-white">
          Más trabajos en Behance ↗
        </a>
      </Section>

      {/* Experiencia */}
      <Section id="experiencia" eyebrow="Trayectoria" title="Experiencia">
        <ol className="space-y-8 border-l-2 border-ice pl-6">
          {experience.map((job) => (
            <li key={job.title + job.period} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-mid" aria-hidden />
              <p className="text-sm font-medium text-mid">{job.period}</p>
              <h3 className="font-display text-xl font-bold text-navy">{job.title}</h3>
              <p className="text-sm text-deep/70">{job.org}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-deep/85">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Habilidades y formación */}
      <Section id="habilidades" eyebrow="Herramientas" title="Habilidades y formación">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="font-medium text-navy">{g.title}</h3>
              {g.learning && <p className="text-xs text-deep/70">Aprendiendo ahora; este sitio es mi primer proyecto con ellas.</p>}
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <li key={i}>
                    <Chip tone={g.learning ? "learn" : "light"}>{i}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-medium text-navy">Educación</h3>
            <p className="mt-2"><b>Ingeniero de Sonido</b> — Universidad de San Buenaventura, Bogotá (2017). Matrícula profesional COPNIA.</p>
            <p className="mt-1"><b>Especialización Tecnológica en Producción de Contenidos Animados para Videojuegos</b> — SENA (2012).</p>
            <p className="mt-3">
              <b>Inglés B2</b> (EF SET, octubre de 2026) ·{" "}
              <a className="text-mid underline" href={profile.englishCert}>ver certificado</a>
            </p>
          </div>
          <div>
            <h3 className="font-medium text-navy">Cursos recientes</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {courses.map((c) => (
                <li key={c.name}>
                  {c.name} — {c.org}, {c.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contacto */}
      <Section id="contacto" dark eyebrow="Contacto" title="Hablemos." intro="Disponible para proyectos y cargos, en Bogotá o remoto.">
        <ul className="flex flex-wrap gap-3">
          <li><a className="rounded-full bg-mid px-5 py-2.5 font-medium text-white hover:bg-white hover:text-navy" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.whatsapp}>WhatsApp {profile.phone}</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.linkedin}>LinkedIn ↗</a></li>
          <li><a className="rounded-full border border-ice/40 px-5 py-2.5 hover:text-white" href={profile.github}>GitHub ↗</a></li>
        </ul>
      </Section>
    </>
  );
}
