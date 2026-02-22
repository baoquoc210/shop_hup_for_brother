"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Filter, Search, X } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES, PRODUCTS, type Category, type Product } from "@/lib/products";
import { cn, normalizeText } from "@/lib/utils";

type SortKey = "de-xuat" | "ban-chay" | "danh-gia" | "gia-tang" | "gia-giam";

function sortProducts(items: Product[], sort: SortKey) {
  const copy = [...items];
  switch (sort) {
    case "ban-chay":
      return copy.sort((a, b) => b.sold - a.sold);
    case "danh-gia":
      return copy.sort((a, b) => b.rating - a.rating);
    case "gia-tang":
      return copy.sort((a, b) => a.price - b.price);
    case "gia-giam":
      return copy.sort((a, b) => b.price - a.price);
    case "de-xuat":
    default:
      return copy.sort((a, b) => b.rating * 10 + b.sold / 100 - (a.rating * 10 + a.sold / 100));
  }
}

function parseNumber(value: string | null) {
  if (!value) return "";
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return "";
  return String(Math.floor(n));
}

export default function ProductListingPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          Đang tải…
        </div>
      }
    >
      <ProductListingClient />
    </Suspense>
  );
}

function ProductListingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("de-xuat");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
    const dm = searchParams.get("danhMuc");
    const isValidCategory = dm && CATEGORIES.some((c) => c.key === dm);
    setCategory((isValidCategory ? (dm as Category) : "") ?? "");
    setMinPrice(parseNumber(searchParams.get("giaMin")));
    setMaxPrice(parseNumber(searchParams.get("giaMax")));
    const s = searchParams.get("sapXep");
    const validSort: SortKey[] = [
      "de-xuat",
      "ban-chay",
      "danh-gia",
      "gia-tang",
      "gia-giam",
    ];
    setSort(validSort.includes(s as SortKey) ? (s as SortKey) : "de-xuat");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = normalizeText(query.trim());
    const min = minPrice ? Number(minPrice) : null;
    const max = maxPrice ? Number(maxPrice) : null;

    const items = PRODUCTS.filter((p) => {
      if (category && p.category !== category) return false;
      if (min != null && p.price < min) return false;
      if (max != null && p.price > max) return false;
      if (!q) return true;

      const haystack = normalizeText(
        [p.name, p.brand, p.category, p.shortDescription].join(" "),
      );
      return haystack.includes(q);
    });

    return sortProducts(items, sort);
  }, [category, maxPrice, minPrice, query, sort]);

  function applyToUrl(next?: Partial<{
    query: string;
    category: string;
    minPrice: string;
    maxPrice: string;
    sort: SortKey;
  }>) {
    const q = (next?.query ?? query).trim();
    const dm = next?.category ?? category;
    const min = next?.minPrice ?? minPrice;
    const max = next?.maxPrice ?? maxPrice;
    const s = next?.sort ?? sort;

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (dm) params.set("danhMuc", dm);
    if (min) params.set("giaMin", min);
    if (max) params.set("giaMax", max);
    if (s && s !== "de-xuat") params.set("sapXep", s);

    const qs = params.toString();
    router.replace(qs ? `/san-pham?${qs}` : "/san-pham");
  }

  function resetFilters() {
    setQuery("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSort("de-xuat");
    router.replace("/san-pham");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sản phẩm</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Tìm nhanh, lọc gọn — trải nghiệm mua sắm đơn giản.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/khuyen-mai"
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted md:inline-flex"
          >
            Khuyến mãi
          </Link>
          <Link
            href="/hang-moi"
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted md:inline-flex"
          >
            Hàng mới
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <div className="text-xs font-semibold text-foreground">Tìm kiếm</div>
            <div className="mt-2 relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") applyToUrl({ query });
                }}
                placeholder="Ví dụ: serum, son, kem chống nắng…"
                className="pl-11"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold text-foreground">Danh mục</div>
            <select
              value={category}
              onChange={(e) => {
                const next = e.target.value as Category | "";
                setCategory(next);
                applyToUrl({ category: next });
              }}
              className="mt-2 h-11 w-full rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground outline-none transition focus:ring-2 focus:ring-ring/25"
            >
              <option value="">Tất cả</option>
              {CATEGORIES.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold text-foreground">Giá từ</div>
            <Input
              inputMode="numeric"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="0"
              className="mt-2"
            />
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold text-foreground">Giá đến</div>
            <Input
              inputMode="numeric"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="0"
              className="mt-2"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => applyToUrl()}
            >
              <Filter className="mr-2 h-4 w-4" />
              Áp dụng
            </Button>

            <button
              type="button"
              onClick={resetFilters}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-transparent bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground hover:bg-secondary/80",
                (query || category || minPrice || maxPrice || sort !== "de-xuat") ? "" : "opacity-50 pointer-events-none",
              )}
            >
              <X className="h-3.5 w-3.5" />
              Xoá lọc
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 md:justify-end">
            <div className="text-sm text-muted-foreground">
              {filtered.length.toLocaleString("vi-VN")} kết quả
            </div>
            <select
              value={sort}
              onChange={(e) => {
                const next = e.target.value as SortKey;
                setSort(next);
                applyToUrl({ sort: next });
              }}
              className="h-10 rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground outline-none transition focus:ring-2 focus:ring-ring/25"
              aria-label="Sắp xếp"
            >
              <option value="de-xuat">Đề xuất</option>
              <option value="ban-chay">Bán chạy</option>
              <option value="danh-gia">Đánh giá cao</option>
              <option value="gia-tang">Giá tăng dần</option>
              <option value="gia-giam">Giá giảm dần</option>
            </select>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card p-10 text-center">
          <div className="text-lg font-bold">Không tìm thấy sản phẩm phù hợp</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Thử đổi từ khoá hoặc xoá bớt bộ lọc để xem thêm kết quả.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="rounded-2xl" onClick={resetFilters}>
              Xoá bộ lọc
            </Button>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
