import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const textVariants = cva("", {
  variants: {
    size: {
      lg: "text-lg leading-relaxed",
      base: "text-base leading-relaxed",
      sm: "text-sm leading-normal",
      xs: "text-xs leading-normal",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      subtle: "text-subtle-foreground",
      accent: "text-accent",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: { size: "base", tone: "default", weight: "normal" },
});

export interface TextProps
  extends Omit<ComponentProps<"p">, "color">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
}

export function Text({ as = "p", size, tone, weight, className, ...props }: TextProps) {
  const Comp = as as ElementType;
  return <Comp className={cn(textVariants({ size, tone, weight }), className)} {...props} />;
}

/** Uppercase tracked label that sits above a heading. */
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xs font-medium uppercase tracking-[0.14em] text-link", className)}
      {...props}
    />
  );
}
