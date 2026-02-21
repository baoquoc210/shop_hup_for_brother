import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground">
          <SearchX className="h-6 w-6" />
        </div>
        <div className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
          Không tìm thấy trang
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Link có thể đã bị thay đổi hoặc không còn tồn tại.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Về trang chủ <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/san-pham"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}
