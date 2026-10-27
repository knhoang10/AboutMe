// Library
import { useEffect, useRef, useState } from 'react';

const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

/**
 * A number that counts up the first time it scrolls into view. The server HTML and the
 * first render carry the FINAL value, so crawlers and no-JS readers see the real figure;
 * only a number still below the fold after mount is reset and counted.
 */
export default function CountUp({ value, suffix = '', duration = 1600 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [ shown, setShown ] = useState(value);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!element || reducedMotion || !('IntersectionObserver' in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setShown(0);
    let frame = 0;
    const observer = new IntersectionObserver(([ entry ]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (time: number) => {
        const progress = Math.min(1, (time - start) / duration);
        setShown(Math.round(value * easeOut(progress)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [ value, duration ]);

  return <span ref={ref}>{shown}{suffix}</span>;
};
