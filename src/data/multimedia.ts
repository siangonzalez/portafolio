// Contenido de la página /audiovisual: perfil de productor multimedia
// (diseño de piezas audiovisuales, edición de video, motion y diseño gráfico).
// Todo sale de la hoja de vida base de Sian; no agregar cargos ni datos nuevos aquí.

export const multimediaProfile = {
  role: "Productor multimedia · Diseño audiovisual y edición de video",
  summary:
    "Diseño piezas audiovisuales, edito video y armo líneas gráficas para marcas, instituciones y medios. Trabajé con Canal Capital, con las cuentas de Universal Music y en productoras de cine y publicidad, y fui casi tres años Productor Gráfico en la Universidad Sergio Arboleda. Desde mi estudio conceptualizo cada campaña, presento la propuesta al cliente y la produzco hasta la entrega.",
};

export const multimediaStats = [
  { value: "10+", label: "años en producción audiovisual" },
  { value: "3", label: "años editando para Canal Capital" },
  { value: "5", label: "países en las redes de Universal Music" },
];

// Orden de la galería en esta página: primero video, motion y diseño.
export const CATEGORY_PRIORITY = [
  "Video",
  "Motion y animación",
  "Identidad de marca",
  "Piezas para redes",
  "Eventos",
  "Fotografía",
];

export const featuredCase = {
  client: "Zebra Group",
  title: "Llegada de Juan Cuadrado a Millonarios FC",
  youtube: "bopkiFga5Pk",
  story: [
    "El proyecto llegó con afán y el guion que tenía el cliente no comunicaba bien.",
    "Propuse una entrevista corta al jugador para llegar a su sentimiento y al de los hinchas, y la cubrimos con B-roll.",
    "Rodaje en 3 jornadas, edición con su voz en off y dos entregas: una versión de 1 minuto para medios y otra de 30 a 60 segundos para redes.",
  ],
};

export const process = [
  { step: "Concepto", text: "Entiendo la estrategia del cliente y defino la idea y la línea gráfica de la campaña." },
  { step: "Propuesta", text: "Presento las piezas al cliente, recojo su retroalimentación y ajusto hasta la aprobación." },
  { step: "Producción", text: "Diseño, rodaje con equipo propio, animación y generación con IA cuando suma." },
  { step: "Edición y entrega", text: "Edición, color, sonido y versiones para cada formato: medios, redes, web e impresión." },
];

export type MediaJob = { period: string; title: string; org: string; text: string };

export const mediaExperience: MediaJob[] = [
  {
    period: "2011 – hoy",
    title: "Fundador y director",
    org: "Nómada Estudio Digital",
    text: "Campañas, líneas gráficas, video y motion graphics para clientes institucionales, legales, diplomáticos, deportivos y de salud, de la propuesta a la entrega.",
  },
  {
    period: "Jul 2025 – sep 2026",
    title: "Jefe de Marketing Digital",
    org: "PROAE S.A.S. — tres instituciones educativas",
    text: "Lideré la Unidad de Diseño y Comunicaciones: piezas gráficas, digitales y audiovisuales para campañas de captación.",
  },
  {
    period: "Feb 2025 – jun 2026",
    title: "Líder y Gestor de Comunicaciones",
    org: "Talento Tech de MinTIC, Región 7",
    text: "Piezas gráficas y audiovisuales, guiones, entrevistas, minidocumentales y cubrimiento de eventos con foto y video.",
  },
  {
    period: "Dic 2025 – ene 2026",
    title: "Community Manager",
    org: "Bluecell — cuentas de Universal Music",
    text: "Programación de uDiscover Éxitos, parrillas para el equipo de diseño y creación de piezas.",
  },
  {
    period: "2021 – 2024",
    title: "Editor de podcast y contenidos sonoros",
    org: "Canal Capital — franja Mesa Capital",
    text: "Grabación, edición, mezcla y postproducción de más de 8 programas del canal.",
  },
  {
    period: "Dic 2020 – sep 2023",
    title: "Productor Gráfico",
    org: "Universidad Sergio Arboleda",
    text: "Animé, ilustré, diagramé y postproduje material audiovisual educativo; piezas gráficas de Misión TIC 2021 y 2022.",
  },
  {
    period: "2016 – 2019",
    title: "Ingeniero de Sonido",
    org: "Gualá Films",
    text: "Diseño sonoro, locuciones y postproducción para cine, comerciales de TV y contenido digital de marcas.",
  },
];

export const multimediaTools = [
  { title: "Diseño y postproducción", items: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Lightroom", "Audition", "Canva", "CapCut", "iZotope"] },
  { title: "Producción", items: ["Dirección de fotografía", "Rodaje", "Edición", "Color", "Motion graphics", "Diseño sonoro", "Locución"] },
  { title: "IA aplicada", items: ["Adobe Firefly", "Relleno generativo", "Higgsfield", "ElevenLabs", "ChatGPT", "Claude"] },
  { title: "Equipo propio", items: ["Sony A6400", "Lentes", "Micrófonos Rode", "Estabilizadores", "Flashes", "Luces LED"] },
];
