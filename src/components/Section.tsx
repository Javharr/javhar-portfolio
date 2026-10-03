import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-8 ${className}`}>
      <header className="mb-6 flex items-baseline gap-3 border-b border-rule pb-3">
        {index && <span className="font-mono text-[11px] text-accent">{index}</span>}
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{title}</h2>
      </header>
      {children}
    </section>
  );
}
