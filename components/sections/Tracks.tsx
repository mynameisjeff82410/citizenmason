"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const VERTICALS = [
  {
    label: "STUDIOS",
    title: "High-craft studios",
    description:
      "Interior design, architecture, design-led firms. The principal reviews everything, and it does not scale. We build workflows that prepare the work and hand it back for sign-off: a morning brief that reads the inbox overnight, files that put themselves away. The principal stays the final word.",
  },
  {
    label: "AGENCIES",
    title: "Marketing and creative agencies",
    description:
      "You can show clicks. Proving the revenue, and keeping reporting from eating the week, is the grind. We build the workflow that turns scattered data into the number your client trusts, and stops new leads from going cold.",
  },
  {
    label: "YOUR BUSINESS",
    title: "Maybe yours",
    description:
      "If senior time is your bottleneck and a mistake is expensive, the pattern fits. The first call finds the one workflow worth building first.",
  },
];

export function Tracks() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="tracks" className="w-full py-16 sm:py-20">
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
            <Eyebrow>{"Who it's for"}</Eyebrow>
            <Heading as="h2" size="h2">
              Built around how you already work.
            </Heading>
            <Text tone="muted" size="base" className="max-w-2xl">
              Different businesses, the same pattern: senior attention is the
              bottleneck, mistakes are expensive, and the work runs on tools you
              already trust.
            </Text>
          </div>

          <SectionDivider />

          <div className="grid gap-6 sm:grid-cols-3">
            {VERTICALS.map((v, i) => (
              <FeatureCard
                key={v.label}
                index={i + 1}
                label={v.label}
                title={v.title}
              >
                {v.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
