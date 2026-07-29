import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** A vertical section with scroll-triggered reveal + consistent rhythm. */
export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, visible } = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`relative px-6 py-24 md:py-32 ${
        visible ? 'animate-fade-up opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

type SectionLabelProps = { children: ReactNode };

/** Small uppercase eyebrow label used above section headings. */
export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-roseblush-400/60" />
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-roseblush-600">
        {children}
      </span>
      <span className="h-px w-8 bg-roseblush-400/60" />
    </div>
  );
}
