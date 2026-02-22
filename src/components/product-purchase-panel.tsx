"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Minus, Plus, ShieldCheck } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatVnd } from "@/lib/money";
import { cn } from "@/lib/utils";
import { RatingStars } from "@/components/rating-stars";
import { Button } from "@/components/ui/button";
import { useShop } from "@/components/shop/shop-provider";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, isInWishlist, toggleWishlist, toast } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [optionValue, setOptionValue] = useState<string>("");

  const liked = isInWishlist(product.id);

  const option = product.option;
  const optionValues = useMemo(() => option?.values ?? [], [option]);

  function requireOption() {
    if (!option) return true;
    if (optionValue) return true;
    toast(`Vui lòng chọn ${option.name.toLowerCase()}`, "error");
    return false;
  }

  function add() {
    if (!requireOption()) return;
    addToCart({ productId: product.id, quantity, optionValue: optionValue || undefined });
  }

  function buyNow() {
    if (!requireOption()) return;
    addToCart({ productId: product.id, quantity, optionValue: optionValue || undefined });
    router.push("/thanh-toan");
  }

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {product.brand} • {product.category}
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            {product.name}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <RatingStars value={product.rating} className="scale-[0.95]" />
              <span className="font-semibold text-foreground">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-border">•</span>
            <div>Đã bán {product.sold.toLocaleString("vi-VN")}</div>
            <span className="text-border">•</span>
            <div className="font-medium">{product.conditionLabel}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            toggleWishlist(product.id);
            toast(liked ? "Đã xoá khỏi yêu thích" : "Đã thêm vào yêu thích", "info");
          }}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition",
            liked
              ? "border-brand bg-muted text-brand"
              : "border-border bg-card text-muted-foreground hover:bg-muted",
          )}
          aria-label={liked ? "Bỏ yêu thích" : "Thêm yêu thích"}
        >
          <Heart className={cn("h-5 w-5", liked && "fill-brand")} />
        </button>
      </div>

      <div className="rounded-3xl border border-border bg-card p-5">
        <div className="flex items-baseline justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Giá</div>
            <div className="text-2xl font-extrabold text-foreground">
              {formatVnd(product.price)}
            </div>
          </div>
          {product.compareAtPrice ? (
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Giá niêm yết</div>
              <div className="text-sm font-semibold text-muted-foreground line-through">
                {formatVnd(product.compareAtPrice)}
              </div>
            </div>
          ) : null}
        </div>

        {option ? (
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">
                Chọn {option.name.toLowerCase()}
              </div>
              {optionValue ? (
                <div className="text-sm text-muted-foreground">
                  Đã chọn: <span className="font-semibold">{optionValue}</span>
                </div>
              ) : (
                <div className="text-sm text-brand">Chưa chọn</div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {optionValues.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setOptionValue(v)}
                  className={cn(
                    "h-10 rounded-2xl border px-4 text-sm font-semibold transition",
                    v === optionValue
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:bg-muted",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-sm font-semibold text-foreground">Số lượng</div>
          <div className="inline-flex items-center rounded-2xl border border-border bg-card">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground hover:bg-muted"
              aria-label="Giảm số lượng"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="min-w-10 px-3 text-center text-sm font-semibold text-foreground">
              {quantity}
            </div>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground hover:bg-muted"
              aria-label="Tăng số lượng"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button className="rounded-2xl" onClick={add}>
            Thêm vào giỏ
          </Button>
          <Button
            variant="secondary"
            className="rounded-2xl bg-brand text-brand-foreground hover:bg-brand/90"
            onClick={buyNow}
          >
            Mua ngay (demo)
          </Button>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-muted p-4 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-brand" />
          <div>
            <div className="font-semibold text-foreground">Yên tâm mua sắm</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Đây là demo frontend. Nút “Mua ngay” sẽ đưa bạn đến trang checkout
              giả lập — không có thanh toán thật.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
