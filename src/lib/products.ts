export type Category =
  | "Giày"
  | "Áo"
  | "Phụ kiện"
  | "Công nghệ"
  | "Đồng hồ"
  | "Túi";

export type ProductOption = {
  name: string;
  values: string[];
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  shortDescription: string;
  highlights: string[];
  rating: number; // 0..5
  sold: number;
  conditionLabel: string;
  option?: ProductOption;
  badges?: string[];
};

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "Giày", label: "Giày" },
  { key: "Áo", label: "Áo" },
  { key: "Túi", label: "Túi" },
  { key: "Phụ kiện", label: "Phụ kiện" },
  { key: "Công nghệ", label: "Công nghệ" },
  { key: "Đồng hồ", label: "Đồng hồ" },
];

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "p_sneaker_khanh_01",
    slug: "giay-sneaker-khanh-runner-01",
    name: "Giày Sneaker Khanh Runner 01",
    brand: "Khanh Studio",
    category: "Giày",
    price: 1599000,
    compareAtPrice: 1999000,
    images: [
      {
        src: unsplash("photo-1542291026-7eec264c27ff"),
        alt: "Giày sneaker màu đỏ trắng chụp cận cảnh",
      },
      {
        src: unsplash("photo-1600269452121-4f2416e55c28"),
        alt: "Giày sneaker đặt trên nền sáng",
      },
    ],
    shortDescription:
      "Form gọn, đế êm, phối đồ dễ — lựa chọn an toàn để đi học, đi làm, đi chơi.",
    highlights: [
      "Đế EVA êm, nhẹ",
      "Phom ôm chân, dễ mang",
      "Phù hợp phong cách street tối giản",
      "Kiểm tra hàng trước khi nhận",
    ],
    rating: 4.7,
    sold: 1240,
    conditionLabel: "Mới 100%",
    option: { name: "Size", values: ["38", "39", "40", "41", "42", "43"] },
    badges: ["Bán chạy", "Giảm giá"],
  },
  {
    id: "p_sneaker_street_02",
    slug: "giay-sneaker-streetline-02",
    name: "Giày Sneaker Streetline 02",
    brand: "Streetline",
    category: "Giày",
    price: 1899000,
    images: [
      {
        src: unsplash("photo-1549298916-b41d501d3772"),
        alt: "Giày sneaker màu trắng đặt trên nền tối",
      },
      {
        src: unsplash("photo-1525966222134-fcfa99b8ae77"),
        alt: "Giày sneaker chụp góc nghiêng",
      },
    ],
    shortDescription:
      "Tông trắng tinh gọn, hợp outfit hằng ngày. Lót thoáng khí, đi lâu không bí.",
    highlights: [
      "Upper thoáng khí",
      "Đế bám tốt, chống trơn",
      "Dễ vệ sinh",
      "Giao nhanh nội thành",
    ],
    rating: 4.6,
    sold: 860,
    conditionLabel: "Mới 100%",
    option: { name: "Size", values: ["36", "37", "38", "39", "40", "41"] },
    badges: ["Mới về"],
  },
  {
    id: "p_hoodie_01",
    slug: "ao-hoodie-urban-core",
    name: "Áo Hoodie Urban Core",
    brand: "Urban Core",
    category: "Áo",
    price: 499000,
    compareAtPrice: 650000,
    images: [
      {
        src: unsplash("photo-1556821840-3a63f95609a7"),
        alt: "Áo hoodie tối giản phong cách streetwear",
      },
      {
        src: unsplash("photo-1620799140188-3b2a02fd9a77"),
        alt: "Áo hoodie màu tối chụp cận cảnh",
      },
    ],
    shortDescription:
      "Chất nỉ dày vừa, mặc ấm nhưng không nặng. Form oversize thoải mái.",
    highlights: [
      "Nỉ cotton pha, mềm",
      "Form oversize hiện đại",
      "Dễ phối với sneaker",
      "Đổi size trong 7 ngày",
    ],
    rating: 4.5,
    sold: 540,
    conditionLabel: "Mới 100%",
    option: { name: "Size", values: ["S", "M", "L", "XL"] },
    badges: ["Ưu đãi"],
  },
  {
    id: "p_tee_01",
    slug: "ao-thun-basic-logo-min",
    name: "Áo Thun Basic Logo Min",
    brand: "Min Studio",
    category: "Áo",
    price: 259000,
    images: [
      {
        src: unsplash("photo-1574180566232-aaad1b5b8450"),
        alt: "Áo thun phong cách cơ bản",
      },
      {
        src: unsplash("photo-1576417677416-6ca3adfb5435"),
        alt: "Cận cảnh áo thun tối giản",
      },
    ],
    shortDescription:
      "Cơ bản nhưng sang: dệt dày, ít xù, cổ đứng. Mặc đi đâu cũng hợp.",
    highlights: [
      "Vải dày, mịn",
      "Cổ bo chắc",
      "Co giãn nhẹ",
      "Không phai màu nhanh",
    ],
    rating: 4.4,
    sold: 990,
    conditionLabel: "Mới 100%",
    option: { name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
  },
  {
    id: "p_bag_01",
    slug: "tui-cheo-mini-tech-sling",
    name: "Túi Chéo Mini Tech Sling",
    brand: "Nomad",
    category: "Túi",
    price: 399000,
    images: [
      {
        src: unsplash("photo-1605983138993-70baf11475f5"),
        alt: "Túi đeo chéo mini phong cách tối giản",
      },
      {
        src: unsplash("photo-1718622795525-2295971921ba"),
        alt: "Túi đeo chéo chụp cận chi tiết",
      },
    ],
    shortDescription:
      "Nhỏ gọn nhưng đủ chứa: ví, điện thoại, AirPods. Chống nước nhẹ.",
    highlights: [
      "Ngăn chính rộng",
      "Khóa kéo êm",
      "Dây đeo êm vai",
      "Chống nước nhẹ",
    ],
    rating: 4.6,
    sold: 410,
    conditionLabel: "Mới 100%",
    badges: ["Hot"],
  },
  {
    id: "p_watch_01",
    slug: "dong-ho-minimal-steel-38mm",
    name: "Đồng Hồ Minimal Steel 38mm",
    brand: "Time&Co",
    category: "Đồng hồ",
    price: 1299000,
    compareAtPrice: 1499000,
    images: [
      {
        src: unsplash("photo-1523275335684-37898b6baf30"),
        alt: "Đồng hồ mặt tròn dây kim loại",
      },
      {
        src: unsplash("photo-1508057198894-247b23fe5ade"),
        alt: "Cận cảnh đồng hồ trên tay",
      },
    ],
    shortDescription:
      "Thiết kế tối giản, mặt 38mm gọn tay. Hợp phong cách công sở lẫn casual.",
    highlights: [
      "Mặt kính chống xước nhẹ",
      "Dây thép không gỉ",
      "Chống nước sinh hoạt",
      "Bảo hành 12 tháng",
    ],
    rating: 4.3,
    sold: 210,
    conditionLabel: "Mới 100%",
    badges: ["Giảm giá"],
  },
  {
    id: "p_earbuds_01",
    slug: "tai-nghe-true-wireless-airbeat",
    name: "Tai Nghe True Wireless AirBeat",
    brand: "AirBeat",
    category: "Công nghệ",
    price: 890000,
    images: [
      {
        src: unsplash("photo-1572569511254-d8f925fe2cbb"),
        alt: "Tai nghe không dây đặt trên nền tối",
      },
      {
        src: unsplash("photo-1606220588913-b3aacb4d2f46"),
        alt: "Cận cảnh tai nghe không dây",
      },
    ],
    shortDescription:
      "Âm rõ, bass gọn, pin lâu. Kết nối ổn định cho gọi điện và nghe nhạc.",
    highlights: [
      "Pin 24 giờ kèm hộp",
      "Mic đàm thoại rõ",
      "Chống ồn cơ bản",
      "Sạc nhanh USB‑C",
    ],
    rating: 4.2,
    sold: 670,
    conditionLabel: "Mới 100%",
    badges: ["Mới về"],
  },
  {
    id: "p_accessory_cap",
    slug: "mu-luoi-trai-street-cap",
    name: "Mũ Lưỡi Trai Street Cap",
    brand: "Streetline",
    category: "Phụ kiện",
    price: 179000,
    images: [
      {
        src: unsplash("photo-1588850561407-ed78c282e89b"),
        alt: "Mũ lưỡi trai phong cách street",
      },
      {
        src: unsplash("photo-1519681393784-d120267933ba"),
        alt: "Mũ lưỡi trai đặt trên nền trắng",
      },
    ],
    shortDescription:
      "Form chuẩn, dễ đội, logo thêu tinh gọn. Hợp cả nam và nữ.",
    highlights: [
      "Chất liệu bền",
      "Dây tăng chỉnh",
      "Thoáng khí",
      "Dễ phối đồ",
    ],
    rating: 4.4,
    sold: 1030,
    conditionLabel: "Mới 100%",
  },
  {
    id: "p_accessory_socks",
    slug: "vo-the-thao-cushion-pack-3",
    name: "Vớ Thể Thao Cushion (Bộ 3)",
    brand: "Khanh Studio",
    category: "Phụ kiện",
    price: 139000,
    images: [
      {
        src: unsplash("photo-1585499583264-491df5142e83"),
        alt: "Vớ thể thao chụp cận",
      },
      {
        src: unsplash("photo-1615486364462-ef6363adbc18"),
        alt: "Chất liệu vớ thể thao",
      },
    ],
    shortDescription:
      "Dày vừa, thấm hút tốt, đi sneaker rất hợp. Bộ 3 đôi tiện lợi.",
    highlights: [
      "Đệm gót êm",
      "Thoáng khí",
      "Co giãn tốt",
      "Giặt máy thoải mái",
    ],
    rating: 4.6,
    sold: 1910,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Trắng", "Đen", "Mix"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_bag_02",
    slug: "balo-commute-clean-20l",
    name: "Balo Commute Clean 20L",
    brand: "Nomad",
    category: "Túi",
    price: 699000,
    images: [
      {
        src: unsplash("photo-1581605405669-fcdf81165afa"),
        alt: "Balo phong cách tối giản",
      },
      {
        src: unsplash("photo-1553062407-98eeb64c6a62"),
        alt: "Balo đặt trên nền xám",
      },
    ],
    shortDescription:
      "Balo gọn, có ngăn laptop 14–15\". Phù hợp đi làm, đi học, di chuyển hằng ngày.",
    highlights: [
      "Ngăn laptop chống sốc",
      "Dây đeo êm",
      "Chống nước nhẹ",
      "Khóa kéo bền",
    ],
    rating: 4.5,
    sold: 320,
    conditionLabel: "Mới 100%",
  },
  {
    id: "p_sneaker_03",
    slug: "giay-sneaker-trail-flex-03",
    name: "Giày Sneaker Trail Flex 03",
    brand: "Trail Flex",
    category: "Giày",
    price: 2099000,
    images: [
      {
        src: unsplash("photo-1562183241-b937e95585b6"),
        alt: "Giày sneaker đế dày chụp trên nền đá",
      },
      {
        src: unsplash("photo-1519741497674-611481863552"),
        alt: "Giày sneaker ngoài trời",
      },
    ],
    shortDescription:
      "Đế dày bám tốt, hợp đi bộ, du lịch. Phom khỏe, nổi bật nhưng dễ phối.",
    highlights: [
      "Đế bám tốt",
      "Đệm êm cho di chuyển dài",
      "Upper bền, dễ vệ sinh",
      "Tặng kèm dây dự phòng",
    ],
    rating: 4.6,
    sold: 290,
    conditionLabel: "Mới 100%",
    option: { name: "Size", values: ["39", "40", "41", "42", "43", "44"] },
  },
  {
    id: "p_tech_02",
    slug: "sac-du-phong-slim-10000",
    name: "Sạc Dự Phòng Slim 10.000mAh",
    brand: "AirBeat",
    category: "Công nghệ",
    price: 349000,
    compareAtPrice: 429000,
    images: [
      {
        src: unsplash("photo-1594843665794-446ce915d840"),
        alt: "Sạc dự phòng đặt cạnh điện thoại",
      },
      {
        src: unsplash("photo-1523978591478-c753949ff840"),
        alt: "Cận cảnh sạc dự phòng màu tối",
      },
    ],
    shortDescription:
      "Mỏng, nhẹ, sạc nhanh 20W. Dễ mang theo hằng ngày, phù hợp cả iPhone và Android.",
    highlights: [
      "Sạc nhanh 20W",
      "2 cổng USB‑C/USB‑A",
      "Tự ngắt an toàn",
      "Hiển thị pin LED",
    ],
    rating: 4.3,
    sold: 740,
    conditionLabel: "Mới 100%",
    badges: ["Giảm giá"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedProducts(product: Product, count = 6) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, count);
}
