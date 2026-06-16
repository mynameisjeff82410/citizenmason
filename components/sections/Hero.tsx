"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { NetworkCanvas } from "@/components/ui/network-canvas";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduced) {
      const rid = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(rid);
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealed(true));
    });
    return () => cancelAnimationFrame(id);
  }, [reduced]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <NetworkCanvas />

      <Container size="xwide">
        <div className="flex flex-col items-start gap-6">
          {/* Eyebrow */}
          <p
            className={cn(
              "font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
              "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
              revealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2",
            )}
          >
            AI systems for small business
          </p>

          {/* Headline */}
          <div className="overflow-hidden">
            <Heading
              as="h1"
              size="display"
              className={cn(
                "max-w-4xl text-5xl sm:text-6xl lg:text-7xl",
                "transition-all duration-1000 ease-[cubic-bezier(0.2,0,0,1)]",
                revealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
            >
              Turn the work that slows you down into software that runs itself.
            </Heading>
          </div>

          {/* Subhead */}
          <Text
            tone="muted"
            size="lg"
            className={cn(
              "max-w-2xl",
              "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] delay-300",
              revealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3",
            )}
          >
            Citizen Mason builds AI systems that take the repetitive, expensive
            work off your team and run it, on the tools you already use. You
            stay in control of every call that matters.
          </Text>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-4 pt-2",
              "transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] delay-500",
              revealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2",
            )}
          >
            <Button size="lg" asChild>
              <a href="#start">Book a discovery call</a>
            </Button>
            <Button variant="link" size="lg" asChild>
              <a href="#start">Get your AI opportunity plan</a>
            </Button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className={cn(
          "absolute bottom-0 left-0 h-px w-full",
          "bg-gradient-to-r from-transparent via-accent to-transparent",
          "transition-opacity duration-1000 delay-700",
          revealed ? "opacity-40" : "opacity-0",
        )}
      />
    </section>
  );
}
