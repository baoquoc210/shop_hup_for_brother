import Link from "next/link";

import { cn } from "@/lib/utils";

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted-foreground hover:text-foreground transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-base font-semibold tracking-tight">
              ShopHub
            </div>
            <p className="text-sm text-muted-foreground">
              Demo frontend e‑commerce: trải nghiệm mượt, đơn giản, dễ mua. Không
              xử lý thanh toán thật.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Danh mục</div>
            <div className="grid gap-2">
              <FooterLink href="/san-pham?danhMuc=Giày">Giày</FooterLink>
              <FooterLink href="/san-pham?danhMuc=Áo">Áo</FooterLink>
              <FooterLink href="/san-pham?danhMuc=Túi">Túi</FooterLink>
              <FooterLink href="/san-pham?danhMuc=Phụ kiện">Phụ kiện</FooterLink>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Hỗ trợ</div>
            <div className="grid gap-2">
              <FooterLink href="/tro-giup">Trợ giúp</FooterLink>
              <FooterLink href="/huong-dan-mua-hang">Hướng dẫn mua hàng</FooterLink>
              <FooterLink href="/chinh-sach-doi-tra">Chính sách đổi trả</FooterLink>
              <FooterLink href="/lien-he">Liên hệ</FooterLink>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Tài khoản</div>
            <div className="grid gap-2">
              <FooterLink href="/tai-khoan">Tài khoản</FooterLink>
              <FooterLink href="/gio-hang">Giỏ hàng</FooterLink>
              <FooterLink href="/yeu-thich">Yêu thích</FooterLink>
              <FooterLink href="/don-hang">Theo dõi đơn</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} ShopHub. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex gap-4">
            <FooterLink href="/dieu-khoan">Điều khoản</FooterLink>
            <FooterLink href="/bao-mat">Bảo mật</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
