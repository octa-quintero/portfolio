import { Section } from "@/components/ui/section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <p className="font-mono text-xs text-muted">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role} · <span className="text-accent">{item.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
