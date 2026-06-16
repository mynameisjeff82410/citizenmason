"use client";
import type { ComponentProps } from "react";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export function Avatar({ className, ...props }: ComponentProps<typeof Root>) {
  return (
    <Root
      className={cn("relative flex size-9 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: ComponentProps<typeof Image>) {
  // eslint-disable-next-line jsx-a11y/alt-text -- Vendored kit code: alt is passed through via ...props by the caller.
  return <Image className={cn("aspect-square size-full object-cover", className)} {...props} />;
}

export function AvatarFallback({ className, ...props }: ComponentProps<typeof Fallback>) {
  return (
    <Fallback
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-surface-muted text-sm font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
