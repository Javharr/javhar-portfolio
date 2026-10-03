import { education, skills } from '../data';
import { Section } from './Section';

export function Sidebar() {
  return (
    <div className="space-y-12">
      <Section id="education" title="Education">
        {education.map((e) => (
          <div key={e.id}>
            <h3 className="text-[16px] font-semibold text-ink">{e.school}</h3>
            <p className="text-[15px] text-muted">{e.program}</p>
            <p className="mt-1 font-mono text-[12px] text-faint">{e.period}</p>
          </div>
        ))}
      </Section>

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

      <Section id="focus" title="Currently exploring">
        <p className="text-[15px] leading-relaxed text-ink/85">
          AI, systems analysis and autonomous systems where software meets the physical world.
        </p>
      </Section>
    </div>
  );
}
