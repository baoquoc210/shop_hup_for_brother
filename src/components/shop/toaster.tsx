"use client";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useShop } from "@/components/shop/shop-provider";

const kindStyles: Record<string, string> = {
  info: "border-border bg-card text-foreground border-l-4 border-l-brand",
  success:
    "border-border bg-card text-foreground border-l-4 border-l-emerald-500",
  error: "border-border bg-card text-foreground border-l-4 border-l-rose-500",
};

export function Toaster() {
  const { toasts, dismissToast } = useShop();

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex w-[min(420px,calc(100vw-2rem))] flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-sm",
            kindStyles[t.kind] ?? kindStyles.info,
          )}
          role="status"
          aria-live="polite"
        >
          <div className="flex-1 text-sm font-medium leading-6">{t.message}</div>
          <button
            type="button"
            onClick={() => dismissToast(t.id)}
            className="rounded-lg p-1 text-muted-foreground hover:bg-muted"
            aria-label="Đóng thông báo"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
