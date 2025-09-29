'use client';

import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactElement;
  className?: string;
  /** up | fade | left | right | zoom */
  variant?: 'up' | 'fade' | 'left' | 'right' | 'zoom';
  /** milliseconds */
  delay?: number;
  /** observe only once and keep visible */
  once?: boolean;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** IntersectionObserver rootMargin */
  margin?: string;
};

export default function Reveal({
  children,
  className,
  variant = 'up',
  delay = 0,
  once = true,
  threshold = 0.15,
  margin = '0px 0px -10% 0px',
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = nodeRef.current as Element | null;
    if (!el) return;

    const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: margin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, margin]);

  // Merge className and style into the child without adding an extra wrapper
  const child = React.Children.only(children) as React.ReactElement<any>;

  const base = 'reveal';
  const variantClass = `reveal-${variant}`;
  const isClass = visible ? 'is-visible' : '';

  const mergedClassName = [child.props?.className, className, base, variantClass, isClass]
    .filter(Boolean)
    .join(' ');

  const mergedStyle = {
    ...(child.props?.style || {}),
    transitionDelay: delay ? `${delay}ms` : undefined,
  } as React.CSSProperties;

  // Support ref forwarding for DOM nodes
  const childRef = (child as any).ref;
  const setRef = (node: HTMLElement | null) => {
    nodeRef.current = node;
    if (typeof childRef === 'function') childRef(node);
    else if (childRef && typeof childRef === 'object') (childRef as any).current = node;
  };

  return React.cloneElement(child, {
    className: mergedClassName,
    style: mergedStyle,
    ref: setRef,
    'data-reveal': variant,
  });
}

