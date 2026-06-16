import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TopbarProps extends ComponentProps<"header"> {
  /** Left slot — brand, page title, or breadcrumb. */
  left?: ReactNode;
  /** Right slot — actions, search, user menu. */
  right?: ReactNode;
  /** Stick to the top of the viewport. */
  sticky?: boolean;
}

export function Topbar({ left, right, sticky = false, className, children, ...props }: TopbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between gap-4 border-b border-border bg-surface px-4",
        sticky && "sticky top-0 z-sticky",
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-3">{left}</div>
      {children}
      <div className="flex items-center gap-2">{right}</div>
    </header>
  );
}
