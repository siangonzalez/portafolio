import Image from "next/image";
import Link from "next/link";
import { clients, logoWall, type BrandCase } from "@/data/brand-projects";

// Tarjeta de un caso de marca: portada, logo y resumen.
export function BrandCaseCard({ item }: { item: BrandCase }) {
  return (
    <Link
      href={`/marca/${item.slug}/`}
      className="group block overflow-hidden rounded-2xl border border-ice bg-white transition hover:-translate-y-0.5 hover:border-mid hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ice">
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-mid">{item.sector}</p>
        <h3 className="mt-1 font-display text-xl font-bold text-navy">{item.name}</h3>
        <p className="mt-2 text-sm text-deep/80">{item.summary}</p>
        <span className="mt-3 inline-block text-sm font-medium text-mid group-hover:underline">Ver el caso →</span>
      </div>
    </Link>
  );
}

// Muro de logos en el mismo formato.
export function LogoWall({ limit }: { limit?: number }) {
  const logos = limit ? logoWall.slice(0, limit) : logoWall;
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {logos.map((l) => (
        <li key={l.src} className="overflow-hidden rounded-xl border border-ice">
          <Image src={l.src} alt={l.alt} width={l.width} height={l.height} sizes="(min-width: 1024px) 20vw, 45vw" className="h-auto w-full" />
        </li>
      ))}
    </ul>
  );
}

// Franja de marcas e instituciones.
export function ClientStrip() {
  return (
    <div className="border-y border-white/10 bg-deep">
      <div className="mx-auto max-w-6xl px-5 py-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">He trabajado para</p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-lg text-white sm:text-xl">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
