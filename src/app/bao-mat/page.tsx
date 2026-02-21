import { SimplePage } from "@/components/simple-page";

export default function PrivacyPage() {
  return (
    <SimplePage
      title="Bảo mật"
      description="Nội dung minh hoạ (demo)."
    >
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          Demo này lưu giỏ hàng/đơn hàng trong trình duyệt để phục vụ trải nghiệm.
        </p>
        <p>
          Khi triển khai thật, hãy thêm chính sách bảo mật, cookie và tuân thủ
          quy định pháp luật.
        </p>
      </div>
    </SimplePage>
  );
}
