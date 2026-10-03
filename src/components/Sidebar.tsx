import { languages, skills } from '../data';
import { Section } from './Section';

export function Sidebar() {
  return (
    <div className="space-y-12">
      <Section id="skills" title="Skills">
        <dl className="space-y-5">
          {skills.map((g) => (
            <div key={g.id}>
              <dt className="mb-2 text-[13px] font-semibold text-ink">{g.category}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span key={s} className="rounded bg-sheet px-2 py-1 text-[13px] text-ink/80 ring-1 ring-rule">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="languages" title="Languages">
        <ul className="space-y-1.5">
          {languages.map((l) => (
            <li key={l.name} className="flex justify-between text-[15px]">
              <span className="text-ink">{l.name}</span>
              <span className="font-mono text-[12px] text-muted">{l.level}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="focus" title="Currently exploring">
        <p className="text-[15px] leading-relaxed text-ink/85">
          Test automation, systems analysis and AI, and autonomous systems where software meets the physical world.
        </p>
      </Section>
    </div>
  );
}
