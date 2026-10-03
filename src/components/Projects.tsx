import { ArrowUpRight, Images } from 'lucide-react';
import type { Project } from '../types';

interface Props {
  items: Project[];
  onOpen: (images: string[], index: number, title: string) => void;
  /** first item spans the full width and shows all its images */
  featureFirst?: boolean;
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((h) => (
        <li key={h} className="rounded border border-rule px-2 py-0.5 font-mono text-[11px] text-ink/75">
          {h}
        </li>
      ))}
    </ul>
  );
}

export function Projects({ items, onOpen, featureFirst = false }: Props) {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
      {items.map((p, idx) => {
        const featured = featureFirst && idx === 0;
        return (
          <article key={p.id} className={`print-break-avoid flex flex-col ${featured ? 'sm:col-span-2' : ''}`}>
            {featured ? (
              <div className="no-print mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {p.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => onOpen(p.images, i, p.title)}
                    className={`group relative overflow-hidden rounded-md border border-rule bg-ink ${
                      i === 0 ? 'col-span-2 aspect-[16/10] sm:row-span-2 sm:aspect-auto' : 'aspect-[16/10]'
                    }`}
                    aria-label={`Open image ${i + 1} of ${p.title}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onOpen(p.images, 0, p.title)}
                className="no-print group relative mb-4 aspect-[16/10] overflow-hidden rounded-md border border-rule bg-rule"
                aria-label={`Open images of ${p.title}`}
              >
                <img
                  src={p.cover}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    p.id === 'mockmate' || p.id === 'qa-artifacts' ? 'object-left-top' : ''
                  }`}
                />
                {p.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[11px] text-white backdrop-blur">
                    <Images className="h-3 w-3" aria-hidden />
                    {p.images.length}
                  </span>
                )}
              </button>
            )}

            <div className="flex items-baseline justify-between gap-3">
              <h3 className={`font-semibold text-ink ${featured ? 'text-[19px]' : 'text-[17px]'}`}>{p.title}</h3>
              {p.status && <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-faint">{p.status}</span>}
            </div>
            <p className="text-[14px] text-muted">{p.role}</p>
            <p className={`mt-2 text-[15px] leading-relaxed text-ink/85 ${featured ? 'max-w-[68ch]' : ''}`}>{p.summary}</p>
            <Tags items={p.highlights} />
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
        );
      })}
    </div>
  );
}
