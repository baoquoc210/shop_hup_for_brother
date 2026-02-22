"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, LogOut, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useShop } from "@/components/shop/shop-provider";

type UserProfile = {
  fullName: string;
  phone?: string;
};

const USER_KEY = "khanhs_studio_user_v1";

function loadUser(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as UserProfile;
    if (!parsed?.fullName) return null;
    return parsed;
  } catch {
    return null;
  }
}

export default function AccountPage() {
  const { toast } = useShop();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const u = loadUser();
    if (u) setUser(u);
  }, []);

  function login() {
    if (fullName.trim().length < 2) {
      toast("Vui lòng nhập họ và tên", "error");
      return;
    }
    const profile: UserProfile = { fullName: fullName.trim(), phone: phone.trim() || undefined };
    localStorage.setItem(USER_KEY, JSON.stringify(profile));
    setUser(profile);
    toast("Đăng nhập thành công (demo)", "success");
  }

  function logout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setFullName("");
    setPhone("");
    toast("Đã đăng xuất", "info");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
              <UserRound className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                {user ? "Tài khoản" : "Đăng nhập"}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Demo frontend — không có xác thực thật.
              </p>
            </div>
          </div>

          {user ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border bg-muted p-4 text-sm text-muted-foreground">
                Xin chào,{" "}
                <span className="font-extrabold text-foreground">{user.fullName}</span>
                {user.phone ? (
                  <div className="mt-1 text-sm text-muted-foreground">{user.phone}</div>
                ) : null}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  href="/don-hang"
                  className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  Theo dõi đơn
                </Link>
                <Link
                  href="/yeu-thich"
                  className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  Yêu thích
                </Link>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-2xl"
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Đăng xuất
              </Button>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-foreground">Họ và tên</div>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn A"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-foreground">
                  Số điện thoại (tuỳ chọn)
                </div>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xxxxxxxx"
                  inputMode="tel"
                />
              </div>
              <Button className="w-full rounded-2xl" onClick={login}>
                <LogIn className="mr-2 h-4 w-4" />
                Đăng nhập (demo)
              </Button>
              <div className="text-xs text-muted-foreground">
                Mẹo: Sau khi “Đăng nhập”, bạn có thể thử “Theo dõi đơn” hoặc “Yêu thích”.
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="text-base font-bold text-foreground">Gợi ý</div>
          <div className="mt-2 text-sm text-muted-foreground">
            Trải nghiệm nhanh các tính năng cơ bản của e‑commerce.
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/san-pham"
              className="rounded-3xl border border-border bg-muted p-6 hover:bg-muted/80"
            >
              <div className="text-sm font-bold text-foreground">Duyệt sản phẩm</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Tìm kiếm, lọc, sắp xếp.
              </div>
            </Link>
            <Link
              href="/gio-hang"
              className="rounded-3xl border border-border bg-muted p-6 hover:bg-muted/80"
            >
              <div className="text-sm font-bold text-foreground">Giỏ hàng</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Tăng/giảm số lượng, xem tổng tiền.
              </div>
            </Link>
            <Link
              href="/thanh-toan"
              className="rounded-3xl border border-border bg-muted p-6 hover:bg-muted/80"
            >
              <div className="text-sm font-bold text-foreground">Checkout</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Điền thông tin, đặt hàng (demo).
              </div>
            </Link>
            <Link
              href="/don-hang"
              className="rounded-3xl border border-border bg-muted p-6 hover:bg-muted/80"
            >
              <div className="text-sm font-bold text-foreground">Theo dõi đơn</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Tra cứu đơn vừa tạo trong trình duyệt.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
