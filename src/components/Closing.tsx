import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { confettiBurst } from './Confetti';

const NAV = [
  { id: 'letter', label: 'Letter' },
  { id: 'timeline', label: 'Our Story' },
  { id: 'gallery', label: 'Photos' },
  { id: 'reasons', label: 'Reasons' },
  { id: 'wish', label: 'Wish' },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-cream-300/60 bg-cream-50/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-900"
        >
          Champu <span className="text-roseblush-500">&middot;</span>{' '}
          <span className="font-script text-roseblush-600">the album</span>
        </a>
        <div className="no-scrollbar hidden items-center gap-1 overflow-x-auto md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-ink-700/70 transition-colors hover:bg-roseblush-300/20 hover:text-roseblush-600"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Closing() {
  const celebrate = () =>
    confettiBurst(window.innerWidth / 2, window.innerHeight * 0.45);

  return (
    <footer
      id="top"
      className="relative overflow-hidden px-6 py-28 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roseblush-300/20 via-cream-50 to-cream-100" />
      <div className="paper-grain absolute inset-0 -z-10 opacity-[0.06]" />

      <Heart className="mx-auto h-10 w-10 fill-roseblush-400 text-roseblush-500 animate-soft-pulse" />

      <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink-900 md:text-6xl">
        To a thousand more
        <br />
        <span className="shimmer-text">memories, Champu.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-700/80">
        Thank you for being the kind of friend people write albums about.
        Here's to the next trip, the next fest, the next 3 a.m. call — and every
        birthday in between.
      </p>

      <button
        onClick={celebrate}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-roseblush-500 to-ambergold-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-roseblush-400/40 transition-all hover:scale-105 active:scale-95"
      >
        <Heart className="h-5 w-5" />
        Celebrate again
      </button>

      <p className="mt-16 font-script text-2xl text-ink-700/70">
        made with a lot of love, just for you &middot; happy birthday
      </p>
    </footer>
  );
}
