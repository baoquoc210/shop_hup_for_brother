import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/products";

export default function NewArrivalsPage() {
  const items = [...PRODUCTS].sort((a, b) => {
    const aNew = a.badges?.includes("Mới về") ? 1 : 0;
    const bNew = b.badges?.includes("Mới về") ? 1 : 0;
    if (aNew !== bNew) return bNew - aNew;
    return b.sold - a.sold;
  });

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
        <Badge className="border-transparent bg-emerald-600 text-white">
          Hàng mới (demo)
        </Badge>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
          Mới về để bạn chọn nhanh
        </h1>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          Danh sách gợi ý “mới” dựa trên nhãn dữ liệu. Dễ chỉnh sửa trước khi
          deploy.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/san-pham"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Duyệt sản phẩm
          </Link>
          <Link
            href="/yeu-thich"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Xem yêu thích
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
