import { SimplePage } from "@/components/simple-page";

export default function ReturnPolicyPage() {
  return (
    <SimplePage
      title="Chính sách đổi trả"
      description="Nội dung minh hoạ (demo)."
    >
      <div className="space-y-3 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Đổi trả trong 7 ngày</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Sản phẩm còn nguyên tem/mác, chưa qua sử dụng.</li>
          <li>Giữ lại hoá đơn/mã đơn hàng (demo).</li>
          <li>Phí vận chuyển đổi trả tuỳ trường hợp.</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Lưu ý: Đây là website demo frontend, nội dung trên chỉ để minh hoạ.
        </p>
      </div>
    </SimplePage>
  );
}
