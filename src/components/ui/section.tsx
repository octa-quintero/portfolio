import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
