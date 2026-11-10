// Consume la API pública del portafolio de Nómada Estudio en el build.
// Si la API no responde (por ejemplo, en desarrollo sin red), se usa una
// muestra local para que el sitio siga funcionando.
import sample from "@/data/portfolio-sample.json";

const API_URL = "https://www.nomadaestudio.digital/api/portfolio";

export type MediaItem = {
  type: "image" | "video";
  publicId: string;
  width: number;
  height: number;
};

export type GalleryProject = {
  id: string;
  name: string;
  client: string;
  sector: string;
  url: string;
  description: string;
  categories: string[];
  youtube: string[];
  cover: string;
  coverIsVideo: boolean;
  media: MediaItem[];
  featured: boolean;
};

// Forma de cada proyecto tal como llega de la API.
type ApiProject = {
  id: string;
  name: string;
  client?: string;
  sector?: string;
  url?: string;
  description?: string;
  categories?: string[];
  youtube?: string[];
  cover?: string;
  featured?: boolean;
  highlight?: boolean;
  media?: { type: string; publicId: string; width: number; height: number }[];
};

// Ajusta nombres de categorías para que coincidan con los filtros del sitio.
const CATEGORY_LABELS: Record<string, string> = {
  "Contenido audiovisual": "Video",
  Branding: "Identidad de marca",
};

function normalize(p: ApiProject): GalleryProject {
  const media: MediaItem[] = (p.media ?? []).map((m) => ({
    type: m.type === "video" ? "video" : "image",
    publicId: m.publicId,
    width: m.width,
    height: m.height,
  }));
  const cover = p.cover ?? media[0]?.publicId ?? "";
  return {
    id: p.id,
    name: p.name.trim(),
    client: p.client ?? "",
    sector: p.sector ?? "",
    url: p.url ?? "",
    description: p.description ?? "",
    categories: (p.categories ?? []).map((c) => CATEGORY_LABELS[c] ?? c),
    youtube: p.youtube ?? [],
    cover,
    coverIsVideo: media.find((m) => m.publicId === cover)?.type === "video",
    media,
    featured: Boolean(p.featured || p.highlight),
  };
}

export async function getGalleryProjects(): Promise<GalleryProject[]> {
  try {
    const res = await fetch(API_URL, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { projects: ApiProject[] };
    return data.projects.map(normalize);
  } catch (error) {
    console.warn(`[portafolio] API no disponible (${String(error)}); uso la muestra local.`);
    return (sample as { projects: ApiProject[] }).projects.map(normalize);
  }
}
