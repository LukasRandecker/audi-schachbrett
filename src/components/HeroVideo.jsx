import { useEffect, useRef, useState } from 'react';
import { asset } from '../lib/asset';

/**
 * Vollflaechiger Hero mit Bewegtbild.
 * Seitenverhaeltnis folgt audi.de: hochkant am Handy, ab lg ein
 * breites Kinoformat (2.25:1) statt einer festen Viewport-Hoehe.
 */
function HeroVideo({ videoSrc, label = 'Hintergrundvideo', eyebrow, headline, copy, actions }) {
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const hatText = Boolean(eyebrow || headline || copy || actions);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      setReduceMotion(mq.matches);
      if (mq.matches && videoRef.current) videoRef.current.pause();
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <section className="relative -mt-18 w-full overflow-hidden bg-surface">
      <video
        ref={videoRef}
        src={asset(videoSrc)}
        aria-label={label}
        className="aspect-[4/5] max-h-[88svh] w-full object-cover sm:aspect-[16/9] lg:aspect-[2.25/1]"
        autoPlay={!reduceMotion}
        controls={reduceMotion}
        loop
        muted
        playsInline
        preload="metadata"
      />

      {hatText && (
        <>
          {/* Verlauf sichert den Textkontrast, ohne das Bild flach zu machen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/25 to-canvas/50"
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="shell pb-block-tight pt-16 sm:pt-24">
              <div className="max-w-2xl">
                {eyebrow && (
                  <p className="mb-3 text-fine uppercase tracking-[0.14em] text-ink-muted">{eyebrow}</p>
                )}
                {headline && <h1 className="text-display-2 text-ink text-balance">{headline}</h1>}
                {copy && <p className="mt-4 text-copy text-ink-muted text-pretty">{copy}</p>}
                {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default HeroVideo;
