import { useEffect, useRef, useState } from 'react';

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Image with a soft loading shimmer and a graceful fallback bloom
 * if the remote photo fails to load. No broken-image icons ever.
 */
export function Photo({ src, alt, className = '', imgClassName = '' }: PhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [bg] = useState(() => {
    const palette = ['#f7a8c4', '#f5b840', '#c2d9b6', '#f488b0', '#e7c483'];
    return palette[Math.floor(Math.random() * palette.length)];
  });

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: bg + '33' }}
    >
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-soft-pulse bg-gradient-to-br from-cream-200 to-cream-300" />
      )}
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-roseblush-300/40 to-ambergold-400/30">
          <div className="text-center px-4">
            <div className="font-script text-4xl text-roseblush-600">{alt}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-700/60">
              a memory of us
            </div>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-all duration-[1.2s] ease-out ${
            loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
