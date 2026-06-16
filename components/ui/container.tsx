import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      prose: "max-w-2xl", // ~68ch reading measure
      content: "max-w-4xl",
      wide: "max-w-6xl",
      xwide: "max-w-7xl", // 1280px — modern wide column for nav + sections
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "wide" },
});

export interface ContainerProps extends ComponentProps<"div">, VariantProps<typeof containerVariants> {}

export function Container({ size, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}
