import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-accent text-accent-foreground hover:bg-accent-hover active:bg-accent-active",
        outline: "border border-border bg-transparent text-foreground hover:bg-surface-subtle",
        ghost: "bg-transparent text-foreground hover:bg-surface-subtle",
        subtle: "bg-accent-subtle text-link hover:bg-accent-subtle/70",
        destructive: "bg-error text-error-foreground hover:bg-error/90",
        link: "text-link underline-offset-4 hover:underline hover:text-link-hover",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4",
        lg: "h-10 px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. an <a> or Next <Link>) instead of a <button>. */
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
