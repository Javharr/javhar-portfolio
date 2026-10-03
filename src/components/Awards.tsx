import { Trophy } from 'lucide-react';
import { achievements } from '../data';
import { Section } from './Section';

interface Props {
  onOpen: (images: string[], index: number, title: string) => void;
}

export function Awards({ onOpen }: Props) {
  return (
    <Section id="awards" index="04" title="Honors & Awards">
      <ol className="space-y-10">
        {achievements.map((a) => {
          const isWin = a.rank.startsWith('1st');
          return (
            <li key={a.id} className="print-break-avoid grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
              <div className="font-mono text-[12px] text-faint sm:pt-1">{a.year}</div>
              <div>
                <span
                  className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider ${
                    isWin ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                  }`}
                >
                  {isWin && <Trophy className="h-3 w-3" aria-hidden />}
                  {a.rank}
                </span>
                <h3 className="text-[17px] font-semibold text-ink">{a.title}</h3>
                <p className="text-[15px] text-muted">
                  {a.event} · {a.location}
                </p>
                {a.scale && <p className="mt-1 font-mono text-[12px] text-ink/70">{a.scale}</p>}
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink/85">{a.summary}</p>

                <div className="no-print mt-4 flex flex-wrap gap-2">
                  {a.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => onOpen(a.images, i, a.title)}
                      className="group relative h-20 w-20 overflow-hidden rounded-md border border-rule bg-rule sm:h-24 sm:w-24"
                      aria-label={`Open photo ${i + 1} of ${a.title}`}
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
              </div>
            </li>
          );
        })}
      </ol>

    </Section>
  );
}
