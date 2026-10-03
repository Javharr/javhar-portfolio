import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect } from 'react';

export interface GalleryState {
  images: string[];
  index: number;
  title: string;
}

interface Props {
  gallery: GalleryState | null;
  onChange: (g: GalleryState | null) => void;
}

export function Lightbox({ gallery, onChange }: Props) {
  const step = useCallback(
    (dir: number) => {
      if (!gallery) return;
      const n = gallery.images.length;
      onChange({ ...gallery, index: (gallery.index + dir + n) % n });
    },
    [gallery, onChange],
  );

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [gallery, onChange, step]);

  if (!gallery) return null;
  const multi = gallery.images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={gallery.title}
      className="no-print fixed inset-0 z-50 flex flex-col bg-ink/95 p-4 sm:p-8"
      onClick={() => onChange(null)}
    >
      <div className="flex items-center justify-between text-white/80" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm">
          {gallery.title}
          {multi && (
            <span className="ml-2 font-mono text-[12px] text-white/50">
              {gallery.index + 1} / {gallery.images.length}
            </span>
          )}
        </p>
        <button type="button" onClick={() => onChange(null)} className="rounded-full p-2 hover:bg-white/10" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
        <img
          src={gallery.images[gallery.index]}
          alt={`${gallery.title}, photo ${gallery.index + 1}`}
          className="max-h-full max-w-full rounded object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        {multi && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
