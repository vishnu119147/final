import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '@/data/memories';
import { Photo } from './Photo';
import { Section, SectionLabel } from './Section';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((i) => (i === null ? i : (i + 1) % gallery.length));
  const prev = () =>
    setActive((i) =>
      i === null ? i : (i - 1 + gallery.length) % gallery.length
    );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <Section id="gallery" className="bg-cream-100">
      <SectionLabel>The Photo Wall</SectionLabel>
      <h2 className="text-center font-display text-4xl font-semibold text-ink-900 md:text-6xl">
        Snapshots I'd never delete
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-center text-lg text-ink-700/70">
        Tap any photo to see it up close. Some moments deserve a bigger frame.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.map((shot, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:shadow-roseblush-400/30 ${
              shot.span ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Photo
              src={shot.src}
              alt={shot.caption}
              className={`w-full ${shot.span ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-script text-xl text-cream-50 md:text-2xl">
                {shot.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/85 backdrop-blur-md"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20 md:left-8"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20 md:right-8"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <figure
            className="relative max-h-[85vh] max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl bg-white p-3 pb-14 shadow-2xl">
              <Photo
                src={gallery[active].src}
                alt={gallery[active].caption}
                className="max-h-[70vh] w-auto rounded-[2px]"
              />
              <figcaption className="absolute bottom-4 left-0 right-0 text-center font-script text-2xl text-ink-800">
                {gallery[active].caption}
              </figcaption>
            </div>
          </figure>
        </div>
      )}
    </Section>
  );
}
