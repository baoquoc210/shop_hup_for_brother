"use client";

import { useMemo, useState } from "react";

import type { ProductImage } from "@/lib/products";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/safe-image";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const safe = useMemo(
    () =>
      images.length
        ? images
        : [{ src: "/placeholder.svg", alt: "Ảnh sản phẩm" }],
    [images],
  );
  const [index, setIndex] = useState(0);

  const current = safe[Math.min(index, safe.length - 1)];

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted">
        <SafeImage
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      {safe.length > 1 ? (
        <div className="grid grid-cols-5 gap-2">
          {safe.slice(0, 5).map((img, i) => (
            <button
              key={`${img.src}_${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-2xl border bg-muted",
                i === index
                  ? "border-primary"
                  : "border-border hover:border-foreground/30",
              )}
              aria-label={`Xem ảnh ${i + 1}`}
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
