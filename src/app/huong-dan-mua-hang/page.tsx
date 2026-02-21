import { SimplePage } from "@/components/simple-page";

export default function GuidePage() {
  return (
    <SimplePage
      title="Hướng dẫn mua hàng"
      description="Luồng mua sắm cơ bản (demo)."
    >
      <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Vào “Sản phẩm” để tìm kiếm / lọc theo danh mục và giá.</li>
        <li>Bấm “Xem” để mở trang chi tiết và chọn tuỳ chọn (nếu có).</li>
        <li>Bấm “Thêm vào giỏ” hoặc “Mua ngay (demo)”.</li>
        <li>Vào “Giỏ hàng” để kiểm tra số lượng và tổng tiền.</li>
        <li>Vào “Thanh toán” và bấm “Đặt hàng (demo)” để hoàn tất.</li>
      </ol>
    </SimplePage>
  );
}
