"use client";

import Link from "next/link";
import { Heart, Star } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatVnd } from "@/lib/money";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useShop } from "@/components/shop/shop-provider";
import { SafeImage } from "@/components/safe-image";

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <div
      className="inline-flex items-center gap-0.5"
      aria-label={`Đánh giá ${value}/5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < full ? "fill-foreground text-foreground" : "text-border",
          )}
        />
      ))}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, isInWishlist, toggleWishlist, toast } = useShop();
  const liked = isInWishlist(product.id);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <Link href={`/san-pham/${product.slug}`} className="block">
        <div className="relative aspect-square bg-muted">
          <SafeImage
            src={product.images[0]?.src ?? "/placeholder.svg"}
            alt={product.images[0]?.alt ?? product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.badges?.slice(0, 2).map((b) => (
              <Badge
                key={b}
                className={cn(
                  "border-transparent",
                  b === "Giảm giá"
                    ? "bg-brand text-brand-foreground"
                    : b === "Bán chạy"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground",
                )}
              >
                {b}
              </Badge>
            ))}
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => {
          toggleWishlist(product.id);
          toast(liked ? "Đã xoá khỏi yêu thích" : "Đã thêm vào yêu thích", "info");
        }}
        className={cn(
          "absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25",
          liked && "border-brand bg-muted",
        )}
        aria-label={liked ? "Bỏ yêu thích" : "Thêm yêu thích"}
      >
        <Heart
          className={cn(
            "h-4 w-4",
            liked ? "fill-brand text-brand" : "text-muted-foreground",
          )}
        />
      </button>

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {product.brand}
            </div>
            <Link
              href={`/san-pham/${product.slug}`}
              className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-foreground hover:underline"
            >
              {product.name}
            </Link>
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <div className="text-base font-bold text-foreground">
            {formatVnd(product.price)}
          </div>
          {product.compareAtPrice ? (
            <div className="text-sm text-muted-foreground line-through">
              {formatVnd(product.compareAtPrice)}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Stars value={product.rating} />
            <span>{product.rating.toFixed(1)}</span>
          </div>
          <div>Đã bán {product.sold.toLocaleString("vi-VN")}</div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            href={`/san-pham/${product.slug}`}
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
          >
            Xem
          </Link>
          <Button
            size="sm"
            className="rounded-xl"
            onClick={() => addToCart({ productId: product.id, quantity: 1 })}
          >
            Thêm giỏ
          </Button>
        </div>
      </div>
    </div>
  );
}
