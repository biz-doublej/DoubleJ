'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * AutoRevealSections
 * - Progressive enhancement: animate all <section> as they enter viewport
 * - Also staggers common children like `.cards > *` inside a section
 * - Skips elements already using the `Reveal` component (has [data-reveal])
 */
export default function AutoRevealSections() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observers: IntersectionObserver[] = [];

    function observe(nodes: Element[], once = true) {
      if (!nodes.length) return;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add('is-visible');
              if (once) obs.unobserve(el);
            } else if (!once) {
              el.classList.remove('is-visible');
            }
          }
        },
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
      );
      nodes.forEach((n) => obs.observe(n));
      observers.push(obs);
    }

    // Target all main sections
    const sectionNodes = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
    const toReveal: HTMLElement[] = [];

    sectionNodes.forEach((s, idx) => {
      if (reduced) {
        s.classList.add('is-visible');
        return;
      }
      if (!s.hasAttribute('data-reveal') && !s.classList.contains('reveal')) {
        s.classList.add('reveal', 'reveal-up');
        s.style.transitionDelay = `${idx * 60}ms`;
      }
      toReveal.push(s);

      // Stagger immediate cards within the section
      const cards = Array.from(s.querySelectorAll(':scope .cards > *')) as HTMLElement[];
      cards.forEach((c, i) => {
        if (!c.hasAttribute('data-reveal') && !c.classList.contains('reveal')) {
          c.classList.add('reveal', 'reveal-up');
          c.style.transitionDelay = `${120 + i * 90}ms`;
          toReveal.push(c);
        }
      });
    });

    if (!reduced) observe(toReveal);

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}

