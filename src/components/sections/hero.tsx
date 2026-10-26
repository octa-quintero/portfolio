import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">Hola, soy</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-4 text-xl text-muted sm:text-2xl">{profile.role}</p>
      <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#proyectos"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
        >
          Contactame
        </a>
      </div>
    </section>
  );
}
