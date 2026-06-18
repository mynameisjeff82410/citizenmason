"use client";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text, Eyebrow } from "@/components/ui/text";
import { FeatureCard, SectionDivider } from "@/components/ui/feature-card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Pill = { label: string; icon?: string; href?: string };

const ITEMS: {
  title: string;
  description: string;
  badge: string;
  pills?: Pill[];
}[] = [
  {
    title: "For a high-craft studio",
    description:
      "The team starts the day knowing what needs action, and project email files itself into the right folders.",
    badge: "In production",
    pills: [{ label: "Morning Brief" }, { label: "Email Autofiler" }],
  },
  {
    title: "For a data-center operator",
    description:
      "They can see whether ChatGPT and Perplexity cite them, and the finance team models spend in the tool they already use.",
    badge: "In use",
    pills: [{ label: "AI Visibility Baseline" }, { label: "CapEx Model" }],
  },
  {
    title: "Live products",
    description: "Built and led, all live now.",
    badge: "Live",
    pills: [
      { label: "Crafted", icon: "/logos/crafted.svg", href: "https://craftedplayers.com" },
      { label: "Phase", icon: "/logos/phase.svg", href: "https://www.phase.cc" },
      { label: "Netrunner", icon: "/logos/netrunner.png", href: "https://www.netrunner.tax" },
      { label: "Magic Eden", icon: "/logos/magiceden.png", href: "https://magiceden.us" },
    ],
  },
  {
    title: "Fifteen years shipping product",
    description: "Shipped for teams in consulting, media, sports, and crypto.",
    badge: "Track record",
    pills: [
      { label: "Deloitte", icon: "/logos/deloitte.png" },
      { label: "NFL", icon: "/logos/nfl.png" },
      { label: "Kraken Exchange", icon: "/logos/kraken.png" },
      { label: "Miami HEAT", icon: "/logos/heat.png" },
    ],
  },
];

function Pills({ pills }: { pills: Pill[] }) {
  return (
    <span className="mt-3 flex flex-wrap gap-1.5">
      {pills.map((pill) => {
        const inner = (
          <>
            {pill.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={pill.icon}
                alt=""
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-[3px] object-contain"
              />
            )}
            <span>{pill.label}</span>
          </>
        );
        const base =
          "inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-medium";
        return pill.href ? (
          <a
            key={pill.label}
            href={pill.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              base,
              "text-foreground transition-colors hover:border-link hover:text-link",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
            )}
          >
            {inner}
          </a>
        ) : (
          <span key={pill.label} className={cn(base, "text-muted-foreground")}>
            {inner}
          </span>
        );
      })}
    </span>
  );
}

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
              Real systems and live products, shipped for real businesses.
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
                {item.pills && <Pills pills={item.pills} />}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
