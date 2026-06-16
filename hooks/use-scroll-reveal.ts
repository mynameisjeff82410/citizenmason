"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface ScrollRevealOptions {
  /** Fraction of the element visible before it reveals. */
  threshold?: number;
  /** Reveal once and stop observing (default true). */
  once?: boolean;
  /** rootMargin passthrough, e.g. "0px 0px -10% 0px". */
  rootMargin?: string;
}

/**
 * Reveal-on-scroll. Returns a ref to attach and a `revealed` boolean to drive
 * the entrance (opacity/translate). Honors reduced-motion by revealing
 * immediately. Clean-room reimplementation of the IntersectionObserver reveal
 * pattern — no animation library.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(opts: ScrollRevealOptions = {}) {
  const { threshold = 0.15, once = true, rootMargin = "0px 0px -10% 0px" } = opts;
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Vendored kit code: intentional bail-out for reduced-motion.
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) io.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, threshold, once, rootMargin]);

  return { ref, revealed };
}
