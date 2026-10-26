// Todo el contenido del portfolio vive acá: editá este archivo para actualizar el sitio.
// Los valores marcados con TODO son de ejemplo y hay que reemplazarlos.

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const profile = {
  name: "Octa Quintero",
  role: "Desarrollador Web", // TODO: tu rol
  tagline: "Construyo aplicaciones web rápidas, accesibles y fáciles de mantener.", // TODO
  about: [
    // TODO: contá quién sos, qué te gusta construir y qué estás buscando.
    "Soy desarrollador enfocado en el frontend y el ecosistema de JavaScript/TypeScript.",
    "Me interesa escribir código claro, cuidar los detalles de la interfaz y aprender tecnologías nuevas.",
  ],
  email: "tu-email@ejemplo.com", // TODO: tu email de contacto
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/octa-quintero" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" }, // TODO: tu perfil
];

export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
];

export const projects: Project[] = [
  // TODO: reemplazá por tus proyectos reales.
  {
    title: "Portfolio",
    description: "Este sitio: portfolio personal hecho con Next.js, TypeScript y Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/octa-quintero/portfolio",
  },
  {
    title: "Proyecto de ejemplo",
    description: "Descripción breve del problema que resuelve y de tu aporte.",
    tags: ["React", "Node.js"],
  },
];

export const experience: Experience[] = [
  // TODO: reemplazá por tu experiencia real.
  {
    role: "Desarrollador Frontend",
    company: "Empresa",
    period: "2024 — Actualidad",
    description: "Qué hiciste, con qué tecnologías y qué impacto tuvo.",
  },
];

export const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;
