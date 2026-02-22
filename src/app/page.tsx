import Link from "next/link";
import { ArrowRight, BadgeCheck, RotateCcw, Truck } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export default function Home() {
  const featured = PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 md:px-10 md:py-16">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(700px_circle_at_20%_20%,var(--brand),transparent_60%),radial-gradient(900px_circle_at_80%_30%,var(--primary),transparent_55%),radial-gradient(700px_circle_at_40%_90%,var(--muted),transparent_55%)]" />
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="border-transparent bg-brand text-brand-foreground">
              Khanh's Studio Beauty (demo)
            </Badge>
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Mỹ phẩm dịu nhẹ — đẹp tự nhiên mỗi ngày.
            </h1>
            <p className="max-w-prose text-sm leading-6 text-muted-foreground md:text-base">
              Chọn skincare, trang điểm và nước hoa theo nhu cầu. Lọc nhanh, thêm
              giỏ 1 chạm và checkout giả lập trong vài cú click — tối ưu cho
              mobile.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/san-pham"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Khám phá mỹ phẩm <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/khuyen-mai"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
              >
                Xem khuyến mãi <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-muted p-4">
                <div className="text-sm font-semibold">Kiểm tra nhanh</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Tóm tắt thông tin rõ ràng
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                <div className="text-sm font-semibold">Thêm giỏ 1 chạm</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Lưu giỏ hàng bằng trình duyệt
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-4">
                <div className="text-sm font-semibold">Checkout gọn</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Form tối ưu cho mobile
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {featured.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={`/san-pham/${p.slug}`}
                className="group rounded-3xl border border-border bg-muted p-4 transition hover:bg-secondary"
              >
                <div className="text-xs font-semibold text-muted-foreground">
                  {p.brand}
                </div>
                <div className="mt-1 line-clamp-2 text-sm font-semibold leading-6">
                  {p.name}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  Xem ngay <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Danh mục nổi bật</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Chọn nhanh theo nhu cầu của bạn.
            </p>
          </div>
          <Link
            href="/san-pham"
            className="text-sm font-semibold text-foreground hover:underline"
          >
            Xem tất cả
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.slice(0, 6).map((c) => (
            <Link
              key={c.key}
              href={`/san-pham?danhMuc=${encodeURIComponent(c.key)}`}
              className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">{c.label}</div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Khám phá sản phẩm {c.label.toLowerCase()} đang được quan tâm.
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Đang hot</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Gợi ý nhanh để bạn bắt đầu.
            </p>
          </div>
          <Link
            href="/hang-moi"
            className="text-sm font-semibold text-foreground hover:underline"
          >
            Xem hàng mới
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Trải nghiệm gọn</div>
              <div className="text-sm text-muted-foreground">
                Tập trung đúng thứ bạn cần.
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-foreground">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Giao nhanh</div>
              <div className="text-sm text-muted-foreground">
                Nội thành nhận sớm hơn.
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-brand">
              <RotateCcw className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Đổi trả dễ</div>
              <div className="text-sm text-muted-foreground">
                Hỗ trợ trong 7 ngày.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-foreground">
              Sẵn sàng mua sắm?
            </div>
            <div className="text-sm text-muted-foreground">
              Vào trang sản phẩm để tìm kiếm, lọc và thêm giỏ hàng.
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/san-pham"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Mở danh sách sản phẩm
            </Link>
            <Link
              href="/tro-giup"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Cần hỗ trợ?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
