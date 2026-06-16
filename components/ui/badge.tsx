import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors [&_svg]:size-3",
  {
    variants: {
      variant: {
        neutral: "border-transparent bg-surface-muted text-foreground",
        accent: "border-transparent bg-accent-subtle text-link",
        success: "border-transparent bg-success-subtle text-success",
        warning: "border-transparent bg-warning-subtle text-warning",
        error: "border-transparent bg-error-subtle text-error",
        info: "border-transparent bg-info-subtle text-info",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

/** Maps each variant to the dot fill, so the leading dot tracks the label color. */
const dotColor: Record<string, string> = {
  neutral: "bg-muted-foreground",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  outline: "bg-foreground",
};

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  /** Leading status dot in the variant color. a11y-decorative — the label
   *  carries the meaning, the dot reinforces it (never color alone). */
  dot?: boolean;
}

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot ? (
        <span
          aria-hidden
          className={cn("size-1.5 shrink-0 rounded-full", dotColor[variant ?? "neutral"])}
        />
      ) : null}
      {children}
    </span>
  );
}
