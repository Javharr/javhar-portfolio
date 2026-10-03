import { experience } from '../data';
import { Section } from './Section';

export function ExperienceList() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="space-y-8">
        {experience.map((job) => (
          <li key={job.id} className="print-break-avoid grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
            <div className="font-mono text-[12px] text-faint sm:pt-1">
              {job.period}
              {job.current && (
                <span className="ml-2 inline-flex items-center gap-1 text-accent sm:ml-0 sm:mt-1 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> now
                </span>
              )}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-ink">{job.role}</h3>
              <p className="text-[15px] text-muted">{job.company}</p>
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-4 text-[15px] leading-relaxed text-ink/85">
                    <span className="absolute left-0 top-[0.7em] h-px w-2 bg-faint" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
