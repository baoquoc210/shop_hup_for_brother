import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/products";

export default function PromotionPage() {
  const deals = PRODUCTS.filter((p) => p.compareAtPrice || p.badges?.includes("Giảm giá"));

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-white md:p-10">
        <Badge className="border-white/15 bg-white/10 text-white">
          Khuyến mãi (demo)
        </Badge>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
          Deal tốt • Giá rõ • Mua nhanh
        </h1>
        <p className="mt-2 max-w-prose text-sm text-zinc-200">
          Danh sách sản phẩm có giá ưu đãi (demo). Bạn có thể chỉnh dữ liệu ở
          `src/lib/products.ts`.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/san-pham"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-white px-4 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
          >
            Xem tất cả sản phẩm
          </Link>
          <Link
            href="/gio-hang"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 text-sm font-semibold text-white hover:bg-white/15"
          >
            Mở giỏ hàng
          </Link>
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
