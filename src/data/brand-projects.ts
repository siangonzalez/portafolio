// Identidad de marca y motion: casos, muro de logos y clientes.
// Todo sale de los archivos entregados que están en los discos de Sian.
// No agregar clientes, cifras ni resultados que no estén confirmados.
import sizes from "./image-sizes.json";

export type Img = { src: string; alt: string; width: number; height: number };

const SIZES: Record<string, number[]> = sizes;

// Arma una imagen con su tamaño real (sale de image-sizes.json).
export function img(src: string, alt: string): Img {
  const s = SIZES[src];
  if (!s) throw new Error(`Falta el tamaño de ${src}; corre el script de tamaños.`);
  return { src, alt, width: s[0], height: s[1] };
}

export type Clip = { src: string; poster: string; title: string; client: string };

export type BrandCase = {
  slug: string;
  name: string;
  sector: string;
  year?: string;
  summary: string;
  concept?: string;
  deliverables: string[];
  palette?: { name: string; hex: string }[];
  type?: string[];
  cover: Img;
  logo: Img;
  // Imagen grande del encabezado; si falta, se usa el logo.
  hero?: Img;
  gallery: Img[];
  // "wide" para páginas de manual horizontales, "tall" para piezas de redes.
  layout: "wide" | "tall";
  clip?: Clip;
  relatedWeb?: string;
};

const pages = (folder: string, nums: string[], label: string) =>
  nums.map((n) => img(`/marca/${folder}/manual-${n}.webp`, `${label}, página ${Number(n)} del manual de marca`));

export const brandCases: BrandCase[] = [
  {
    slug: "caoba-hotels",
    name: "Caoba Hotels",
    sector: "Hotelería · Experience the unusual",
    summary:
      "Identidad completa para una marca de hoteles con experiencias fuera de lo común: logo, manual de marca de 22 páginas, animaciones y piezas para web y redes.",
    concept:
      "Un monograma que es a la vez casa y refugio, con una tipografía fuerte y directa. El manual define cómo se usa en fotografía, en papelería y en formatos digitales.",
    deliverables: [
      "Logo con versiones positiva, negativa y en texturas",
      "Construcción en retícula y área de reserva",
      "Manual de marca de 22 páginas",
      "Colores, texturas y sistema tipográfico",
      "Retículas para formatos impresos y digitales",
      "Animación del encabezado web y piezas para redes",
    ],
    type: ["Montserrat", "Bebas Neue"],
    cover: img("/marca/caoba/manual-01.webp", "Portada del manual de marca de Caoba Hotels"),
    logo: img("/marca/logos/caoba-hotels.webp", "Logo de Caoba Hotels"),
    gallery: pages("caoba", ["02", "03", "04", "12", "16", "18", "21", "22"], "Caoba Hotels"),
    layout: "wide",
    clip: { src: "/motion/caoba.mp4", poster: "/motion/caoba.webp", title: "Encabezado animado para la web", client: "Caoba Hotels" },
  },
  {
    slug: "aqui-es-inmobiliaria",
    name: "Aquí es Inmobiliaria",
    sector: "Finca raíz",
    year: "2026",
    summary:
      "Logo, manual de uso y kit de archivos listo para imprimir y publicar: versiones vertical y horizontal, isotipo, favicons y fotos de perfil para redes.",
    concept:
      "El símbolo une el pin de ubicación de los mapas con la silueta de una casa: dice lo mismo que el nombre, «aquí es» el lugar que buscas.",
    deliverables: [
      "Logo vertical, horizontal e isotipo",
      "Manual de uso del logo de 10 páginas",
      "Variantes de color, tamaños mínimos y usos incorrectos",
      "Archivos en SVG, PNG y PDF",
      "Favicons y perfiles para redes",
      "Aplicaciones: letrero de arriendo, tarjeta y redes",
    ],
    palette: [
      { name: "Petróleo", hex: "#2A5C6B" },
      { name: "Coral", hex: "#E9946E" },
      { name: "Crema", hex: "#FBF2EE" },
    ],
    type: ["Lettering propio (logo)", "Jost"],
    cover: img("/marca/aquies/manual-01.webp", "Portada del manual de Aquí es Inmobiliaria"),
    logo: img("/marca/logos/aqui-es.webp", "Logo de Aquí es Inmobiliaria"),
    gallery: pages("aquies", ["02", "03", "05", "06", "07", "10"], "Aquí es Inmobiliaria"),
    layout: "wide",
  },
  {
    slug: "gecco",
    name: "GECCO",
    sector: "Firma de especialistas en ley de insolvencia",
    year: "2026",
    summary:
      "Sistema de marca para una firma legal: símbolo, manual con misión y valores, colores, tipografía y una guía de cómo habla la marca.",
    concept:
      "Manos que sostienen, marcas que confían: cuatro manos entrelazadas en los colores de la marca forman un círculo de apoyo.",
    deliverables: [
      "Símbolo y versiones del logotipo",
      "Manual de marca 2026",
      "Misión, visión y valores",
      "Área de protección",
      "Sistema cromático y tipográfico",
      "Tono de comunicación: lo que sí decimos y lo que no",
    ],
    type: ["Archivo"],
    cover: img("/marca/gecco/manual-01.webp", "Portada del manual de marca de GECCO"),
    logo: img("/marca/logos/gecco.webp", "Logo de GECCO"),
    gallery: pages("gecco", ["03", "05", "06", "09", "10", "13", "14"], "GECCO"),
    layout: "wide",
  },
  {
    slug: "sonrieme",
    name: "Sonrieme · Dra. María Paula R. Quiroz",
    sector: "Odontología integral",
    year: "2026",
    summary:
      "Logo animado y la parrilla de redes de los 10 años del consultorio: posts, carruseles e historias con una misma línea gráfica, además del sitio web.",
    concept:
      "Azul profundo y dorado para transmitir confianza y cuidado; la doctora al frente para que el paciente sepa quién lo atiende.",
    deliverables: [
      "Logo animado",
      "Línea gráfica de redes",
      "Parrilla del aniversario de 10 años: posts, carruseles e historias",
      "Historias interactivas: quiz, encuestas y preguntas",
      "Sitio web del consultorio",
    ],
    cover: img("/marca/sonrieme/P01.webp", "Pieza de anuncio de los 10 años de Sonrieme"),
    logo: img("/marca/logos/sonrieme.webp", "Logo de la Dra. María Paula R. Quiroz, odontología integral"),
    hero: img("/marca/sonrieme/S01.webp", "Historia «¡Cumplimos 10 años!» de Sonrieme"),
    gallery: ["P02", "P05", "P07", "P10", "P13", "S03", "S10"].map((p) =>
      img(`/marca/sonrieme/${p}.webp`, "Pieza de redes de Sonrieme"),
    ),
    layout: "tall",
    clip: { src: "/motion/sonrieme-logo.mp4", poster: "/motion/sonrieme-logo.webp", title: "Logo animado", client: "Sonrieme" },
    relatedWeb: "/web/sonrieme/",
  },
  {
    slug: "marco-barberias",
    name: "Marco Barberia's",
    sector: "Barbería de barrio · El Encanto, Bogotá",
    year: "2026",
    summary:
      "Línea gráfica, logo animado y la campaña de noviembre en redes: Movember, Semana del Hombre, bonos de regalo y Black Friday.",
    concept:
      "Negro, rojo y azul con la franja del poste de barbería como firma; tipografía con serifa e itálicas para un tono de ritual clásico.",
    deliverables: [
      "Logo animado",
      "Línea gráfica para redes",
      "Campaña de noviembre: posts, carruseles e historias",
      "Plantillas reutilizables, como «Cupos de hoy»",
      "Edición de fotos del equipo",
    ],
    cover: img("/marca/marco/2026-10-26-1.webp", "Pieza «Tu corte, con ritual incluido» de Marco Barberia's"),
    logo: img("/marca/logos/marco-barberias.webp", "Logo de Marco Barberia's"),
    hero: img("/marca/marco/2026-11-03-1.webp", "Pieza «Noviembre, el mes del caballero» de Marco Barberia's"),
    gallery: [
      "2026-10-28-5",
      "2026-10-30-7",
      "2026-11-04-5",
      "2026-11-06-1",
      "2026-11-11-7",
      "2026-11-17-1",
      "2026-11-21-1",
      "2026-11-27-1",
      "2026-11-30-1",
      "Plantillas-3",
    ].map((p) => img(`/marca/marco/${p}.webp`, "Pieza de redes de Marco Barberia's")),
    layout: "tall",
    clip: { src: "/motion/marco-logo.mp4", poster: "/motion/marco-logo.webp", title: "Logo animado", client: "Marco Barberia's" },
  },
];

// Otros manuales de marca, sin ficha propia.
export const moreManuals = [
  {
    name: "MiKiwi",
    note: "Logo, construcción, color y matriz de aplicación",
    pages: ["01", "02", "03", "04", "05"].map((n) => img(`/marca/mikiwi/manual-${n}.webp`, `Manual de marca de MiKiwi, página ${Number(n)}`)),
  },
  {
    name: "La Hora 13",
    note: "Manual de identidad: estructura del logo, tipografía, paleta y usos",
    pages: ["01", "03", "04", "05", "06"].map((n) => img(`/marca/lahora13/manual-${n}.webp`, `Manual de marca de La Hora 13, página ${Number(n)}`)),
  },
];

// Muro de logos: diseños, rediseños y ajustes de logo. No decir que todos son diseños desde cero.
const L = (file: string, name: string) => ({ name, ...img(`/marca/logos/${file}.webp`, `Logo de ${name}`) });
export const logoWall = [
  L("caoba-hotels", "Caoba Hotels"),
  L("aqui-es", "Aquí es Inmobiliaria"),
  L("gecco", "GECCO"),
  L("bella-sweet", "Bella Sweet"),
  L("ospo", "Osma Potes Abogados"),
  L("mikiwi", "MiKiwi"),
  L("geopodlitic", "Geopodlitic"),
  L("piel-de-oro", "Piel de Oro"),
  L("la-hora-13", "La Hora 13"),
  L("mad-dog-models", "Mad Dog Models"),
  L("cpaa", "CPAA"),
  L("lukoyents", "Luko Jent's"),
  L("tercer-cielo", "Tercer Cielo"),
  L("la-cuchara-encantada", "La Cuchara Encantada"),
  L("nomada", "Nómada Estudio"),
  L("seria-algo-asi", "Este podcast sería algo así"),
  L("kelisa", "Ke'lisa"),
  L("minera-correa-chavestan", "Correa Chavestan"),
  L("como-no-ser-un-imbecil", "Cómo no ser un imbécil"),
  L("cuarto-arte-zari", "Cuarto Arte Zari"),
  L("girlboss-icons", "GirlBoss Icons"),
  L("umzac", "UMZAC"),
  L("mi-tierra-digital", "Mi Tierra Digital"),
  L("flor-de-lis", "Flor de Lis"),
  L("innovaser", "Innovaser"),
  L("sociedad-minera-el-dorado", "Sociedad Minera El Dorado"),
  L("carolina-gaona", "Carolina Gaona"),
];

// Motion graphics para marcas.
export const motionClips: Clip[] = [
  { src: "/motion/natura.mp4", poster: "/motion/natura.webp", title: "Cortinilla", client: "Natura" },
  { src: "/motion/confecamaras.mp4", poster: "/motion/confecamaras.webp", title: "Video de programas 2022", client: "Confecámaras" },
  { src: "/motion/farmalisto.mp4", poster: "/motion/farmalisto.webp", title: "Animación de servicios", client: "Farmalisto" },
  { src: "/motion/equidem.mp4", poster: "/motion/equidem.webp", title: "Video animado explicativo", client: "Equidem" },
  { src: "/motion/caoba.mp4", poster: "/motion/caoba.webp", title: "Encabezado animado", client: "Caoba Hotels" },
  { src: "/motion/popply.mp4", poster: "/motion/popply.webp", title: "Intro de temporada", client: "Popply podcast" },
  { src: "/motion/marco-logo.mp4", poster: "/motion/marco-logo.webp", title: "Logo animado", client: "Marco Barberia's" },
  { src: "/motion/sonrieme-logo.mp4", poster: "/motion/sonrieme-logo.webp", title: "Logo animado", client: "Sonrieme" },
];

// Marcas e instituciones con las que he trabajado (directo o como parte de un equipo).
export const clients = [
  "Natura",
  "Farmalisto",
  "Confecámaras",
  "Embajada del Líbano",
  "Universidad Sergio Arboleda",
  "Canal Capital",
  "MinTIC · Talento Tech",
  "Zebra Group · Millonarios FC",
  "Universal Music",
];
