import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '../data';

export function Header() {
  return (
    <header className="grid gap-8 border-b border-ink pb-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          Résumé
        </p>
        <h1 className="font-serif text-[56px] leading-[0.95] tracking-tight text-ink sm:text-[76px] md:text-[92px]">
          {profile.name.split(' ')[0]}
          <br />
          <span className="italic">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="mt-5 text-lg font-medium text-ink">{profile.headline}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {profile.location}
        </p>
        {profile.openTo && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-[13px] font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="no-print absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.openTo}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 md:items-end">
        <ul className="space-y-1.5 font-mono text-[13px] md:text-right">
          <li>
            <a href={`mailto:${profile.email}`} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-accent">
              {profile.email}
            </a>
          </li>
          {profile.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-muted hover:text-ink"
              >
                <span className="text-faint">{l.label}</span> {l.handle}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <div className="no-print flex gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-sheet transition-colors hover:bg-accent"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Contact
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            <Download className="h-4 w-4" aria-hidden />
            Save as PDF
          </button>
        </div>
      </div>
    </header>
  );
}
