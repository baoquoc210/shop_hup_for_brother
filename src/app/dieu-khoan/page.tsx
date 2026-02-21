import { SimplePage } from "@/components/simple-page";

export default function TermsPage() {
  return (
    <SimplePage
      title="Điều khoản"
      description="Nội dung minh hoạ (demo)."
    >
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          Website này là demo frontend phục vụ mục đích trình diễn UI/UX. Không
          có thanh toán thật và không xử lý dữ liệu nhạy cảm.
        </p>
        <p>
          Khi triển khai thực tế, bạn nên cập nhật điều khoản phù hợp hoạt động
          kinh doanh.
        </p>
      </div>
    </SimplePage>
  );
}
