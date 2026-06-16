import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container, type ContainerProps } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Eyebrow, Text } from "@/components/ui/text";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      sm: "py-12",
      md: "py-16 sm:py-20",
      lg: "py-20 sm:py-28",
    },
  },
  defaultVariants: { spacing: "md" },
});

export interface SectionProps
  extends Omit<ComponentProps<"section">, "title">,
    VariantProps<typeof sectionVariants> {
  /** Mono/uppercase label above the title. */
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  /** Heading element for the title (outline control). */
  titleAs?: "h1" | "h2" | "h3";
  /** Center the header block. */
  centered?: boolean;
  containerSize?: ContainerProps["size"];
}

export function Section({
  eyebrow,
  title,
  description,
  titleAs = "h2",
  centered = false,
  containerSize,
  spacing,
  className,
  children,
  ...props
}: SectionProps) {
  const hasHeader = eyebrow || title || description;
  return (
    <section className={cn(sectionVariants({ spacing }), className)} {...props}>
      <Container size={containerSize}>
        {hasHeader && (
          <div className={cn("flex flex-col gap-3", centered && "items-center text-center")}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <Heading as={titleAs} size="h2" className={cn(centered && "max-w-2xl")}>
                {title}
              </Heading>
            )}
            {description && (
              <Text tone="muted" size="lg" className={cn("max-w-2xl", centered && "mx-auto")}>
                {description}
              </Text>
            )}
          </div>
        )}
        {children && <div className={cn(hasHeader && "mt-10")}>{children}</div>}
      </Container>
    </section>
  );
}
