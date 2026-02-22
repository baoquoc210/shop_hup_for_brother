import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ShopProvider } from "@/components/shop/shop-provider";
import { Toaster } from "@/components/shop/toaster";
import { Suspense } from "react";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShopHub",
    template: "%s | ShopHub",
  },
  description:
    "ShopHub Beauty (demo) — mỹ phẩm nữ: tìm kiếm, lọc, xem chi tiết, thêm giỏ hàng và checkout giả lập.",
};

const THEME_INIT_SCRIPT = `
(() => {
  try {
    const key = "shophub_theme";
    const stored = localStorage.getItem(key);
    const theme = stored || "system";
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = theme === "dark" || (theme === "system" && mql.matches);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${beVietnamPro.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ShopProvider>
          <div className="min-h-dvh">
            <Suspense
              fallback={
                <div className="border-b border-border bg-card text-foreground">
                  <div className="mx-auto w-full max-w-6xl px-4 py-8" />
                </div>
              }
            >
              <SiteHeader />
            </Suspense>
            <main className="mx-auto w-full max-w-6xl px-4 py-8">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ShopProvider>
      </body>
    </html>
  );
}
