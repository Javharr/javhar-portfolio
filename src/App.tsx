import { useCallback, useState } from 'react';
import { Awards } from './components/Awards';
import { EducationList } from './components/EducationList';
import { ExperienceList } from './components/ExperienceList';
import { Header } from './components/Header';
import { Highlights } from './components/Highlights';
import { Lightbox, type GalleryState } from './components/Lightbox';
import { Projects } from './components/Projects';
import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { profile } from './data';

export default function App() {
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const open = useCallback((images: string[], index: number, title: string) => setGallery({ images, index, title }), []);

  return (
    <>
      <div className="px-3 py-3 sm:px-6 sm:py-10 print:p-0">
        <main className="sheet mx-auto max-w-[1080px] rounded-lg border border-rule bg-sheet px-5 py-10 shadow-[0_1px_2px_rgba(22,24,27,0.04),0_12px_40px_-12px_rgba(22,24,27,0.12)] sm:px-10 md:px-14 md:py-14">
          <Header />
          <Highlights />

          <div className="print-cols mt-12 grid gap-14 lg:grid-cols-[1fr_280px] lg:gap-14">
            <div className="print-tight space-y-14">
              <Section id="summary" title="Summary">
                <div className="max-w-[62ch] space-y-3 text-[16px] leading-relaxed text-ink/90">
                  {profile.summary.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Section>
              <ExperienceList />
              <EducationList onOpen={open} />
              <Awards onOpen={open} />
              <Projects onOpen={open} />
            </div>

            <aside className="lg:sticky lg:top-10 lg:self-start">
              <Sidebar />
            </aside>
          </div>

          <footer className="no-print mt-16 flex flex-col gap-2 border-t border-rule pt-6 text-[13px] text-faint sm:flex-row sm:justify-between">
            <span>
              {profile.name} · <a href={`mailto:${profile.email}`} className="hover:text-ink">{profile.email}</a>
            </span>
            <span className="font-mono text-[12px]">Updated {new Date().getFullYear()}</span>
          </footer>
        </main>
      </div>
      <Lightbox gallery={gallery} onChange={setGallery} />
    </>
  );
}
