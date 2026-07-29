import { Heart } from 'lucide-react';
import { Section, SectionLabel } from './Section';

export function Letter() {
  return (
    <Section id="letter" className="bg-cream-50">
      <SectionLabel>For You</SectionLabel>
      <h2 className="text-center font-display text-4xl font-semibold text-ink-900 md:text-6xl">
        A little letter, before the pictures
      </h2>

      <div className="relative mx-auto mt-12 max-w-2xl">
        {/* soft paper card */}
        <div className="relative rounded-[3px] border border-cream-300 bg-white/80 p-8 shadow-xl shadow-cream-300/40 md:p-12">
          <div className="paper-grain absolute inset-0 rounded-[3px] opacity-[0.05]" />
          <Heart className="mx-auto mb-6 h-7 w-7 fill-roseblush-400 text-roseblush-500" />

          <div className="space-y-5 font-display text-lg leading-[1.8] text-ink-800 md:text-xl">
            <p className="font-script text-3xl text-roseblush-600">
              Dear Champu,
            </p>
            <p>
              I tried to fit an entire friendship into a website and, predictably,
              failed — because the best parts of us don't fit on a screen. They
              live in the way you say my name when you're worried, in the songs
              you send me at midnight, in the silences that never feel empty.
            </p>
            <p>
              So this is not the whole story. It's a scrapbook. A few pages I
              never want to lose. A way of saying, <em>thank you for being here,
              for all of it</em> — the fests, the farewells, the trips, the
              nothing-days that turned out to be everything.
            </p>
            <p>
              Scroll slowly. Some of these are yours to keep.
            </p>
            <p className="font-script text-3xl text-roseblush-600">
              Always, your favourite chaos. ♡
            </p>
          </div>
        </div>

        <div className="polaroid-tape" />
      </div>
    </Section>
  );
}
