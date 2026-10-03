import { moreHighlights, robotics } from '../data';
import { Projects } from './Projects';
import { Section } from './Section';

interface Props {
  onOpen: (images: string[], index: number, title: string) => void;
}

export function Bonus({ onOpen }: Props) {
  return (
    <Section id="bonus" index="05" title="Bonus · Engineering & robotics">
      <p className="mb-6 max-w-[62ch] text-[15px] leading-relaxed text-muted">
        Before software I spent several years building drones and robots. It is where I learned to test hardware
        before launch, work in engineering teams and present under pressure.
      </p>
      <Projects items={robotics} onOpen={onOpen} />
      <ul className="mt-8 space-y-1.5">
        {moreHighlights.map((m) => (
          <li key={m} className="relative pl-4 text-[15px] leading-relaxed text-ink/85">
            <span className="absolute left-0 top-[0.7em] h-px w-2 bg-faint" aria-hidden />
            {m}
          </li>
        ))}
      </ul>
    </Section>
  );
}
