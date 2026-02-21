"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { CreditCard, Landmark, Truck, Wallet } from "lucide-react";

import { useShop } from "@/components/shop/shop-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatVnd } from "@/lib/money";
import { PRODUCTS } from "@/lib/products";
import { saveOrder, type Order } from "@/lib/orders";

function makeOrderId() {
  const part = Math.random().toString(36).slice(2, 7).toUpperCase();
  const time = new Date();
  const dd = String(time.getDate()).padStart(2, "0");
  const mm = String(time.getMonth() + 1).padStart(2, "0");
  return `SH-${dd}${mm}-${part}`;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, toast } = useShop();

  const lines = useMemo(() => {
    return cart
      .map((l) => {
        const product = PRODUCTS.find((p) => p.id === l.productId);
        if (!product) return null;
        return { ...l, product };
      })
      .filter(Boolean) as Array<
      (typeof cart)[number] & { product: (typeof PRODUCTS)[number] }
    >;
  }, [cart]);

  const subtotal = lines.reduce(
    (sum, l) => sum + l.product.price * l.quantity,
    0,
  );
  const shipping = subtotal >= 499000 || subtotal === 0 ? 0 : 25000;
  const total = subtotal + shipping;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<Order["paymentMethod"]>("cod");

  function placeOrder() {
    if (lines.length === 0) {
      toast("Giỏ hàng trống — vui lòng thêm sản phẩm trước", "error");
      return;
    }
    if (fullName.trim().length < 2) {
      toast("Vui lòng nhập họ và tên", "error");
      return;
    }
    if (phone.replace(/[^\d]/g, "").length < 9) {
      toast("Vui lòng nhập số điện thoại hợp lệ", "error");
      return;
    }
    if (address.trim().length < 6) {
      toast("Vui lòng nhập địa chỉ giao hàng", "error");
      return;
    }

    const orderId = makeOrderId();
    const order: Order = {
      id: orderId,
      createdAt: Date.now(),
      customer: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        address: address.trim(),
      },
      items: lines.map((l) => ({
        productId: l.productId,
        quantity: l.quantity,
        optionValue: l.optionValue,
      })),
      subtotal,
      shipping,
      total,
      note: note.trim() || undefined,
      paymentMethod,
      status: "Đã tạo",
    };

    saveOrder(order);
    clearCart();
    router.push(`/don-hang/thanh-cong?ma=${encodeURIComponent(orderId)}`);
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <div className="text-lg font-bold">Chưa có sản phẩm để thanh toán</div>
        <p className="mt-2 text-sm text-muted-foreground">
          Thêm sản phẩm vào giỏ hàng rồi quay lại nhé.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/san-pham"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Xem sản phẩm
          </Link>
          <Link
            href="/gio-hang"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Về giỏ hàng
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Thanh toán</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Demo frontend: không xử lý thanh toán thật. Bạn vẫn có thể trải nghiệm
            luồng đặt hàng đầy đủ.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="text-base font-bold text-foreground">Thông tin nhận hàng</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="text-xs font-semibold text-foreground">Họ và tên</div>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Văn A"
                className="mt-2"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Số điện thoại</div>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ví dụ: 09xxxxxxxx"
                className="mt-2"
                inputMode="tel"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-foreground">Email (tuỳ chọn)</div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
                className="mt-2"
                inputMode="email"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs font-semibold text-foreground">Địa chỉ</div>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành…"
                className="mt-2"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs font-semibold text-foreground">
                Ghi chú (tuỳ chọn)
              </div>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ví dụ: giao giờ hành chính"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="text-base font-bold text-foreground">
            Phương thức thanh toán (demo)
          </div>
          <div className="mt-4 grid gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("cod")}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                paymentMethod === "cod"
                  ? "border-primary bg-muted"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground">
                <Truck className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-foreground">
                  Thanh toán khi nhận hàng (COD)
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Mô phỏng — không có thu tiền thật.
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod("bank")}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                paymentMethod === "bank"
                  ? "border-primary bg-muted"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground">
                <Landmark className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-foreground">
                  Chuyển khoản ngân hàng
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Mô phỏng — chỉ để trải nghiệm UI.
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                paymentMethod === "card"
                  ? "border-primary bg-muted"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-foreground">
                  Thẻ / Ví điện tử
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Mô phỏng — không kết nối cổng thanh toán.
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-2xl" onClick={placeOrder}>
            Đặt hàng (demo)
          </Button>
          <Link
            href="/gio-hang"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Quay lại giỏ hàng
          </Link>
        </div>
      </div>

      <aside className="lg:col-span-5">
        <div className="rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <div className="text-base font-bold text-foreground">Đơn hàng</div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
              <Wallet className="h-3.5 w-3.5" /> Demo
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {lines.map((l) => (
              <div
                key={`${l.productId}_${l.optionValue ?? ""}`}
                className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <div className="min-w-0">
                  <div className="line-clamp-2 text-sm font-bold text-foreground">
                    {l.product.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    x{l.quantity}
                    {l.optionValue ? ` • ${l.optionValue}` : ""}
                  </div>
                </div>
                <div className="text-sm font-extrabold text-foreground">
                  {formatVnd(l.product.price * l.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Tạm tính</span>
              <span className="font-semibold text-foreground">
                {formatVnd(subtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Vận chuyển</span>
              <span className="font-semibold text-foreground">
                {shipping === 0 ? "Miễn phí" : formatVnd(shipping)}
              </span>
            </div>
            <div className="my-3 h-px bg-border" />
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Tổng cộng</span>
              <span className="text-lg font-extrabold text-foreground">
                {formatVnd(total)}
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-muted p-4 text-sm text-muted-foreground">
            Miễn phí vận chuyển khi tổng đơn từ 499.000đ (demo).
          </div>
        </div>
      </aside>
    </div>
  );
}
