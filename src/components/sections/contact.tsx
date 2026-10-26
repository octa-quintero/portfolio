import { Section } from "@/components/ui/section";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <p className="max-w-xl text-muted">
        ¿Tenés un proyecto o una propuesta? Escribime y te respondo a la brevedad.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        {profile.email}
      </a>
    </Section>
  );
}
