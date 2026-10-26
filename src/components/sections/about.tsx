import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { profile, skills } from "@/data/portfolio";

export function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="max-w-2xl space-y-4 text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </Section>
  );
}
