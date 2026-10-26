# Portfolio

Portfolio personal de Octa Quintero, hecho con [Next.js](https://nextjs.org), TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

| Script                 | Qué hace                                          |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                            |
| `npm run build`        | Build de producción                               |
| `npm run start`        | Sirve el build de producción                      |
| `npm run lint`         | ESLint                                            |
| `npm run lint:fix`     | ESLint con autocorrección                         |
| `npm run format`       | Formatea todo el proyecto con Prettier            |
| `npm run format:check` | Verifica el formato sin modificar archivos        |
| `npm run typecheck`    | Chequeo de tipos con TypeScript                   |
| `npm run check`        | Corre `typecheck`, `lint` y `format:check` juntos |

## Estructura

```
src/
├── app/                  # Rutas, layout y estilos globales (App Router)
├── components/
│   ├── sections/         # Secciones de la página: Hero, Sobre mí, Proyectos, Experiencia, Contacto
│   ├── ui/               # Componentes reutilizables (Section, Tag)
│   ├── header.tsx
│   └── footer.tsx
└── data/
    └── portfolio.ts      # Todo el contenido del sitio (perfil, proyectos, experiencia, links)
```

Para actualizar el contenido del portfolio solo hace falta editar `src/data/portfolio.ts`.

## Formato y linting

- **Prettier** formatea el código y ordena las clases de Tailwind (`prettier-plugin-tailwindcss`).
- **ESLint** usa la configuración de Next.js; `eslint-config-prettier` desactiva las reglas que chocan con Prettier.
- En VS Code, instalá las extensiones recomendadas (`.vscode/extensions.json`) para formatear al guardar.
