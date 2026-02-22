import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/products";

export default function PromotionPage() {
  const deals = PRODUCTS.filter((p) => p.compareAtPrice || p.badges?.includes("Giảm giá"));

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(650px_circle_at_15%_20%,var(--brand),transparent_60%),radial-gradient(900px_circle_at_85%_35%,var(--primary),transparent_55%)]" />
        <div className="relative">
          <Badge className="border-transparent bg-brand text-brand-foreground">
            Khuyến mãi (demo)
          </Badge>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Deal xinh • Giá dễ chịu • Mua nhanh
          </h1>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground">
            Danh sách sản phẩm có giá ưu đãi (demo). Bạn có thể chỉnh dữ liệu ở
            `src/lib/products.ts`.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/san-pham"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Xem tất cả sản phẩm
            </Link>
            <Link
              href="/gio-hang"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Mở giỏ hàng
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
