import { Calendar, MapPin } from 'lucide-react';
import { memories, type Memory } from '@/data/memories';
import { Photo } from './Photo';
import { Section, SectionLabel } from './Section';
import { useReveal } from '@/hooks/useReveal';

const ACCENT = {
  rose: {
    dot: 'bg-roseblush-500',
    ring: 'ring-roseblush-300/50',
    chip: 'bg-roseblush-300/30 text-roseblush-600',
    line: 'bg-roseblush-300/40',
  },
  gold: {
    dot: 'bg-ambergold-500',
    ring: 'ring-ambergold-400/50',
    chip: 'bg-ambergold-400/30 text-ambergold-600',
    line: 'bg-ambergold-400/40',
  },
  sage: {
    dot: 'bg-sage-500',
    ring: 'ring-sage-300/50',
    chip: 'bg-sage-300/40 text-sage-500',
    line: 'bg-sage-300/40',
  },
} as const;

function TimelineCard({ memory, index }: { memory: Memory; index: number }) {
  const { ref, visible } = useReveal();
  const accent = ACCENT[memory.accent];
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
        flip ? 'md:flex-row-reverse' : ''
      } ${visible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
    >
      {/* photo */}
      <div className="flex-1">
        <div
          className="relative mx-auto w-full max-w-sm transition-transform duration-500 hover:rotate-0 [transform:rotate(var(--tilt))]"
          style={{ ['--tilt' as string]: flip ? '2deg' : '-2deg' }}
        >
          <div className="rounded-[2px] bg-white p-3 pb-12 shadow-xl shadow-ink-900/10">
            <Photo
              src={memory.photo}
              alt={memory.title}
              className={`aspect-[4/3] rounded-[2px] ring-1 ${accent.ring}`}
            />
            <div className="absolute bottom-3 left-0 right-0 text-center font-script text-xl text-ink-800">
              {memory.place}
            </div>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="flex-1">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${accent.chip}`}
        >
          <Calendar className="h-3.5 w-3.5" />
          {memory.date}
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
          {memory.title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-ink-700/60">
          <MapPin className="h-4 w-4" />
          {memory.place}
        </div>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700/85">
          {memory.blurb}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <Section id="timeline" className="bg-gradient-to-b from-cream-50 to-cream-100">
      <SectionLabel>The Story So Far</SectionLabel>
      <h2 className="text-center font-display text-4xl font-semibold text-ink-900 md:text-6xl">
        Milestones, mischief &amp; us
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-center text-lg text-ink-700/70">
        A walk through the moments that built this friendship — in roughly the
        order they made us laugh, cry, or both.
      </p>

      <div className="relative mt-20">
        {/* spine */}
        <div
          className={`absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-roseblush-300/40 via-ambergold-400/40 to-sage-300/40 md:block`}
        />
        <div className="space-y-24">
          {memories.map((m, i) => (
            <div key={m.id} className="relative">
              {/* node on spine */}
              <span
                className={`absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-cream-100 md:block ${ACCENT[m.accent].dot}`}
              />
              <TimelineCard memory={m} index={i} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
