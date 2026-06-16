"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Start() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="start" className="w-full py-20 sm:py-28">
      <Container size="xwide">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center gap-6 text-center",
            "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3",
          )}
        >
          <Eyebrow>Start</Eyebrow>
          <Heading as="h2" size="h2" className="max-w-xl">
            Start with one workflow.
          </Heading>
          <Text tone="muted" size="lg" className="max-w-xl">
            The first engagement ships one working workflow, fast. You see it
            run on your own work before anything else is discussed. If it earns
            its place, we build the next. Pricing is anchored to the time it
            frees and the mistakes it prevents, not to hours.
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button size="lg" asChild>
              <a href="mailto:jeff@citizenmason.com?subject=Discovery%20call">Book a discovery call</a>
            </Button>
            <Button variant="link" size="lg" asChild>
              <a href="mailto:jeff@citizenmason.com?subject=AI%20opportunity%20plan">Or get your AI opportunity plan</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
