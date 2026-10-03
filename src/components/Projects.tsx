import { ArrowUpRight, Images } from 'lucide-react';
import { projects } from '../data';
import { Section } from './Section';

interface Props {
  onOpen: (images: string[], index: number, title: string) => void;
}

export function Projects({ onOpen }: Props) {
  return (
    <Section id="projects" index="03" title="Selected Projects">
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="print-break-avoid flex flex-col">
            <button
              type="button"
              onClick={() => onOpen(p.images, 0, p.title)}
              className="no-print group relative mb-4 aspect-[16/10] overflow-hidden rounded-md border border-rule bg-rule"
              aria-label={`Open photos of ${p.title}`}
            >
              <img
                src={p.cover}
                alt=""
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 ${p.id === 'mockmate' ? 'object-left-top' : ''} group-hover:scale-[1.03]`}
              />
              {p.images.length > 1 && (
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[11px] text-white backdrop-blur">
                  <Images className="h-3 w-3" aria-hidden />
                  {p.images.length}
                </span>
              )}
            </button>

            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              {p.status && (
                <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-faint">{p.status}</span>
              )}
            </div>
            <p className="text-[14px] text-muted">{p.role}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{p.summary}</p>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="rounded border border-rule px-2 py-0.5 font-mono text-[11px] text-ink/75">
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] text-faint">{p.stack.join(' · ')}</p>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-fit items-center gap-1 text-[14px] font-medium text-accent hover:underline"
              >
                Live demo <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
