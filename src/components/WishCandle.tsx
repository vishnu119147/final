import { useCallback, useEffect, useRef, useState } from 'react';
import { Cake, Mic, Wind, RotateCcw } from 'lucide-react';
import { confettiBurst } from './Confetti';
import { Section, SectionLabel } from './Section';

export function WishCandle() {
  const [lit, setLit] = useState(true);
  const [blown, setBlown] = useState(false);
  const [listening, setListening] = useState(false);
  const [micSupported, setMicSupported] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number>(0);

  const blowOut = useCallback(() => {
    if (!lit) return;
    setLit(false);
    setBlown(true);
    confettiBurst(window.innerWidth / 2, window.innerHeight * 0.55);
  }, [lit]);

  // Microphone "blow" detection
  const startListening = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setMicSupported(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new Ctx();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      analyserRef.current = analyser;
      setListening(true);

      const data = new Uint8Array(analyser.frequencyBinCount);
      const loop = () => {
        analyser.getByteFrequencyData(data);
        // blow = strong low-frequency energy
        let low = 0;
        for (let i = 0; i < 40; i++) low += data[i];
        low /= 40;
        if (low > 110) {
          blowOut();
          stopListening();
          return;
        }
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    } catch {
      setMicSupported(false);
    }
  }, [blowOut]);

  const stopListening = useCallback(() => {
    setListening(false);
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close().catch(() => {});
    streamRef.current = null;
    analyserRef.current = null;
  }, []);

  useEffect(() => () => stopListening(), [stopListening]);

  const relight = () => {
    setLit(true);
    setBlown(false);
  };

  return (
    <Section id="wish" className="bg-gradient-to-b from-cream-50 to-roseblush-300/20">
      <SectionLabel>Make a Wish</SectionLabel>
      <h2 className="text-center font-display text-4xl font-semibold text-ink-900 md:text-6xl">
        Blow out the candle, Champu
      </h2>
      <p className="mx-auto mt-5 max-w-md text-center text-lg text-ink-700/70">
        Close your eyes, wish for something lovely, then blow — or tap the
        candle. I'll handle the confetti.
      </p>

      <div className="mt-16 flex flex-col items-center">
        {/* the cake + candle */}
        <div className="relative flex flex-col items-center">
          {/* flame */}
          <button
            onClick={blowOut}
            disabled={!lit}
            aria-label={lit ? 'Blow out the candle' : 'Candle is out'}
            className="relative h-24 w-6 cursor-pointer outline-none"
          >
            {lit ? (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
                {/* glow */}
                <span className="absolute -inset-8 bottom-[-12px] rounded-full bg-ambergold-400/40 blur-2xl animate-soft-pulse" />
                {/* flame body */}
                <span className="block h-12 w-5 origin-bottom animate-flicker rounded-full bg-gradient-to-t from-ambergold-500 via-ambergold-400 to-roseblush-300 [clip-path:path('M10_0_C16_14_18_22_10_44_C2_22_4_14_10_0')] shadow-[0_0_24px_8px_rgba(245,184,64,0.5)]" />
                {/* wick */}
                <span className="absolute bottom-[-6px] left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-ink-800" />
              </span>
            ) : (
              <span className="absolute bottom-0 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-ink-800" />
            )}
            {/* smoke when blown */}
            {!lit && (
              <span className="absolute bottom-2 left-1/2 h-10 w-1.5 -translate-x-1/2 animate-float-slow rounded-full bg-gradient-to-t from-ink-700/25 to-transparent blur-[2px]" />
            )}
          </button>

          {/* cake */}
          <div className="relative mt-2 h-32 w-56">
            <div className="absolute inset-x-0 bottom-0 h-24 rounded-2xl bg-gradient-to-b from-roseblush-400 to-roseblush-600 shadow-lg" />
            {/* frosting drip */}
            <div className="absolute inset-x-0 top-7 h-6 rounded-t-xl bg-cream-100">
              <svg viewBox="0 0 224 24" className="absolute -bottom-3 left-0 w-full" preserveAspectRatio="none">
                <path
                  d="M0 0 C12 18 24 18 32 6 C40 18 52 18 60 6 C68 18 80 18 88 6 C96 18 108 18 116 6 C124 18 136 18 144 6 C152 18 164 18 172 6 C180 18 192 18 200 6 C208 18 220 18 224 6 V0 H0 Z"
                  fill="#fdf7ec"
                />
              </svg>
            </div>
            {/* candles row hint */}
            <div className="absolute inset-x-0 top-3 flex justify-center gap-10">
              <span className="h-4 w-1.5 rounded-full bg-sage-400" />
              <span className="h-4 w-1.5 rounded-full bg-ambergold-500" />
              <span className="h-4 w-1.5 rounded-full bg-sage-400" />
            </div>
            {/* plate */}
            <div className="absolute -inset-x-3 bottom-[-6px] h-3 rounded-full bg-ink-700/20" />
          </div>
        </div>

        {/* controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {!blown && (
            <button
              onClick={lit ? blowOut : relight}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-roseblush-500 to-ambergold-500 px-6 py-3 font-semibold text-white shadow-lg shadow-roseblush-400/40 transition-all hover:scale-105 active:scale-95"
            >
              <Cake className="h-5 w-5" />
              {lit ? 'Tap to blow it out' : 'Relight it'}
            </button>
          )}

          {blown && (
            <button
              onClick={relight}
              className="inline-flex items-center gap-2 rounded-full border border-ink-700/20 bg-cream-50 px-6 py-3 font-semibold text-ink-800 transition-all hover:scale-105 hover:border-roseblush-400"
            >
              <RotateCcw className="h-4 w-4" />
              Light it again
            </button>
          )}

          {!blown && micSupported && (
            <button
              onClick={listening ? stopListening : startListening}
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-all hover:scale-105 ${
                listening
                  ? 'border-roseblush-400 bg-roseblush-300/20 text-roseblush-600'
                  : 'border-ink-700/20 bg-cream-50 text-ink-800 hover:border-roseblush-400'
              }`}
            >
              <Mic className={`h-4 w-4 ${listening ? 'animate-soft-pulse' : ''}`} />
              {listening ? (
                <span className="flex items-center gap-2">
                  Listening… <Wind className="h-4 w-4 animate-float-slow" /> blow!
                </span>
              ) : (
                'Use microphone'
              )}
            </button>
          )}
        </div>

        {/* wish reveal */}
        <div
          className={`mt-10 max-w-lg text-center transition-all duration-700 ${
            blown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="font-script text-3xl text-roseblush-600 md:text-4xl">
            Wish made, candle out —
          </p>
          <p className="mt-2 font-display text-xl text-ink-800">
            whatever you wished for, I'm rooting for it too.
          </p>
        </div>
      </div>
    </Section>
  );
}
