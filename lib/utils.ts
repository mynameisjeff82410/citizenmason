import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind conflict resolution. The last conflicting
 * utility wins, so a caller's `className` override always beats a component's
 * defaults. Every component composes its classes through this.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
