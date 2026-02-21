"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { ArrowRight, PackageSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useShop } from "@/components/shop/shop-provider";
import { formatVnd } from "@/lib/money";
import { findOrderById, type Order } from "@/lib/orders";
import { PRODUCTS } from "@/lib/products";

function formatDateTime(ts: number) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(ts));
}

export default function OrderTrackingPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          Đang tải…
        </div>
      }
    >
      <OrderTrackingClient />
    </Suspense>
  );
}

function OrderTrackingClient() {
  const searchParams = useSearchParams();
  const { toast } = useShop();

  const [code, setCode] = useState("");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const initial = searchParams.get("ma") ?? "";
    if (initial) setCode(initial);
  }, [searchParams]);

  const items = useMemo(() => {
    if (!order) return [];
    return order.items
      .map((it) => {
        const product = PRODUCTS.find((p) => p.id === it.productId);
        if (!product) return null;
        return { ...it, product };
      })
      .filter(Boolean) as Array<
      Order["items"][number] & { product: (typeof PRODUCTS)[number] }
    >;
  }, [order]);

  function lookup() {
    const trimmed = code.trim();
    if (!trimmed) {
      toast("Nhập mã đơn để tra cứu", "error");
      return;
    }
    const found = findOrderById(trimmed);
    if (!found) {
      setOrder(null);
      toast("Không tìm thấy đơn hàng trong trình duyệt này", "error");
      return;
    }
    setOrder(found);
    toast("Đã tìm thấy đơn hàng", "success");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Theo dõi đơn hàng</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Demo frontend: đơn hàng được lưu trong trình duyệt bạn vừa đặt.
          </p>
        </div>
        <Link
          href="/san-pham"
          className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted md:inline-flex"
        >
          Xem sản phẩm <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6">
        <div className="text-base font-bold text-foreground">Tra cứu</div>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Nhập mã đơn hàng (ví dụ: SH-2102-ABCDE)"
          />
          <Button className="rounded-2xl" onClick={lookup}>
            Tra cứu
          </Button>
        </div>
      </div>

      {order ? (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm text-muted-foreground">Mã đơn</div>
                  <div className="mt-1 text-xl font-extrabold text-foreground">
                    {order.id}
                  </div>
                </div>
                <div className="rounded-full bg-muted px-4 py-2 text-sm font-bold text-foreground">
                  {order.status}
                </div>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                Tạo lúc: <span className="font-semibold">{formatDateTime(order.createdAt)}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="text-base font-bold text-foreground">Sản phẩm</div>
              <div className="mt-4 space-y-3">
                {items.map((it) => (
                  <div
                    key={`${it.productId}_${it.optionValue ?? ""}`}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="min-w-0">
                      <Link
                        href={`/san-pham/${it.product.slug}`}
                        className="line-clamp-2 text-sm font-bold text-foreground hover:underline"
                      >
                        {it.product.name}
                      </Link>
                      <div className="mt-1 text-sm text-muted-foreground">
                        x{it.quantity}
                        {it.optionValue ? ` • ${it.optionValue}` : ""}
                      </div>
                    </div>
                    <div className="text-sm font-extrabold text-foreground">
                      {formatVnd(it.product.price * it.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-base font-bold text-foreground">Người nhận</div>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">
                      {order.customer.fullName}
                    </span>
                  </div>
                  <div>{order.customer.phone}</div>
                  {order.customer.email ? <div>{order.customer.email}</div> : null}
                  <div className="pt-2 text-sm text-muted-foreground">
                    {order.customer.address}
                  </div>
                  {order.note ? (
                    <div className="pt-2 text-sm text-muted-foreground">
                      Ghi chú: <span className="font-medium">{order.note}</span>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-base font-bold text-foreground">Tổng tiền</div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Tạm tính</span>
                    <span className="font-semibold text-foreground">
                      {formatVnd(order.subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Vận chuyển</span>
                    <span className="font-semibold text-foreground">
                      {order.shipping === 0 ? "Miễn phí" : formatVnd(order.shipping)}
                    </span>
                  </div>
                  <div className="my-3 h-px bg-border" />
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Tổng cộng</span>
                    <span className="text-lg font-extrabold text-foreground">
                      {formatVnd(order.total)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/san-pham"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Mua sắm tiếp <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      ) : (
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground">
            <PackageSearch className="h-6 w-6" />
          </div>
          <div className="mt-4 text-lg font-bold">Chưa có kết quả</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Nhập mã đơn để tra cứu. Nếu bạn vừa đặt hàng, hãy kiểm tra lại trang
            “Thanh toán” và hoàn tất đặt hàng (demo).
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/thanh-toan"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Tới thanh toán
            </Link>
            <Link
              href="/gio-hang"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
