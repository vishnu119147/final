import { useEffect, useState } from 'react';
import { Cake, ChevronDown, Heart, Sparkles } from 'lucide-react';
import { Photo } from './Photo';
import { confettiBurst } from './Confetti';

export function Hero() {
  const [revealed, setRevealed] = useState(false);
  const heroPhoto = `${import.meta.env.BASE_URL}photos/us.JPEG`;

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(t);
  }, []);

  const celebrate = () => {
    confettiBurst(window.innerWidth / 2, window.innerHeight / 2);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* warm gradient field */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-roseblush-300/30" />
      <div className="paper-grain absolute inset-0 -z-10 opacity-[0.07]" />

      {/* floating soft blobs */}
      <div className="absolute -left-20 top-24 -z-10 h-72 w-72 rounded-full bg-roseblush-300/40 blur-3xl animate-float-slow" />
      <div className="absolute -right-16 top-40 -z-10 h-80 w-80 rounded-full bg-ambergold-400/30 blur-3xl animate-float-slow [animation-delay:1.5s]" />
      <div className="absolute bottom-10 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sage-300/30 blur-3xl animate-float-slow [animation-delay:3s]" />

      <div
        className={`transition-all duration-1000 ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-roseblush-300/50 bg-cream-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-roseblush-600 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          A Birthday Keepsake
        </div>

        <p className="font-script text-3xl text-ink-700/80 md:text-4xl">
          Happy Birthday, my dearest
        </p>

        <h1 className="mt-2 font-display text-7xl font-semibold leading-[0.95] text-ink-900 text-shadow-soft md:text-[9rem]">
          <span className="shimmer-text">Champu</span>
        </h1>

        <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 text-ink-700/70">
          <span className="h-px w-10 bg-ink-700/20" />
          <p className="text-sm font-medium uppercase tracking-[0.24em]">
            The Album of Us
          </p>
          <span className="h-px w-10 bg-ink-700/20" />
        </div>

        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-ink-700/80">
          Every memory we made, every laugh we kept, every year we grew —
          gathered in one little place, just for you.
        </p>

        {/* hero photo polaroid */}
        <div className="relative mx-auto mt-12 w-56 rotate-[-3deg] md:w-64">
          <div className="polaroid-tape" />
          <div className="rounded-[2px] bg-white p-3 pb-12 shadow-2xl shadow-roseblush-400/30 transition-transform duration-500 hover:rotate-0">
            <Photo
              src={heroPhoto}
              alt="Champu"
              className="aspect-square rounded-[2px]"
            />
            <div className="absolute bottom-3 left-0 right-0 text-center font-script text-2xl text-ink-800">
              us, always
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={celebrate}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-roseblush-500 to-ambergold-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-roseblush-400/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-roseblush-400/50 active:scale-95"
          >
            <Cake className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Throw confetti
          </button>
          <a
            href="#letter"
            className="inline-flex items-center gap-2 rounded-full border border-ink-700/20 bg-cream-50/60 px-7 py-3.5 font-semibold text-ink-800 backdrop-blur transition-all hover:scale-105 hover:border-roseblush-400"
          >
            <Heart className="h-5 w-5 text-roseblush-500" />
            Open the album
          </a>
        </div>
      </div>

      <a
        href="#letter"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-roseblush-500/70 transition-transform hover:translate-y-1 hover:text-roseblush-600"
      >
        <ChevronDown className="h-7 w-7 animate-float-slow" />
      </a>
    </section>
  );
}
