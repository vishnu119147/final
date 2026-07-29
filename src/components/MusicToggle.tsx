import { useEffect, useRef, useState } from 'react';
import { Music2, Music2 as Mute } from 'lucide-react';

/**
 * A gentle ambient pad generated with the Web Audio API — no external
 * audio file needed. A soft sustained chord with slow tremolo that
 * suits a warm, sentimental birthday album.
 */
export function MusicToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ stop: () => void } | null>(null);

  const start = () => {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new Ctx();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    master.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 1.5);

    // Soft tremolo
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.15;
    lfoGain.gain.value = 0.04;
    lfo.connect(lfoGain).connect(master.gain);
    lfo.start();

    // A warm, open chord (Cmaj7-ish in low octave)
    const freqs = [130.81, 196.0, 261.63, 329.63, 392.0];
    const oscs = freqs.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 === 0 ? 'sine' : 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.2 / freqs.length;
      o.connect(g).connect(master);
      o.start();
      return o;
    });

    nodesRef.current = {
      stop: () => {
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
        setTimeout(() => {
          oscs.forEach((o) => {
            try {
              o.stop();
            } catch {
              /* already stopped */
            }
          });
          try {
            lfo.stop();
          } catch {
            /* already stopped */
          }
          ctx.close();
        }, 900);
      },
    };
  };

  const toggle = () => {
    if (on) {
      nodesRef.current?.stop();
      nodesRef.current = null;
      setOn(false);
    } else {
      start();
      setOn(true);
    }
  };

  useEffect(() => {
    return () => {
      nodesRef.current?.stop();
      ctxRef.current?.close().catch(() => {});
    };
  }, []);

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Pause ambient music' : 'Play ambient music'}
      className="group flex items-center gap-2 rounded-full border border-roseblush-300/50 bg-cream-50/80 px-4 py-2 text-sm font-medium text-ink-800 shadow-sm backdrop-blur transition-all hover:scale-105 hover:border-roseblush-400 hover:bg-cream-100"
    >
      {on ? (
        <Music2 className="h-4 w-4 text-roseblush-600 animate-soft-pulse" />
      ) : (
        <Mute className="h-4 w-4 text-ink-700/60" />
      )}
      <span className="hidden sm:inline">{on ? 'Music on' : 'Play music'}</span>
    </button>
  );
}
