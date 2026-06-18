"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ALTERNATIVES = [
  {
    title: "A SaaS subscription",
    description:
      "You pay every month to force your work into its steps. It never quite fits, because it was never built for you.",
  },
  {
    title: "ChatGPT in a browser tab",
    description:
      "Your team has dabbled in a chat box and seen the hype online. Turning that into real ROI is the part nobody shows you. I find where AI pays off, and build it.",
  },
  {
    title: "An agency",
    description:
      "An agency hands you a one-off build and a retainer. I build a proven system you put to work, refined across every business I build for, so you get better results at a better price than starting from scratch.",
  },
];

export function WhyCustom() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="why-custom" className="w-full py-16 sm:py-20">
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
            <Eyebrow>Why custom</Eyebrow>
            <Heading as="h2" size="h2">
              I build the system your business is missing.
            </Heading>
            <Text tone="muted" size="base" className="max-w-2xl">
              Off-the-shelf tools cover what every business shares. The part
              that makes you money is the part they skip. That is what gets
              built here.
            </Text>
          </div>

          <SectionDivider />

          <div className="grid gap-6 sm:grid-cols-3">
            {ALTERNATIVES.map((a, i) => (
              <FeatureCard key={a.title} index={i + 1} title={a.title}>
                {a.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
