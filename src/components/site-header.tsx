"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";

import { CATEGORIES } from "@/lib/products";
import { cn } from "@/lib/utils";
import { useShop } from "@/components/shop/shop-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
        active && "text-foreground",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cartCount, wishlistCount } = useShop();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setQuery(q);
  }, [searchParams]);

  const categoryLinks = useMemo(
    () =>
      CATEGORIES.map((c) => ({
        key: c.key,
        label: c.label,
        href: `/san-pham?danhMuc=${encodeURIComponent(c.key)}`,
      })),
    [CATEGORIES],
  );

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    const next = trimmed.length ? `/san-pham?q=${encodeURIComponent(trimmed)}` : "/san-pham";
    router.push(next);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card text-foreground">
      <div className="bg-muted">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs text-muted-foreground">
          <div className="hidden sm:block">
            Miễn phí vận chuyển nội thành cho đơn từ 499.000đ
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-foreground transition-colors" href="/tro-giup">
              Trợ giúp
            </Link>
            <Link className="hover:text-foreground transition-colors" href="/don-hang">
              Theo dõi đơn
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card hover:bg-muted md:hidden"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-brand-foreground font-bold">
            S
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            ShopHub
          </span>
        </Link>

        <form
          onSubmit={submitSearch}
          className="relative ml-auto hidden w-full max-w-xl md:block"
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm sản phẩm, thương hiệu, danh mục…"
            className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-ring/30"
            aria-label="Tìm kiếm"
          />
        </form>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/yeu-thich"
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-3 text-sm text-foreground transition-colors hover:bg-muted"
          >
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Yêu thích</span>
            {wishlistCount > 0 ? (
              <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-muted px-1.5 py-0.5 text-[11px] leading-none text-foreground">
                {wishlistCount}
              </span>
            ) : null}
          </Link>
          <Link
            href="/gio-hang"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Giỏ hàng</span>
            {cartCount > 0 ? (
              <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-primary-foreground px-1.5 py-0.5 text-[11px] leading-none text-primary">
                {cartCount}
              </span>
            ) : null}
          </Link>
          <ThemeToggle />
          <Link
            href="/tai-khoan"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted"
            aria-label="Tài khoản"
          >
            <UserRound className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <nav className="hidden border-t border-border bg-card md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-3">
          <NavLink href="/san-pham" active={pathname === "/san-pham"}>
            Tất cả
          </NavLink>
          {categoryLinks.map((c) => (
            <NavLink
              key={c.href}
              href={c.href}
              active={searchParams.get("danhMuc") === c.key}
            >
              {c.label}
            </NavLink>
          ))}
          <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
            <Link className="hover:text-foreground transition-colors" href="/khuyen-mai">
              Khuyến mãi
            </Link>
            <Link className="hover:text-foreground transition-colors" href="/hang-moi">
              Hàng mới
            </Link>
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-border bg-card md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-4">
            <form onSubmit={submitSearch} className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm sản phẩm…"
                className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:ring-2 focus:ring-ring/30"
                aria-label="Tìm kiếm"
              />
            </form>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="/san-pham"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Tất cả sản phẩm
              </Link>
              <Link
                href="/khuyen-mai"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Khuyến mãi
              </Link>
              {categoryLinks.slice(0, 6).map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {c.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Link
                href="/tai-khoan"
                onClick={() => setMobileOpen(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <UserRound className="h-4 w-4" />
                Tài khoản
              </Link>
              <Link
                href="/gio-hang"
                onClick={() => setMobileOpen(false)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ShoppingBag className="h-4 w-4" />
                Giỏ hàng
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
