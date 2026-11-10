import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-ice">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Sian González Correa · Bogotá, Colombia</p>
        <p>
          Hecho con Next.js y TypeScript ·{" "}
          <a className="underline hover:text-white" href={`${profile.github}/portafolio`}>
            ver código
          </a>
        </p>
      </div>
    </footer>
  );
}
