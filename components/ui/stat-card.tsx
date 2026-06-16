import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export interface StatCardProps {
  label: string;
  value: ReactNode;
  /** Optional change indicator, e.g. "+12.5%". */
  delta?: string;
  /** Direction of the delta — drives color and arrow. */
  trend?: "up" | "down" | "flat";
  /** Whether "up" is good (green). Set false for metrics where down is good. */
  positiveIsGood?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  delta,
  trend = "flat",
  positiveIsGood = true,
  icon,
  className,
}: StatCardProps) {
  const good = trend === "flat" ? null : (trend === "up") === positiveIsGood;
  const deltaColor = good === null ? "text-muted-foreground" : good ? "text-success" : "text-error";

  return (
    <Card className={cn("p-5", className)}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {icon && <span className="text-muted-foreground [&_svg]:size-4">{icon}</span>}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-foreground">{value}</span>
        {delta && (
          <span className={cn("inline-flex items-center gap-0.5 text-xs font-medium", deltaColor)}>
            {trend === "up" && <ArrowUp className="size-3" />}
            {trend === "down" && <ArrowDown className="size-3" />}
            {delta}
          </span>
        )}
      </div>
    </Card>
  );
}
