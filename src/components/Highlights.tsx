import { highlights } from '../data';

export function Highlights() {
  return (
    <dl className="grid grid-cols-2 border-b border-rule md:grid-cols-4">
      {highlights.map((h, i) => (
        <div
          key={h.label}
          className={`py-6 pr-4 ${i % 2 === 1 ? 'pl-4 border-l border-rule md:pl-6' : ''} ${
            i === 2 ? 'border-t border-rule md:border-t-0 md:border-l md:pl-6' : ''
          } ${i === 3 ? 'border-t border-rule md:border-t-0' : ''}`}
        >
          <dt className="sr-only">{h.label}</dt>
          <dd>
            <span className="block font-serif text-4xl leading-none text-ink md:text-5xl">{h.value}</span>
            <span className="mt-2 block text-[13px] leading-snug text-muted">{h.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
