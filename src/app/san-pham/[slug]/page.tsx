import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="space-y-10">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link
          href={`/san-pham?danhMuc=${encodeURIComponent(product.category)}`}
          className="hover:underline"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-foreground font-medium">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} />
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <ProductPurchasePanel product={product} />
          </div>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              Thông tin sản phẩm
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {product.shortDescription}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((h) => (
                <div
                  key={h}
                  className="rounded-2xl border border-border bg-muted p-4 text-sm font-medium text-foreground"
                >
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground">Lưu ý</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Thông tin hiển thị mang tính demo (frontend-only).</li>
                <li>Giỏ hàng được lưu trong trình duyệt của bạn.</li>
                <li>Checkout là mô phỏng — không có thanh toán thật.</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="text-sm font-semibold text-foreground">Gợi ý nhanh</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Xem thêm sản phẩm cùng danh mục để chọn nhanh.
            </div>
            <Link
              href={`/san-pham?danhMuc=${encodeURIComponent(product.category)}`}
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Xem {product.category.toLowerCase()}
            </Link>
          </div>
        </aside>
      </section>

      {related.length ? (
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Sản phẩm liên quan
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Có thể bạn cũng thích.
              </p>
            </div>
            <Link
              href={`/san-pham?danhMuc=${encodeURIComponent(product.category)}`}
              className="text-sm font-semibold text-foreground hover:underline"
            >
              Xem thêm
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
