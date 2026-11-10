export const profile = {
  name: "Sian González",
  role: "Diseñador y desarrollador web · UX/UI · Contenido digital",
  location: "Bogotá, Colombia · Remoto",
  email: "sian.gonzalez@gmail.com",
  phone: "+57 305 712 7258",
  whatsapp: "https://wa.me/573057127258",
  linkedin: "https://www.linkedin.com/in/siangonzalez",
  github: "https://github.com/siangonzalez",
  behance: "https://www.behance.net/siangonzalez",
  englishCert: "https://cert.efset.org/es/eaAW12",
  summary:
    "Diseño y desarrollo sitios y aplicaciones web de principio a fin: entiendo el requerimiento, defino el flujo del usuario, diseño la interfaz, la programo y la publico. Vengo de más de 10 años en producción audiovisual, diseño y marketing digital, así que cuido tanto el código como lo que la gente ve y siente al usarlo.",
};

export const stats = [
  { value: "10+", label: "años de experiencia" },
  { value: "8", label: "sitios y apps en línea" },
  { value: "3", label: "idiomas en un mismo sitio (con RTL)" },
  { value: "25+", label: "proyectos publicados" },
];

export type Job = { period: string; title: string; org: string; bullets: string[] };

export const experience: Job[] = [
  {
    period: "2011 – hoy",
    title: "Fundador y director",
    org: "Nómada Estudio Digital (antes ClownBox Productions S.A.S.)",
    bullets: [
      "Diseño, desarrollo y publicación de sitios web, landing pages y herramientas a la medida para clientes institucionales, legales, diplomáticos y de salud.",
      "Rendimiento y SEO técnico en todos los sitios entregados, con diseño adaptable a cualquier dispositivo.",
      "Producción de fotografía, video y motion graphics de principio a fin.",
      "Relación comercial completa: propuestas, cotizaciones, cronogramas y entregas.",
    ],
  },
  {
    period: "Jul 2025 – sep 2026",
    title: "Jefe de Marketing Digital y Web Master",
    org: "PROAE S.A.S. — CORPOUNE, ITEANDES y Colegio Empresarial de Boyacá",
    bullets: [
      "Construí los sitios de ITEANDES y del Colegio Empresarial de Boyacá, y la landing de CORPOUNE conectada a Google Sheets.",
      "Medición con GA4 y Meta Pixel, análisis en Looker Studio e informes mensuales con retorno de inversión.",
      "Administré el CRM en GoHighLevel: bases de datos, automatizaciones y campañas de email y WhatsApp.",
      "Automaticé solicitudes de diseño con Google Forms y Apps Script, y configuré un agente de ventas con IA.",
    ],
  },
  {
    period: "Feb 2025 – jun 2026",
    title: "Líder y Gestor de Comunicaciones",
    org: "Talento Tech de MinTIC, Región 7 — Unión Temporal Talento Tech",
    bullets: [
      "Planes de comunicación del proyecto de bootcamps de habilidades digitales, alineados con MinTIC.",
      "Piezas gráficas y audiovisuales adaptadas a web, móvil, redes e impresión.",
    ],
  },
  {
    period: "2021 – 2024",
    title: "Editor de podcast y contenidos sonoros",
    org: "Canal Capital — franja Mesa Capital",
    bullets: ["Grabación, edición, mezcla y postproducción de más de 8 programas de podcast."],
  },
  {
    period: "Dic 2020 – abr 2024",
    title: "Productor Gráfico → Coordinador de Comunicaciones",
    org: "Universidad Sergio Arboleda",
    bullets: [
      "Objetos digitales de aprendizaje para la plataforma de la Decanatura de Innovación y Desarrollo Digital.",
      "Misión TIC 2021–2022: conceptualización gráfica, piezas y certificados; espacio inmersivo en Mozilla Hubs.",
      "Promovido a dirigir la estrategia de comunicación de Bienestar Universitario.",
    ],
  },
  {
    period: "2012 – 2019",
    title: "Ingeniero y director de sonido",
    org: "Gualá Films, Okasa Studios y Papos Producciones",
    bullets: ["Diseño sonoro, locuciones y postproducción para cine, comerciales de TV y contenido digital."],
  },
];

export const skillGroups: { title: string; items: string[]; learning?: boolean }[] = [
  {
    title: "Desarrollo web",
    items: ["HTML5", "CSS3 responsivo", "JavaScript (ES6+)", "PHP", "WordPress + Elementor con código propio", "Firebase", "Google Apps Script", "Sitios multilingües y RTL"],
  },
  { title: "Publicación y versiones", items: ["Git y GitHub", "GitHub Actions", "GitHub Pages", "Netlify", "Cloudflare Workers", "Dominios y correo"] },
  { title: "Rendimiento, SEO y medición", items: ["SEO técnico", "Datos estructurados", "Open Graph", "Google Analytics 4", "Meta Pixel", "Looker Studio"] },
  { title: "Diseño", items: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "Lightroom", "Identidad de marca", "Motion graphics"] },
  { title: "IA aplicada", items: ["Claude Code", "Claude", "ChatGPT", "Gemini", "Higgsfield", "ElevenLabs", "Adobe Firefly"] },
  { title: "En formación activa", items: ["React", "Next.js", "TypeScript", "Figma"], learning: true },
];

export const courses = [
  { name: "Curso de Claude AI", org: "Platzi", year: "2026" },
  { name: "Reportes de Redes Sociales con Data Studio", org: "Platzi", year: "2026" },
  { name: "Comunicación Digital Profesional", org: "Platzi", year: "2026" },
  { name: "Taller de Creación de Contenido con IA", org: "Platzi", year: "2026" },
  { name: "Marketing Digital en Redes Sociales (48 h)", org: "MinTIC y U. Distrital", year: "2025" },
  { name: "Identidad corporativa: manual de marca", org: "Crehana", year: "2021" },
];
