import { SimplePage } from "@/components/simple-page";

export default function HelpPage() {
  return (
    <SimplePage
      title="Trợ giúp"
      description="Một vài câu hỏi thường gặp (demo)."
    >
      <div className="space-y-3">
        <details className="rounded-2xl border border-border bg-card p-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Website này có thanh toán thật không?
          </summary>
          <div className="mt-2 text-sm text-muted-foreground">
            Không. Đây là demo frontend. Bạn có thể thêm giỏ hàng và checkout giả
            lập để trải nghiệm UI/UX.
          </div>
        </details>

        <details className="rounded-2xl border border-border bg-card p-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Giỏ hàng được lưu ở đâu?
          </summary>
          <div className="mt-2 text-sm text-muted-foreground">
            Giỏ hàng và đơn hàng (demo) được lưu trong trình duyệt (localStorage).
          </div>
        </details>

        <details className="rounded-2xl border border-border bg-card p-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Làm sao để theo dõi đơn hàng?
          </summary>
          <div className="mt-2 text-sm text-muted-foreground">
            Sau khi đặt hàng (demo), bạn sẽ nhận mã đơn. Dùng mã đó ở trang “Theo
            dõi đơn” để xem lại chi tiết.
          </div>
        </details>
      </div>
    </SimplePage>
  );
}
