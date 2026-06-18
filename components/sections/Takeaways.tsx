"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/text";
import { FeatureCard } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TAKEAWAYS = [
  {
    title: "Time back.",
    description:
      "The routine work runs itself, so your people do the work only they can.",
  },
  {
    title: "Runs on your tools.",
    description:
      "It works inside the apps your team already uses, with nothing new to learn.",
  },
  {
    title: "You stay in control.",
    description:
      "It prepares the work, and anything client-facing waits for your yes.",
  },
];

export function Takeaways() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="takeaways" className="w-full py-12 sm:py-16">
      <Container size="xwide">
        <div
          ref={ref}
          className={cn(
            "flex flex-col gap-8",
            "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]",
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3",
          )}
        >
          <Eyebrow>What you get</Eyebrow>
          <div className="grid gap-6 sm:grid-cols-3">
            {TAKEAWAYS.map((t, i) => (
              <FeatureCard key={t.title} index={i + 1} title={t.title}>
                {t.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
