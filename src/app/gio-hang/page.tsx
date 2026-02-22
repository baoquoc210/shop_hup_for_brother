"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useShop } from "@/components/shop/shop-provider";
import { SafeImage } from "@/components/safe-image";
import { Button } from "@/components/ui/button";
import { formatVnd } from "@/lib/money";
import { PRODUCTS } from "@/lib/products";

export default function CartPage() {
  const { cart, setLineQuantity, removeFromCart, clearCart } = useShop();

  const lines = cart
    .map((l) => {
      const product = PRODUCTS.find((p) => p.id === l.productId);
      if (!product) return null;
      return { ...l, product };
    })
    .filter(Boolean) as Array<
    (typeof cart)[number] & { product: (typeof PRODUCTS)[number] }
  >;

  const subtotal = lines.reduce(
    (sum, l) => sum + l.product.price * l.quantity,
    0,
  );
  const shipping = subtotal >= 499000 || subtotal === 0 ? 0 : 25000;
  const total = subtotal + shipping;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Giỏ hàng</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Giỏ hàng được lưu trên trình duyệt (frontend-only).
          </p>
        </div>
        {lines.length ? (
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
          >
            <Trash2 className="h-4 w-4" />
            Xoá tất cả
          </button>
        ) : null}
      </div>

      {lines.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div className="mt-4 text-lg font-bold">Giỏ hàng đang trống</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Hãy chọn vài món bạn thích rồi quay lại đây nhé.
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
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {lines.map((l) => (
              <div
                key={`${l.productId}_${l.optionValue ?? ""}`}
                className="rounded-3xl border border-border bg-card p-4 md:p-5"
              >
                <div className="flex gap-4">
                  <Link
                    href={`/san-pham/${l.product.slug}`}
                    className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl border border-border bg-muted"
                  >
                    <SafeImage
                      src={l.product.images[0]?.src ?? "/placeholder.svg"}
                      alt={l.product.images[0]?.alt ?? l.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          href={`/san-pham/${l.product.slug}`}
                          className="line-clamp-2 text-sm font-bold text-foreground hover:underline"
                        >
                          {l.product.name}
                        </Link>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {l.product.brand} • {l.product.category}
                        </div>
                        {l.optionValue ? (
                          <div className="mt-1 text-sm text-muted-foreground">
                            {l.product.option?.name ?? "Tuỳ chọn"}:{" "}
                            <span className="font-semibold text-foreground">
                              {l.optionValue}
                            </span>
                          </div>
                        ) : null}
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-extrabold text-foreground">
                          {formatVnd(l.product.price)}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart({
                              productId: l.productId,
                              optionValue: l.optionValue,
                            })
                          }
                          className="mt-2 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                        >
                          <Trash2 className="h-4 w-4" />
                          Xoá
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-2xl border border-border bg-card">
                        <button
                          type="button"
                          onClick={() =>
                            setLineQuantity({
                              productId: l.productId,
                              optionValue: l.optionValue,
                              quantity: l.quantity - 1,
                            })
                          }
                          className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground hover:bg-muted"
                          aria-label="Giảm số lượng"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <div className="min-w-10 px-3 text-center text-sm font-bold text-foreground">
                          {l.quantity}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setLineQuantity({
                              productId: l.productId,
                              optionValue: l.optionValue,
                              quantity: l.quantity + 1,
                            })
                          }
                          className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground hover:bg-muted"
                          aria-label="Tăng số lượng"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Thành tiền:{" "}
                        <span className="font-extrabold text-foreground">
                          {formatVnd(l.product.price * l.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
              <div className="text-base font-bold text-foreground">
                Tóm tắt đơn hàng
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Tạm tính</span>
                  <span className="font-semibold text-foreground">
                    {formatVnd(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Vận chuyển</span>
                  <span className="font-semibold text-foreground">
                    {shipping === 0 ? "Miễn phí" : formatVnd(shipping)}
                  </span>
                </div>
                <div className="my-3 h-px bg-border" />
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Tổng cộng</span>
                  <span className="text-lg font-extrabold text-foreground">
                    {formatVnd(total)}
                  </span>
                </div>
              </div>

              <Link
                href="/thanh-toan"
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Tiến hành thanh toán
              </Link>

              <div className="mt-3 text-xs text-muted-foreground">
                Bằng cách tiếp tục, bạn đồng ý đây là demo frontend. Không có
                thanh toán thật.
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <Link
                  href="/san-pham"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  Mua thêm
                </Link>
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Xem lại
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
