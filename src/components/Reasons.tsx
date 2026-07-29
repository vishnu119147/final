import { useState } from 'react';
import { Sparkles, RotateCw } from 'lucide-react';
import { reasons } from '@/data/memories';
import { Section, SectionLabel } from './Section';

const TINTS = [
  'from-roseblush-300/40 to-roseblush-400/20',
  'from-ambergold-400/40 to-ambergold-500/20',
  'from-sage-300/40 to-sage-400/20',
] as const;

export function Reasons() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <Section id="reasons" className="bg-gradient-to-b from-cream-100 to-cream-50">
      <SectionLabel>Why Her, Honestly</SectionLabel>
      <h2 className="text-center font-display text-4xl font-semibold text-ink-900 md:text-6xl">
        Six reasons (of roughly a million)
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-center text-lg text-ink-700/70">
        Hover or tap a card to flip it. The back is where I get honest.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const isFlipped = flipped === i;
          const tint = TINTS[i % TINTS.length];
          return (
            <div
              key={i}
              className={`flip-card h-64 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
              onClick={() => setFlipped(isFlipped ? null : i)}
            >
              <div className="flip-inner relative h-full w-full">
                {/* front */}
                <div
                  className={`flip-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl border border-cream-300 bg-gradient-to-br ${tint} p-7 text-center shadow-lg`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/70 font-display text-lg font-semibold text-ink-800">
                    {i + 1}
                  </div>
                  <p className="font-display text-2xl font-medium leading-snug text-ink-900">
                    {r.front}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-ink-700/50">
                    <RotateCw className="h-3.5 w-3.5" /> flip me
                  </span>
                </div>
                {/* back */}
                <div className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-roseblush-300/40 bg-white p-7 text-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-roseblush-500" />
                  <p className="font-script text-2xl leading-snug text-ink-800">
                    {r.back}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
