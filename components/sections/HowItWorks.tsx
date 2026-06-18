"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const STEPS = [
  {
    title: "I find the expensive friction.",
    description:
      "The first call surfaces where your senior time and revenue leak. That's the first build.",
  },
  {
    title: "I ship one working system, fast.",
    description:
      "Live on the tools you already use, built by the person who builds it, hands on the work.",
  },
  {
    title: "It runs. You stay in control.",
    description:
      "The routine work runs on its own; anything client-facing waits for your approval. Add the next once this one pays off.",
  },
];

export function HowItWorks() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="how-it-works" className="w-full py-16 sm:py-20">
      <Container size="xwide">
        <div
          ref={ref}
          className={cn(
            "flex flex-col gap-10",
            "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3",
          )}
        >
          <div className="flex flex-col gap-3">
            <Eyebrow>How it works</Eyebrow>
            <Heading as="h2" size="h2">
              Fifteen years shipping software, now focused on one workflow at a
              time.
            </Heading>
          </div>

          <SectionDivider />

          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <FeatureCard
                key={i}
                index={i + 1}
                title={step.title}
              >
                {step.description}
              </FeatureCard>
            ))}
          </div>

          <Text tone="muted" size="base" className="max-w-2xl">
            The first workflow is usually running within 1 week.
          </Text>
        </div>
      </Container>
    </section>
  );
}
