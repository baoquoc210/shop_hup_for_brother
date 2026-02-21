"use client";

import Link from "next/link";
import { HeartOff } from "lucide-react";

import { useShop } from "@/components/shop/shop-provider";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/products";

export default function WishlistPage() {
  const { wishlist } = useShop();

  const items = wishlist
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as (typeof PRODUCTS)[number][];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Yêu thích</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Lưu lại sản phẩm bạn thích để mua sau.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground">
            <HeartOff className="h-6 w-6" />
          </div>
          <div className="mt-4 text-lg font-bold">Chưa có sản phẩm yêu thích</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Nhấn biểu tượng trái tim để lưu sản phẩm.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/san-pham"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Xem sản phẩm
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
