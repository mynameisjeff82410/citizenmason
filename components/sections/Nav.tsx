"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_IDS = ["hero", "problem", "tracks", "how-it-works", "range", "founder", "start"];
const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Who it's for", href: "#tracks" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Proof", href: "#range" },
];

/* ---------------------------------------------------------------------------
 * Wordmark
 *
 * Option A (preferred): chiseled keystone glyph in amber before the text.
 * Option B: amber set-stone square.
 *
 * Both are inline SVG, no external assets. Toggle by switching which
 * component renders below.
 * --------------------------------------------------------------------------- */

/** Option A: chiseled keystone glyph. A tapered trapezoid, wider at top, cut
 *  from a single path. Reads as an architectural keystone at small sizes. */
function KeystoneGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-auto", className)}
      aria-hidden
    >
      <path
        d="M2 0H18L16 24H4L2 0Z"
        fill="currentColor"
      />
      {/* Inner chisel line for depth */}
      <path
        d="M5 3H15L13.5 21H6.5L5 3Z"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}

/** Option B: set-stone square. A rotated amber square (diamond orientation). */
function SetStoneSquare({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5", className)}
      aria-hidden
    >
      <rect
        x="8"
        y="0"
        width="11.31"
        height="11.31"
        rx="1.5"
        transform="rotate(45 8 0)"
        fill="currentColor"
      />
    </svg>
  );
}

/* To switch wordmarks, change which mark renders in the Wordmark component. */
function Wordmark() {
  return (
    <a
      href="#hero"
      className="group flex items-center gap-2 rounded-sm text-foreground no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      aria-label="Citizen Mason, return to top"
    >
      {/* Option A (active): keystone glyph */}
      <KeystoneGlyph className="text-accent transition-colors duration-200 group-hover:text-accent-hover" />

      {/* Option B (inactive): uncomment to swap
      <SetStoneSquare className="text-accent transition-colors duration-200 group-hover:text-accent-hover" />
      */}

      <span className="text-sm font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
        Citizen Mason
      </span>
    </a>
  );
}

export function Nav() {
  const active = useScrollSpy(NAV_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-sm transition-[border-color] duration-200",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <Container size="xwide">
        <nav className="flex h-14 items-center justify-between gap-6">
          <Wordmark />

          <div className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = active === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <Button size="sm" asChild>
            <a href="#start">Book a call</a>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
