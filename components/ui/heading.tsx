import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const headingVariants = cva("font-display font-semibold tracking-tight text-foreground text-balance", {
  variants: {
    size: {
      display: "text-5xl sm:text-6xl leading-tight2 tracking-[-0.02em]",
      h1: "text-4xl sm:text-5xl leading-[1.1]",
      h2: "text-3xl sm:text-4xl leading-tight",
      h3: "text-2xl leading-snug",
      h4: "text-xl leading-snug",
      h5: "text-lg",
      h6: "text-base",
    },
  },
  defaultVariants: { size: "h2" },
});

export interface HeadingProps
  extends Omit<ComponentProps<"h2">, "color">,
    VariantProps<typeof headingVariants> {
  /** Semantic element — decoupled from visual `size` so the document outline
   *  stays correct regardless of how big the heading looks (SEO/a11y). */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ as = "h2", size, className, ...props }: HeadingProps) {
  const Comp = as as ElementType;
  return <Comp className={cn(headingVariants({ size }), className)} {...props} />;
}
