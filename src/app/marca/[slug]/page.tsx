import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionClip } from "@/components/MotionClip";
import { Chip } from "@/components/Section";
import { brandCases } from "@/data/brand-projects";

// Una página estática por caso de marca, generada en el build.
export function generateStaticParams() {
  return brandCases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

function findCase(slug: string) {
  return brandCases.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/marca/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = findCase(slug);
  if (!item) return {};
  return {
    title: `${item.name} — identidad de marca`,
    description: item.summary,
    alternates: { canonical: `/marca/${item.slug}/` },
    openGraph: { title: item.name, description: item.summary, images: [item.cover.src] },
  };
}

export default async function BrandCasePage({ params }: PageProps<"/marca/[slug]">) {
  const { slug } = await params;
  const item = findCase(slug);
  if (!item) notFound();

  const index = brandCases.indexOf(item);
  const next = brandCases[(index + 1) % brandCases.length];
  const tall = item.layout === "tall";

  return (
    <article>
      <header className="bg-navy text-ice">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_minmax(0,420px)]">
          <div>
            <Link href="/marca/" className="text-sm text-muted hover:text-white">
              ← Identidad de marca
            </Link>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {item.sector}
              {item.year ? ` · ${item.year}` : ""}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">{item.name}</h1>
            <p className="mt-4 max-w-2xl text-ice/85">{item.summary}</p>
            {item.relatedWeb && (
              <Link href={item.relatedWeb} className="mt-6 inline-block rounded-full bg-mid px-5 py-2.5 font-medium text-white hover:bg-white hover:text-navy">
                Ver también el sitio web →
              </Link>
            )}
          </div>
          <Image
            src={item.logo.src}
            alt={item.logo.alt}
            width={item.logo.width}
            height={item.logo.height}
            priority
            sizes="420px"
            className="w-full rounded-2xl"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        {item.concept && (
          <section className="md:col-span-1">
            <h2 className="font-display text-2xl font-bold text-navy">La idea</h2>
            <p className="mt-3 text-deep/85">{item.concept}</p>
          </section>
        )}
        <section>
          <h2 className="font-display text-2xl font-bold text-navy">Qué entregué</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-deep/85">
            {item.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        {(item.palette || item.type) && (
          <section>
            {item.palette && (
              <>
                <h2 className="font-display text-2xl font-bold text-navy">Color</h2>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {item.palette.map((c) => (
                    <li key={c.hex} className="text-center text-xs text-deep/80">
                      <span className="block h-14 w-20 rounded-lg border border-ice" style={{ background: c.hex }} />
                      <span className="mt-1 block font-medium text-navy">{c.name}</span>
                      {c.hex}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {item.type && (
              <>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy">Tipografía</h2>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {item.type.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        )}
      </div>

      {item.clip && (
        <div className="mx-auto max-w-3xl px-5 pb-14">
          <MotionClip clip={item.clip} />
        </div>
      )}

      <section className="bg-ice/60">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-2xl font-bold text-navy">{tall ? "Piezas" : "Del manual de marca"}</h2>
          <ul className={`mt-6 grid gap-5 ${tall ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2"}`}>
            {[item.cover, ...item.gallery].map((g) => (
              <li key={g.src}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes={tall ? "(min-width: 1024px) 25vw, 50vw" : "(min-width: 640px) 50vw, 100vw"}
                  className="h-auto w-full rounded-xl border border-ice bg-white shadow-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="Siguiente caso" className="mx-auto max-w-6xl px-5 py-12">
        <Link href={`/marca/${next.slug}/`} className="group inline-block">
          <span className="text-sm text-deep/70">Siguiente caso</span>
          <span className="block font-display text-2xl font-bold text-navy group-hover:text-mid">{next.name} →</span>
        </Link>
      </nav>
    </article>
  );
}
