import { GraduationCap } from 'lucide-react';
import { education } from '../data';
import { Section } from './Section';

interface Props {
  onOpen: (images: string[], index: number, title: string) => void;
}

export function EducationList({ onOpen }: Props) {
  return (
    <Section id="education" index="03" title="Education">
      <ol className="space-y-8">
        {education.map((e) => (
          <li key={e.id} className="print-break-avoid grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
            <div className="font-mono text-[12px] text-faint sm:pt-1">{e.period}</div>
            <div>
              {e.badge && (
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider text-white">
                  <GraduationCap className="h-3 w-3" aria-hidden />
                  {e.badge}
                </span>
              )}
              <h3 className="text-[17px] font-semibold text-ink">{e.school}</h3>
              <p className="text-[15px] text-muted">{e.program}</p>
              {e.details && (
                <ul className="mt-3 space-y-1.5">
                  {e.details.map((d) => (
                    <li key={d} className="relative pl-4 text-[15px] leading-relaxed text-ink/85">
                      <span className="absolute left-0 top-[0.7em] h-px w-2 bg-faint" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {e.images && (
                <div className="no-print mt-4 flex flex-wrap gap-2">
                  {e.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => onOpen(e.images!, i, e.school)}
                      className="group relative h-20 w-20 overflow-hidden rounded-md border border-rule bg-rule sm:h-24 sm:w-24"
                      aria-label={`Open photo ${i + 1} of ${e.school}`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
