"use client";
import type { ComponentProps } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function Tabs({ className, ...props }: ComponentProps<typeof Root>) {
  return <Root className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function TabsList({ className, ...props }: ComponentProps<typeof List>) {
  return (
    <List
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-surface-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: ComponentProps<typeof Trigger>) {
  return (
    <Trigger
      className={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: ComponentProps<typeof Content>) {
  return (
    <Content
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        className,
      )}
      {...props}
    />
  );
}
