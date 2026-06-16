"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* ---------------------------------------------------------------------------
 * FeatureCard — the house card for Citizen Mason.
 *
 * Combines:
 *   HOVER  (V2): card raises (-translate-y-0.5, shadow-lg), 2px amber bar
 *          fills top-to-bottom on the LEFT edge (scale-y 0 → 1).
 *   INDEX  (V3): prominent Geist Mono index ("01", "02") as lead element,
 *          charcoal shifting to text-link on hover. Smaller mono label below.
 *   EDGE   (V2): amber shimmer sweeps the TOP hairline once on scroll-reveal
 *          and again on hover (edge-sweep keyframe in kit.css).
 *
 * Reduced motion: global kit.css guard zeroes transitions/animations. The
 * component also checks useReducedMotion to skip the reveal-sweep class.
 * Amber small text uses text-link (#9E5E14 AA-safe), not raw accent.
 * --------------------------------------------------------------------------- */

export interface FeatureCardProps {
  /** Mono index displayed large: "01", "02", etc. */
  index: string | number;
  /** Uppercase mono label below the index, e.g. "STUDIOS". Optional. */
  label?: string;
  /** Card heading. */
  title: string;
  /** Body text (passed as children for flexibility). */
  children: ReactNode;
  /** Optional link rendered as a subtle CTA at the bottom. Preserves
   *  focus-visible rings for keyboard accessibility. */
  href?: string;
  hrefLabel?: string;
  /** Extra class on the outer wrapper. */
  className?: string;
}

export function FeatureCard({
  index,
  label,
  title,
  children,
  href,
  hrefLabel,
  className,
}: FeatureCardProps) {
  const { ref, revealed } = useScrollReveal();
  const reduced = useReducedMotion();
  const sweepOnReveal = revealed && !reduced;

  const idx = typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <Card
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-surface shadow-none border-border",
        "transition-[transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-standard)]",
        "hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {/* Top-edge shimmer track (edge-sweep keyframe lives in kit.css) */}
      <span
        aria-hidden
        className={cn(
          "edge-sweep pointer-events-none absolute inset-x-0 top-0 h-px",
          sweepOnReveal && "edge-sweep--reveal",
        )}
      />

      {/* Left-accent bar: fills top-to-bottom on hover */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-0 bottom-0 w-0.5 origin-top scale-y-0 bg-accent",
          "transition-transform duration-[var(--duration-slow)] ease-[var(--ease-emphasized)]",
          "group-hover:scale-y-100",
        )}
      />

      <CardHeader>
        {/* Index + label block */}
        <div className="flex flex-col gap-1">
          <span
            aria-hidden
            className="font-mono text-2xl font-medium leading-none tracking-tight text-border-strong transition-colors duration-[var(--duration-base)] group-hover:text-link"
          >
            {idx}
          </span>
          {label && (
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {label}
            </p>
          )}
        </div>

        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{children}</CardDescription>

        {href && (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-2 inline-flex items-center gap-1 rounded-sm text-xs font-medium text-link underline underline-offset-2 transition-colors hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {hrefLabel ?? "View"}
          </a>
        )}
      </CardHeader>
    </Card>
  );
}

/* ---------------------------------------------------------------------------
 * SectionDivider — centered hairline with a small amber keystone mark.
 * Place above the card row in each section for a consistent accent.
 * --------------------------------------------------------------------------- */

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex w-full items-center", className)} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="mx-3 inline-flex items-center">
        <span className="h-1.5 w-1.5 rotate-45 bg-link" />
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
