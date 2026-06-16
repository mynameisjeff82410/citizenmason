"use client";
import { useEffect, useState } from "react";

export interface ScrollSpyOptions {
  /** Account for a fixed header height. */
  rootMargin?: string;
}

/**
 * Track which section is currently most in view. Pass the section ids; returns
 * the active id for highlighting a floating/scroll-spy nav. Clean-room
 * IntersectionObserver implementation.
 */
export function useScrollSpy(ids: string[], opts: ScrollSpyOptions = {}): string | null {
  const { rootMargin = "-40% 0px -55% 0px" } = opts;
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio);
          else visible.delete(id);
        }
        // Most-visible section wins; fall back to document order.
        let best: string | null = null;
        let bestRatio = -1;
        for (const id of ids) {
          const r = visible.get(id);
          if (r !== undefined && r > bestRatio) {
            best = id;
            bestRatio = r;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, rootMargin]);

  return active;
}
