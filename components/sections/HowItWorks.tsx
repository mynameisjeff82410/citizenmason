"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const STEPS = [
  {
    title: "Read-only first",
    description:
      "We start by reading the work you already produce. Nothing changes in your tools.",
  },
  {
    title: "Drafts, not sends",
    description:
      "The workflow prepares the work and hands it to you. You review every output before it goes anywhere.",
  },
  {
    title: "You hit Send. You sign. You decide.",
    description:
      "We earn each step. Send access and anything client-facing are yours to grant, never assumed.",
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
            <Eyebrow>How we work</Eyebrow>
            <Heading as="h2" size="h2">
              You stay in control.
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
            Your tools stay yours. The work runs on copies, and you can revoke
            access in minutes.
          </Text>
        </div>
      </Container>
    </section>
  );
}
