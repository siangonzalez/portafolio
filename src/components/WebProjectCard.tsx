import Link from "next/link";
import type { WebProject } from "@/data/web-projects";
import { Chip } from "./Section";

export function WebProjectCard({ project }: { project: WebProject }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-ice bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[3/2] overflow-hidden bg-deep">
        {project.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element -- captura externa ya optimizada
          <img
            src={project.screenshot}
            alt={`Captura del sitio ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center font-display text-2xl text-ice">
            {project.name}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-mid">{project.kind}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-navy">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-deep/80">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {project.stack.slice(0, 4).map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>
        <Link
          href={`/web/${project.slug}/`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-mid hover:text-navy"
        >
          Ver ficha del proyecto <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
