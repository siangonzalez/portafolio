// Fichas de los proyectos web: rol, tecnologías, funcionalidades,
// rendimiento/SEO y enlaces. Todo lo que aparece aquí está en el código
// de cada repositorio o en el sitio publicado.

export type WebProject = {
  slug: string;
  name: string;
  client: string;
  year?: string;
  kind: string;
  summary: string;
  role: string[];
  stack: string[];
  features: string[];
  quality: string[]; // rendimiento, SEO, accesibilidad, seguridad
  ux: { user: string; goal: string; flow: string[] };
  // Documentación UX hecha en Figma (opcional).
  uxDoc?: {
    note: string;
    figmaUrl?: string;
    images: { src: string; alt: string; caption: string; width: number; height: number }[];
    decisions: string[];
  };
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  screenshot?: string;
};

const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`;

export const webProjects: WebProject[] = [
  {
    slug: "embajada-libano",
    name: "Embajada del Líbano en Colombia",
    client: "Embajada del Líbano",
    year: "2026",
    kind: "Sitio institucional trilingüe + panel administrativo",
    summary:
      "Sitio en español, inglés y árabe con lectura de derecha a izquierda, servicios consulares y una sección de novedades que la embajada actualiza sola desde un panel propio.",
    role: [
      "Diseño de la interfaz, arquitectura de contenidos y curaduría visual",
      "Desarrollo completo del front-end y del panel administrativo",
      "Migración del dominio a .co y del correo institucional a Microsoft 365",
      "Despliegue automático y mantenimiento",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "JSON", "GitHub Actions", "GoDaddy (FTP)"],
    features: [
      "Selector de idioma ES / EN / AR con soporte RTL para árabe",
      "Panel administrativo propio para publicar novedades con portada, adjuntos, fijado y fecha de vencimiento, en los tres idiomas",
      "API JSON que entrega las novedades publicadas y vigentes a la página principal",
      "Módulos de servicios consulares, perfil de la embajadora y festivos",
      "Formatos consulares diligenciables en web (nacimiento, matrimonio, divorcio y defunción)",
    ],
    quality: [
      "Seguridad del panel: sesiones, roles de administrador, protección CSRF, bloqueo por intentos fallidos y política de contraseñas",
      "Sanitización del HTML y validación de URLs de imágenes y videos antes de publicarlos",
      "Despliegue continuo: cada cambio en la rama main se publica solo con GitHub Actions",
      "Diseño adaptable con puntos de quiebre para móvil y tableta, carga diferida de imágenes y metadescripción",
    ],
    ux: {
      user: "Ciudadanos libaneses en Colombia y colombianos que necesitan un trámite consular",
      goal: "Encontrar rápido el trámite, sus requisitos y el contacto, en su idioma",
      flow: ["Elige idioma", "Revisa novedades", "Entra a Servicios Consulares", "Descarga el formato o escribe al consulado"],
    },
    liveUrl: "https://embajadalibanocolombia.co",
    repoUrl: "https://github.com/siangonzalez/embajada-libano",
    screenshot: shot("https://embajadalibanocolombia.co"),
  },
  {
    slug: "bandeja-audiencias",
    name: "Bandeja de audiencias de conciliación",
    client: "Despacho de conciliación (marca blanca)",
    year: "2026",
    kind: "Aplicación interna",
    summary:
      "Herramienta que toma las audiencias del sistema de casos del centro de conciliación, envía recordatorios por WhatsApp y correo, crea las reuniones de Teams y reúne las respuestas en una bandeja compartida.",
    role: ["Levantamiento del proceso con el conciliador", "Diseño de la interfaz y del flujo", "Desarrollo e integraciones"],
    stack: ["Python", "Cloudflare Workers", "Cloudflare D1", "WhatsApp Cloud API", "Outlook y Teams", "GitHub Actions"],
    features: [
      "Lectura de las audiencias programadas a partir de SIMASC",
      "Recordatorios automáticos por WhatsApp y correo",
      "Creación de las reuniones de Teams",
      "Bandeja compartida con el estado de cada audiencia y las respuestas de las partes",
    ],
    quality: ["Tareas programadas con GitHub Actions", "Demo pública con datos ficticios"],
    ux: {
      user: "El conciliador y su equipo",
      goal: "Saber de un vistazo qué audiencias hay hoy y quién confirmó",
      flow: ["Abre la bandeja del día", "Ve el estado de cada audiencia", "Revisa respuestas", "Reenvía recordatorio si hace falta"],
    },
    demoUrl: "https://www.nomadaestudio.digital/demos/bandeja-audiencias/",
  },
  {
    slug: "osma-potes-abogados",
    name: "OSPO – Osma Potes Abogados",
    client: "Firma de abogados",
    kind: "Sitio corporativo",
    summary: "Rediseño y desarrollo del sitio corporativo de la firma, con dirección de arte alineada a su marca.",
    role: ["Dirección de arte y diseño de la interfaz", "Desarrollo de las 5 páginas", "Publicación y mantenimiento"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Cinco páginas: inicio, nosotros, servicios, equipo y contacto",
      "Contacto directo por WhatsApp",
      "Animaciones suaves en la navegación",
    ],
    quality: [
      "Diseño adaptable con varios puntos de quiebre",
      "Respeta la preferencia de movimiento reducido del usuario (prefers-reduced-motion)",
      "Metadescripción y estructura de títulos para SEO",
    ],
    ux: {
      user: "Personas y empresas con un conflicto jurídico",
      goal: "Entender qué tipo de conflicto resuelve la firma y contactarla",
      flow: ["Lee la propuesta de valor", "Explora servicios", "Conoce al equipo", "Escribe por WhatsApp"],
    },
    liveUrl: "https://osmapotes.com.co",
    repoUrl: "https://github.com/siangonzalez/Osmapotes.com.co",
    screenshot: shot("https://osmapotes.com.co"),
  },
  {
    slug: "sonrieme",
    name: "Sonrieme – Dra. María Paula R. Quiroz",
    client: "Consultorio odontológico",
    year: "2026",
    kind: "Sitio de servicios",
    summary:
      "Sitio del consultorio en Chapinero, pensado para generar confianza con casos reales y llevar al paciente a pedir su cita.",
    role: ["Diseño y desarrollo del sitio", "Fotografía y video propios"],
    stack: ["HTML5", "CSS3", "JavaScript", "Figma (documentación UX)"],
    features: [
      "Galería de casos clínicos de antes y después",
      "Video testimonio del consultorio",
      "Llamados a la acción por WhatsApp en todo el recorrido",
      "Dominio propio",
    ],
    quality: [
      "Datos estructurados (JSON-LD) para buscadores",
      "Etiquetas Open Graph para compartir en redes",
      "Carga diferida de imágenes y diseño adaptable a móvil",
    ],
    ux: {
      user: "Pacientes que buscan un odontólogo de confianza en Bogotá",
      goal: "Ver resultados reales y agendar sin fricción",
      flow: ["Conoce los servicios", "Ve casos de antes y después", "Lee testimonios", "Agenda por WhatsApp"],
    },
    uxDoc: {
      note: "Documentación reconstruida en Figma a partir del sitio publicado: el diseño se iteró en código y aquí se documentan su estructura y su flujo.",
      figmaUrl: "https://www.figma.com/design/B1KG61aOxladEqeFSz6rT6",
      images: [
        {
          src: "/img/ux/sonrieme-movil.webp",
          alt: "Wireframe móvil de baja fidelidad del sitio Sonrieme, de la barra superior al cierre",
          caption: "Wireframe móvil (390 px)",
          width: 390,
          height: 2383,
        },
      ],
      decisions: [
        "El botón «Agendar cita» está fijo en la barra superior: el paciente puede agendar desde cualquier punto del recorrido.",
        "El hero dice qué ofrece el consultorio y lleva directo a WhatsApp, el canal por el que el consultorio atiende a sus pacientes.",
        "Los casos de antes y después van antes de los testimonios: primero la prueba visual, luego la confianza social.",
        "En móvil los casos se muestran de a uno, para que cada foto se vea grande.",
        "La ubicación en Chapinero aparece cerca del cierre, cuando el paciente ya decidió y necesita saber cómo llegar.",
        "El cierre repite el llamado a la acción con un mensaje que baja la fricción (valoración inicial).",
      ],
    },
    liveUrl: "https://dramariapaulaq.com",
    repoUrl: "https://github.com/siangonzalez/Sonrieme",
    screenshot: shot("https://dramariapaulaq.com"),
  },
  {
    slug: "corpoune",
    name: "CORPOUNE – Landing de programas",
    client: "Institución educativa",
    year: "2025–2026",
    kind: "Landing institucional con datos dinámicos",
    summary:
      "Landing conectada a una base de programas en Google Sheets, con filtros y enrutamiento de cada interesado al asesor correspondiente por WhatsApp.",
    role: ["Diseño y desarrollo de la landing", "Integración de datos", "Medición y análisis"],
    stack: ["HTML5", "CSS3", "JavaScript", "Google Sheets", "Google Analytics 4", "Meta Pixel"],
    features: [
      "Catálogo de programas leído desde Google Sheets (el equipo lo actualiza sin tocar código)",
      "Filtros dinámicos por tipo de programa",
      "Enrutamiento al asesor correcto por WhatsApp",
    ],
    quality: ["Medición de eventos con GA4 y Meta Pixel", "Análisis de resultados en Looker Studio"],
    ux: {
      user: "Aspirantes a un programa técnico o de educación continua",
      goal: "Encontrar su programa y hablar con un asesor",
      flow: ["Filtra programas", "Revisa el programa", "Toca WhatsApp", "Habla con el asesor asignado"],
    },
    liveUrl: "https://www.corpoune.edu.co/",
    screenshot: shot("https://www.corpoune.edu.co/index.html"),
  },
  {
    slug: "torneo-de-mesa",
    name: "Torneo de Mesa",
    client: "Proyecto propio",
    year: "2026",
    kind: "Aplicación web progresiva (PWA)",
    summary:
      "App instalable para organizar el torneo de juegos de mesa de mi grupo: jugadores, partidas, puntajes, tabla de posiciones y anfitrión de cada fecha.",
    role: ["Diseño (estilo neobrutalista) y desarrollo completo", "Modelo de datos y reglas de seguridad", "Pruebas automáticas"],
    stack: ["JavaScript (módulos ES)", "Firebase Auth", "Firebase Realtime Database", "Service Worker", "Node test runner"],
    features: [
      "Inicio de sesión con Google y roles de administrador",
      "Puntajes con multiplicadores de dificultad y lógica de desempate",
      "Carrusel de estadísticas y perfiles de jugador",
      "Funciona sin conexión e instalable en el celular",
    ],
    quality: [
      "Reglas de seguridad de la base de datos con pruebas automáticas (npm test)",
      "Pruebas de puntajes, tabla, sincronización y service worker",
      "Código modular sin frameworks",
    ],
    ux: {
      user: "Los jugadores del grupo, desde el celular y durante la partida",
      goal: "Registrar resultados en segundos y ver la tabla al instante",
      flow: ["Abre la app desde la pantalla de inicio", "Registra la partida", "Ve la tabla actualizada", "Consulta su perfil"],
    },
    repoUrl: "https://github.com/siangonzalez/torneo-mesa",
  },
  {
    slug: "este-portafolio",
    name: "Este portafolio",
    client: "Proyecto propio",
    year: "2026",
    kind: "Sitio en Next.js",
    summary:
      "Mi portafolio, construido con Next.js y TypeScript. La galería se alimenta de la API del portafolio de Nómada Estudio en cada build.",
    role: ["Diseño y desarrollo"],
    stack: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Cloudinary", "Netlify"],
    features: [
      "Galería con filtros por categoría y visor de fotos y videos",
      "Fichas de proyecto generadas de forma estática con generateStaticParams",
      "Consumo de API tipado con respaldo local si la API no responde",
    ],
    quality: [
      "Exportación estática: HTML listo en el CDN",
      "Imágenes servidas por Cloudinary en el tamaño y formato justo",
      "Metadatos, Open Graph, sitemap y robots generados por Next.js",
    ],
    ux: {
      user: "Reclutadores y clientes",
      goal: "Ver en minutos qué hago, cómo lo hago y con qué",
      flow: ["Lee el perfil", "Revisa proyectos web", "Abre una ficha", "Me escribe"],
    },
    repoUrl: "https://github.com/siangonzalez/portafolio",
  },
];

// Sitios publicados que se muestran como tarjetas simples (sin ficha completa).
export const otherSites = [
  { name: "ITEANDES", note: "Sitio de institución educativa", url: "https://www.iteandes.edu.co/" },
  { name: "Colegio Empresarial de Boyacá", note: "Sitio del colegio", url: "https://www.corpoune.edu.co/CEB/" },
  { name: "Nómada Estudio Digital", note: "Sitio de mi estudio", url: "https://nomadaestudio.digital" },
];
