"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GalleryProject } from "@/lib/portfolio-api";
import { imageSrc, videoPoster, videoSrc } from "@/lib/cloudinary-loader";

const ALL = "Todos";

// Galería con filtros por categoría y un visor accesible (elemento <dialog>).
export function Gallery({ projects }: { projects: GalleryProject[] }) {
  const [filter, setFilter] = useState<string>(ALL);
  const [open, setOpen] = useState<GalleryProject | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Categorías ordenadas por cantidad de proyectos.
  const categories = useMemo(() => {
    const count = new Map<string, number>();
    projects.forEach((p) => p.categories.forEach((c) => count.set(c, (count.get(c) ?? 0) + 1)));
    return [ALL, ...[...count.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c)];
  }, [projects]);

  const visible = filter === ALL ? projects : projects.filter((p) => p.categories.includes(filter));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <div>
      <div role="toolbar" aria-label="Filtrar trabajos por categoría" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              filter === c ? "bg-mid text-white" : "bg-white/10 text-ice hover:bg-white/20"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-ice/70" aria-live="polite">
        {visible.length} {visible.length === 1 ? "trabajo" : "trabajos"}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpen(p)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-lg bg-deep text-left"
            >
              {p.coverIsVideo ? (
                // eslint-disable-next-line @next/next/no-img-element -- miniatura de video desde Cloudinary
                <img src={videoPoster(p.cover)} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-3 pt-10">
                {p.coverIsVideo && <span className="mb-1 block text-xs text-muted">▶ Video</span>}
                <span className="block font-medium text-white">{p.name}</span>
                <span className="block text-xs text-ice/70">{p.categories.slice(0, 2).join(" · ")}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialogRef.current && setOpen(null)}
        aria-labelledby="visor-titulo"
        className="m-auto max-h-[90vh] w-[min(960px,94vw)] overflow-y-auto rounded-xl bg-navy p-0 text-ice backdrop:bg-black/70"
      >
        {open && (
          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="visor-titulo" className="font-display text-2xl font-bold text-white">{open.name}</h3>
                <p className="text-sm text-muted">
                  {[open.client, open.sector].filter(Boolean).join(" · ")}
                </p>
              </div>
              <button type="button" onClick={() => setOpen(null)} className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20">
                Cerrar
              </button>
            </div>
            {open.description && <p className="mt-3 text-ice/85">{open.description}</p>}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {open.youtube.map((id) => (
                <iframe
                  key={id}
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={`Video de ${open.name}`}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-lg sm:col-span-2"
                />
              ))}
              {open.media.map((m) =>
                m.type === "video" ? (
                  <video
                    key={m.publicId}
                    src={videoSrc(m.publicId)}
                    poster={videoPoster(m.publicId, 1080)}
                    controls
                    preload="none"
                    playsInline
                    className="w-full rounded-lg bg-black"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element -- imagen grande desde Cloudinary
                  <img
                    key={m.publicId}
                    src={imageSrc(m.publicId)}
                    alt={`${open.name}, imagen del proyecto`}
                    width={m.width}
                    height={m.height}
                    loading="lazy"
                    className="h-auto w-full rounded-lg"
                  />
                ),
              )}
            </div>
            {open.url && (
              <a href={open.url} target="_blank" rel="noopener" className="mt-5 inline-block text-sm font-medium text-muted underline hover:text-white">
                Ver publicación original ↗
              </a>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
