import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const linkVariants = cva(
  "rounded-sm underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        // In-prose link: underlined, uses the dedicated link role (+ visited).
        inline: "text-link visited:text-link-visited hover:text-link-hover underline",
        // Standalone link: no underline until hover.
        standalone: "text-link hover:text-link-hover hover:underline font-medium",
        // Quiet link that reads as body text until interacted with.
        quiet: "text-foreground hover:text-link",
      },
    },
    defaultVariants: { variant: "inline" },
  },
);

export interface LinkProps extends ComponentProps<"a">, VariantProps<typeof linkVariants> {
  /** Render as the child (e.g. a Next <Link>) instead of an <a>. */
  asChild?: boolean;
}

export function Link({ className, variant, asChild = false, ...props }: LinkProps) {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cn(linkVariants({ variant }), className)} {...props} />;
}
