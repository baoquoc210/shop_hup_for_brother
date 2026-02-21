# ShopHub (Frontend)

Website e‑commerce **frontend-only** xây bằng **Next.js (App Router)** + **Tailwind CSS**.  
Tập trung vào UX mua sắm đơn giản: duyệt sản phẩm → xem chi tiết → thêm giỏ → checkout (demo) → theo dõi đơn (demo).

## Tính năng chính

- Trang chủ, danh mục, hàng mới, khuyến mãi
- Danh sách sản phẩm: tìm kiếm, lọc, sắp xếp
- Chi tiết sản phẩm: chọn tuỳ chọn (size/màu), thêm giỏ, mua ngay (demo)
- Giỏ hàng: tăng/giảm số lượng, xem tổng tiền
- Thanh toán (demo): tạo đơn hàng và lưu trong trình duyệt
- Theo dõi đơn (demo): tra cứu đơn vừa tạo trong trình duyệt
- Yêu thích (wishlist)

## Chạy local

Yêu cầu Node.js: `>= 20.19.0`

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Deploy Vercel

Chỉ cần import repo lên Vercel và deploy. (Dự án là frontend-only.)

## Chỉnh dữ liệu sản phẩm

Sản phẩm mẫu nằm ở `src/lib/products.ts`.

Lưu ý: đây là demo UI/UX, không có backend và không có thanh toán thật.
