"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Problem() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="problem" className="w-full py-16 sm:py-20">
      <Container size="xwide">
        <div
          ref={ref}
          className={cn(
            "flex flex-col gap-4",
            "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3",
          )}
        >
          <Eyebrow>The problem</Eyebrow>
          <Heading as="h2" size="h2">
            Your best people are doing work a machine could do.
          </Heading>
          <Text tone="muted" size="lg" className="max-w-2xl">
            In a small business, the work that carries your name routes through
            a few senior people, and the repetitive parts pile up: the
            reporting, the follow-ups, the checks, the filing. Hiring is slow
            and expensive. Off-the-shelf tools want you to change how you work.
            The result is a ceiling on what you can take on. Citizen Mason
            builds the workflow that lifts it, on the tools you already run.
          </Text>
        </div>
      </Container>
    </section>
  );
}
