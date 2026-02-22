import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ ma?: string }>;
}) {
  const { ma } = await searchParams;
  const code = ma ?? "SH-XXXX";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/25 text-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
          Đặt hàng thành công (demo)
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Cảm ơn bạn! Đây là demo frontend — đơn hàng được lưu trong trình duyệt
          để bạn có thể thử tính năng theo dõi.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-muted p-4">
          <div className="text-sm text-muted-foreground">Mã đơn hàng</div>
          <div className="mt-1 text-xl font-extrabold text-foreground">{code}</div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/don-hang?ma=${encodeURIComponent(code)}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Theo dõi đơn <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/san-pham"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    </div>
  );
}
