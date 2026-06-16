"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ITEMS: {
  title: string;
  description: string;
  badge: string;
  links?: { label: string; href: string }[];
}[] = [
  {
    title: "For a high-craft studio",
    description: "A morning brief and an email autofiler, in production.",
    badge: "In production",
  },
  {
    title: "For a data-center operator",
    description: "An AI-visibility baseline and a CapEx model, in use.",
    badge: "In production",
  },
  {
    title: "Live products",
    description: "CFO Agent, ProductOS, and The Dugout.",
    badge: "Live",
    links: [
      { label: "CFO Agent", href: "https://cfoagent-psi.vercel.app" },
      { label: "ProductOS", href: "https://product-os-psi.vercel.app" },
      { label: "The Dugout", href: "https://trydugout.vercel.app" },
    ],
  },
  {
    title: "Fifteen years shipping product",
    description: "Across crypto, fintech, gaming, and media.",
    badge: "Track record",
  },
];

export function Range() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="range" className="w-full py-16 sm:py-20">
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
            <Eyebrow>Proof</Eyebrow>
            <Heading as="h2" size="h2">
              The workflows are new. The builder is not.
            </Heading>
            <Text tone="muted" size="base" className="max-w-2xl">
              A track record of shipping, across very different rooms.
            </Text>
          </div>

          <SectionDivider />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <FeatureCard
                key={item.title}
                index={i + 1}
                label={item.badge}
                title={item.title}
              >
                {item.description}
                {item.links && (
                  <span className="mt-2 flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm text-xs font-medium text-link underline underline-offset-2 transition-colors hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {link.label}
                      </a>
                    ))}
                  </span>
                )}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
