import { SimplePage } from "@/components/simple-page";

export default function ContactPage() {
  return (
    <SimplePage
      title="Liên hệ"
      description="Thông tin liên hệ minh hoạ (demo)."
    >
      <div className="space-y-2 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">Tên shop:</span> ShopHub
        </div>
        <div>
          <span className="font-semibold text-foreground">Email:</span>{" "}
          support@shophub.demo
        </div>
        <div>
          <span className="font-semibold text-foreground">Hotline:</span> 0900 000 000
        </div>
        <div className="pt-2 text-sm text-muted-foreground">
          Đây là demo frontend. Bạn có thể thay thông tin thật trước khi deploy.
        </div>
      </div>
    </SimplePage>
  );
}
