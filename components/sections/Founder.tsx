"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FOCUS_RING =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4 shrink-0", className)}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Founder() {
  const { ref, revealed } = useScrollReveal();

  return (
    <Section id="founder" eyebrow="Who's behind it" containerSize="xwide">
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-lg border border-border bg-surface shadow-sm",
          "transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        )}
      >
        <div className="flex flex-col md:flex-row">
          {/* Portrait — top on mobile, left (~1/3) on md+ */}
          <div className="p-6 md:w-1/3 md:shrink-0 md:p-8">
            <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-xl ring-1 ring-border md:max-w-none">
              <Image
                src="/newman-headshot.jpeg"
                alt="Jeff Newman, founder of Citizen Mason"
                width={267}
                height={267}
                sizes="(max-width: 768px) 18rem, 30vw"
                className={cn(
                  "h-full w-full object-cover",
                  "grayscale transition-[filter] duration-500 ease-out hover:grayscale-0",
                  "motion-reduce:transition-none motion-reduce:grayscale-0",
                )}
              />
            </div>
          </div>

          {/* Content — bottom on mobile, right (~2/3) on md+ */}
          <div className="flex flex-col gap-4 px-6 pb-8 md:w-2/3 md:py-8 md:pr-8 md:pl-0">
            <Heading as="h2" size="h2">
              Built by an operator, not an agency.
            </Heading>
            <Text tone="muted" size="lg" className="max-w-2xl">
              Citizen Mason is Jeff Newman. Fifteen years building and shipping
              products, including work for Kraken, Scopely, the NFL{"'"}s digital
              media, and the Miami HEAT app, plus product leadership at Magic Eden
              and Phase. The hands that built those build your workflows. You work
              with the person who ships, start to finish.
            </Text>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="https://www.linkedin.com/in/newmanjeff/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium text-link transition-colors hover:text-link-hover",
                  FOCUS_RING,
                )}
              >
                <LinkedInGlyph />
                LinkedIn
              </a>
              <a
                href="mailto:jeff@citizenmason.com"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium text-link transition-colors hover:text-link-hover",
                  FOCUS_RING,
                )}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                jeff@citizenmason.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
