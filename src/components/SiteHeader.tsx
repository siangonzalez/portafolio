import Link from "next/link";

const links = [
  { href: "/#web", label: "Web" },
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3"
      >
        <Link href="/" className="font-display text-lg font-bold text-white">
          Sian González
        </Link>
        <ul className="flex gap-4 text-sm text-ice sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className={l.label === "Experiencia" ? "hidden sm:block" : ""}>
              <Link href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
