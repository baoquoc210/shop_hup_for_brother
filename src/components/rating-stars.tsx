import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function RatingStars({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const full = Math.round(value);
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Đánh giá ${value}/5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < full ? "fill-foreground text-foreground" : "text-border",
          )}
        />
      ))}
    </div>
  );
}
