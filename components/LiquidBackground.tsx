'use client';

import { useEffect } from 'react';

/**
 * LiquidBackground
 * A performant, dependency-free animated background with a "liquid glass" vibe.
 * - Uses blurred, blended radial blobs
 * - Parallax reacts to pointer (reduced for prefers-reduced-motion)
 * - Runs behind all content (pointer-events: none)
 */
export default function LiquidBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onMove(e: PointerEvent | MouseEvent) {
      if (reduced) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1..1
      root.style.setProperty('--px', x.toFixed(4));
      root.style.setProperty('--py', y.toFixed(4));
    }

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="liquid-bg" aria-hidden="true">
      {/* Primary cool hues */}
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      {/* Accents */}
      <span className="blob b4" />
      <span className="blob b5" />
    </div>
  );
}

