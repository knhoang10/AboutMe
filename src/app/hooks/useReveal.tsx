// Library
import { useEffect } from 'react';

/**
 * Scroll reveal. Arms only `.reveal` elements still BELOW the fold after mount, so the
 * served HTML is fully visible and nothing the reader has already seen fades out. Once
 * an element has risen in, the reveal classes come off so its own hover transitions
 * take over again. Reduced motion: nothing happens.
 */
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const timeouts: number[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target;
        element.classList.add('reveal-in');
        observer.unobserve(element);
        timeouts.push(window.setTimeout(() => element.classList.remove('reveal-armed', 'reveal-in'), 950));
      }
    }, { rootMargin: '0px 0px -8% 0px' });

    for (const element of Array.from(document.querySelectorAll<HTMLElement>('.reveal'))) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      element.classList.add('reveal-armed');
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);
};
