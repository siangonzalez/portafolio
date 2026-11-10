import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Chip } from "@/components/Section";
import { webProjects } from "@/data/web-projects";

// Una página estática por proyecto, generada en el build.
export function generateStaticParams() {
  return webProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function findProject(slug: string) {
  return webProjects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/web/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/web/${project.slug}/` },
    openGraph: { title: project.name, description: project.summary, images: project.screenshot ? [project.screenshot] : undefined },
  };
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-deep/85">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function WebProjectPage({ params }: PageProps<"/web/[slug]">) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Ver sitio en vivo" },
    project.demoUrl && { href: project.demoUrl, label: "Probar el demo" },
    project.repoUrl && { href: project.repoUrl, label: "Ver código en GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <article>
      <header className="bg-navy text-ice">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <Link href="/#web" className="text-sm text-muted hover:text-white">
            ← Todos los proyectos web
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {[project.kind, project.client, project.year].filter(Boolean).join(" · ")}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ice/85">{project.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tecnologías">
            {project.stack.map((t) => (
              <li key={t}>
                <Chip tone="dark">{t}</Chip>
              </li>
            ))}
          </ul>
          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className={`rounded-full px-5 py-2.5 font-medium ${
                    i === 0 ? "bg-mid text-white hover:bg-white hover:text-navy" : "border border-ice/40 hover:text-white"
                  }`}
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {project.screenshot && (
        <div className="bg-ice">
          <div className="mx-auto max-w-4xl px-5 py-8">
            {/* eslint-disable-next-line @next/next/no-img-element -- captura externa */}
            <img
              src={project.screenshot}
              alt={`Captura de la página principal de ${project.name}`}
              className="w-full rounded-xl border border-white shadow-lg"
            />
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-4xl gap-12 px-5 py-14">
        <Block title="Mi rol" items={project.role} />
        <Block title="Funcionalidades" items={project.features} />
        <Block title="Rendimiento, SEO y calidad" items={project.quality} />

        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Análisis UX</h2>
          <dl className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-ice p-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-mid">Usuario</dt>
              <dd className="mt-1">{project.ux.user}</dd>
            </div>
            <div className="rounded-lg bg-ice p-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-mid">Objetivo</dt>
              <dd className="mt-1">{project.ux.goal}</dd>
            </div>
          </dl>
          <h3 className="mt-6 font-medium text-navy">Flujo principal</h3>
          <ol className="mt-3 grid gap-3 sm:grid-cols-4">
            {project.ux.flow.map((step, i) => (
              <li key={step} className="rounded-lg border border-ice p-4">
                <span className="font-display text-2xl font-bold text-mid">{i + 1}</span>
                <p className="mt-1 text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {project.uxDoc && (
          <section>
            <h2 className="font-display text-2xl font-bold text-navy">Wireframes y decisiones UX</h2>
            <p className="mt-2 text-sm text-deep/70">{project.uxDoc.note}</p>
            <div className="mt-6 grid gap-8 md:grid-cols-[280px_1fr]">
              {project.uxDoc.images.map((img) => (
                <figure key={img.src}>
                  <div className="max-h-[640px] overflow-y-auto rounded-xl border border-ice bg-white shadow-sm" tabIndex={0} aria-label={`${img.caption}, desplázate para verlo completo`}>
                    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="h-auto w-full" />
                  </div>
                  <figcaption className="mt-2 text-xs text-deep/70">{img.caption} · desplázate para verlo completo</figcaption>
                </figure>
              ))}
              <div>
                <h3 className="font-medium text-navy">Decisiones de diseño</h3>
                <ol className="mt-3 space-y-3">
                  {project.uxDoc.decisions.map((d, i) => (
                    <li key={d} className="flex gap-3 rounded-lg bg-ice p-3 text-sm">
                      <span className="font-display text-lg font-bold text-mid">{i + 1}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
                {project.uxDoc.figmaUrl && (
                  <a
                    href={project.uxDoc.figmaUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-block rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-mid"
                  >
                    Ver el archivo en Figma ↗
                  </a>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
