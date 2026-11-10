type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  children: React.ReactNode;
};

// Bloque de sección reutilizable: etiqueta, título, introducción y contenido.
export function Section({ id, eyebrow, title, intro, dark = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 ${dark ? "bg-navy text-ice" : "bg-white text-deep"}`}
      aria-labelledby={id ? `${id}-titulo` : undefined}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className={`text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-muted" : "text-mid"}`}>
          {eyebrow}
        </p>
        <h2
          id={id ? `${id}-titulo` : undefined}
          className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-navy"}`}
        >
          {title}
        </h2>
        {intro && <p className={`mt-3 max-w-2xl ${dark ? "text-ice/80" : "text-deep/80"}`}>{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Chip({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" | "learn" }) {
  const styles = {
    light: "bg-ice text-deep",
    dark: "bg-white/10 text-ice",
    learn: "border border-dashed border-mid bg-white text-mid",
  }[tone];
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles}`}>{children}</span>;
}
