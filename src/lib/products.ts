export type Category =
  | "Chăm sóc da"
  | "Trang điểm"
  | "Nước hoa"
  | "Chăm sóc tóc"
  | "Dưỡng thể"
  | "Dụng cụ";

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
  { key: "Chăm sóc da", label: "Chăm sóc da" },
  { key: "Trang điểm", label: "Trang điểm" },
  { key: "Nước hoa", label: "Nước hoa" },
  { key: "Chăm sóc tóc", label: "Chăm sóc tóc" },
  { key: "Dưỡng thể", label: "Dưỡng thể" },
  { key: "Dụng cụ", label: "Dụng cụ" },
];

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "p_skin_serum_vitc_15",
    slug: "serum-vitamin-c-15-sang-da",
    name: "Serum Vitamin C 15% Sáng Da",
    brand: "Lumière",
    category: "Chăm sóc da",
    price: 349000,
    compareAtPrice: 449000,
    images: [
      {
        src: unsplash("photo-1618331647258-631aa6000400"),
        alt: "Chai serum tối giản trên nền sáng",
      },
      {
        src: unsplash("photo-1618331680655-5c23b9c4d29b"),
        alt: "Cận cảnh chai serum với ánh sáng tự nhiên",
      },
    ],
    shortDescription:
      "Serum vitamin C giúp da trông rạng rỡ hơn, kết cấu lỏng nhẹ, thấm nhanh và dễ layer.",
    highlights: [
      "Kết cấu nhẹ, không bết dính",
      "Hỗ trợ làm đều màu da (demo)",
      "Phù hợp routine sáng/ tối",
      "Bao bì tối giản, dễ mang theo",
    ],
    rating: 4.8,
    sold: 4320,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["30ml", "50ml"] },
    badges: ["Bán chạy", "Giảm giá"],
  },
  {
    id: "p_skin_sunscreen_spf50",
    slug: "kem-chong-nang-spf50-diu-nhe",
    name: "Kem Chống Nắng SPF50+ Dịu Nhẹ",
    brand: "SunMuse",
    category: "Chăm sóc da",
    price: 269000,
    compareAtPrice: 329000,
    images: [
      {
        src: unsplash("photo-1512207576147-99bc3066b621"),
        alt: "Tuýp kem dưỡng tối giản trên nền sáng",
      },
      {
        src: unsplash("photo-1521840233161-295ed621e056"),
        alt: "Chai mỹ phẩm tối giản đặt trên nền pastel",
      },
    ],
    shortDescription:
      "Chống nắng hằng ngày, finish thoáng nhẹ. Hai lựa chọn: không màu hoặc nâng tông nhẹ.",
    highlights: [
      "Kết cấu mỏng nhẹ, dễ tán",
      "Không bết, không nặng mặt",
      "Dùng tốt dưới lớp makeup (demo)",
      "Phù hợp da thường đến hỗn hợp",
    ],
    rating: 4.7,
    sold: 2850,
    conditionLabel: "Mới 100%",
    option: { name: "Phiên bản", values: ["Không màu", "Nâng tông"] },
    badges: ["Mới về", "Giảm giá"],
  },
  {
    id: "p_makeup_liptint_velvet",
    slug: "son-tint-li-velvet",
    name: "Son Tint Lì Velvet",
    brand: "Rose&Co",
    category: "Trang điểm",
    price: 229000,
    compareAtPrice: 289000,
    images: [
      {
        src: unsplash("photo-1594125311687-3b1b3eafa9f4"),
        alt: "Son môi chụp cận trên nền tối giản",
      },
      {
        src: unsplash("photo-1526947425960-945c6e72858f"),
        alt: "Bảng phấn trang điểm chụp cận",
      },
    ],
    shortDescription:
      "Chất tint lì mềm mịn, lên màu rõ, bám tốt và không làm môi trông khô căng.",
    highlights: [
      "Lì mịn, cảm giác nhẹ môi",
      "Lên màu chuẩn sau 1–2 lớp",
      "Dễ dặm lại trong ngày",
      "Phù hợp phong cách trang điểm tự nhiên",
    ],
    rating: 4.6,
    sold: 3780,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Hồng đất", "Đỏ gạch", "Cam đào", "Nude"] },
    badges: ["Giảm giá", "Bán chạy"],
  },
  {
    id: "p_makeup_cream_blush",
    slug: "phan-ma-kem-soft-blush",
    name: "Phấn Má Kem Soft Blush",
    brand: "Peachy",
    category: "Trang điểm",
    price: 239000,
    images: [
      {
        src: unsplash("photo-1503236823255-94609f598e71"),
        alt: "Cọ trang điểm đặt trên nền phấn",
      },
      {
        src: unsplash("photo-1693990437433-3ec5fe554a5b"),
        alt: "Chai mỹ phẩm tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Phấn má dạng kem tán mịn, tiệp da, tạo hiệu ứng ửng hồng tự nhiên trong vài giây.",
    highlights: [
      "Tán mịn bằng tay hoặc bông mút",
      "Tiệp da, dễ layer",
      "Lên màu trong trẻo",
      "Hợp makeup hằng ngày",
    ],
    rating: 4.5,
    sold: 1650,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Hồng Rose", "Đào Peach", "San hô Coral"] },
    badges: ["Hot"],
  },
  {
    id: "p_fragrance_edp_white_flower",
    slug: "nuoc-hoa-edp-huong-hoa-trang",
    name: "Nước Hoa EDP Hương Hoa Trắng",
    brand: "Mellow",
    category: "Nước hoa",
    price: 599000,
    compareAtPrice: 749000,
    images: [
      {
        src: unsplash("photo-1594903696739-2551e8c2d0f1"),
        alt: "Chai nước hoa tối giản chụp cận",
      },
      {
        src: unsplash("photo-1605980766335-d3a41c7332a1"),
        alt: "Chai nước hoa trên nền sáng",
      },
    ],
    shortDescription:
      "Hương hoa trắng thanh lịch, phù hợp đi làm, đi chơi. Độ lưu hương vừa phải (demo).",
    highlights: [
      "Mở đầu thanh mát, dễ chịu",
      "Hương giữa hoa trắng nữ tính",
      "Dùng được cả ngày lẫn tối",
      "Bao bì tinh gọn, sang",
    ],
    rating: 4.7,
    sold: 920,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["30ml", "50ml", "100ml"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_fragrance_bodymist_peach",
    slug: "body-mist-huong-dao-nhe",
    name: "Body Mist Hương Đào Nhẹ",
    brand: "Mellow",
    category: "Nước hoa",
    price: 199000,
    images: [
      {
        src: unsplash("photo-1453761816053-ed5ba727b5b7"),
        alt: "Chai xịt tối giản trên nền sáng",
      },
      {
        src: unsplash("photo-1693990437506-dac9d69697a9"),
        alt: "Chai mỹ phẩm tối giản đặt trên nền pastel",
      },
    ],
    shortDescription:
      "Body mist thơm nhẹ, dễ xịt lại trong ngày. Hợp đi học, đi làm và hoạt động ngoài trời.",
    highlights: [
      "Hương ngọt nhẹ, không gắt",
      "Phù hợp xịt tóc/ body (demo)",
      "Thiết kế nhỏ gọn",
      "Dễ mang theo túi",
    ],
    rating: 4.4,
    sold: 2210,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["100ml", "200ml"] },
    badges: ["Mới về"],
  },
  {
    id: "p_hair_repair_shampoo",
    slug: "dau-goi-phuc-hoi-toc",
    name: "Dầu Gội Phục Hồi Tóc",
    brand: "SilkLab",
    category: "Chăm sóc tóc",
    price: 289000,
    images: [
      {
        src: unsplash("photo-1693990437462-7374feb1fd9f"),
        alt: "Chai dầu gội tối giản trên nền sáng",
      },
      {
        src: unsplash("photo-1594813591867-02e797aa4581"),
        alt: "Mái tóc uốn gợn sóng chụp cận",
      },
    ],
    shortDescription:
      "Dầu gội phục hồi, làm tóc mềm hơn sau khi gội. Mùi hương dịu, dễ dùng mỗi ngày (demo).",
    highlights: [
      "Làm sạch dịu nhẹ",
      "Giúp tóc mềm mượt hơn (demo)",
      "Phù hợp tóc khô/ hư tổn nhẹ",
      "Tạo bọt vừa đủ, dễ xả",
    ],
    rating: 4.6,
    sold: 1540,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["250ml", "500ml"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_hair_silky_oil",
    slug: "serum-duong-toc-bong-muot",
    name: "Serum Dưỡng Tóc Bóng Mượt",
    brand: "SilkLab",
    category: "Chăm sóc tóc",
    price: 259000,
    compareAtPrice: 319000,
    images: [
      {
        src: unsplash("photo-1693990437531-720851467ffe"),
        alt: "Chai serum tối giản chụp cận",
      },
      {
        src: unsplash("photo-1618331911090-336dca45e7f0"),
        alt: "Chai mỹ phẩm tối giản với ánh sáng tự nhiên",
      },
    ],
    shortDescription:
      "Serum dưỡng tóc giúp giảm xơ rối, cho tóc trông bóng mượt hơn. Dùng sau gội hoặc trước tạo kiểu (demo).",
    highlights: [
      "Giảm rối, dễ chải",
      "Cho tóc trông bóng hơn (demo)",
      "Không gây nặng tóc khi dùng vừa đủ",
      "Hợp tóc khô/ uốn/ nhuộm",
    ],
    rating: 4.5,
    sold: 1280,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["30ml", "50ml"] },
    badges: ["Ưu đãi"],
  },
  {
    id: "p_body_lotion_softglow",
    slug: "sua-duong-the-mem-min",
    name: "Sữa Dưỡng Thể Mềm Mịn",
    brand: "SoftGlow",
    category: "Dưỡng thể",
    price: 239000,
    compareAtPrice: 299000,
    images: [
      {
        src: unsplash("photo-1693990437433-3ec5fe554a5b"),
        alt: "Chai lotion tối giản trên nền sáng",
      },
      {
        src: unsplash("photo-1693990437462-7374feb1fd9f"),
        alt: "Chai dưỡng thể tối giản chụp cận",
      },
    ],
    shortDescription:
      "Dưỡng thể thấm nhanh, để da mềm mịn và dễ chịu. Phù hợp dùng sau tắm (demo).",
    highlights: [
      "Thấm nhanh, không nhờn rít",
      "Cho da cảm giác mềm mịn",
      "Mùi hương nhẹ nhàng",
      "Dùng được cả ngày lẫn đêm",
    ],
    rating: 4.6,
    sold: 2060,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["200ml", "400ml"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_body_scrub_brown_sugar",
    slug: "tay-te-bao-chet-body-duong-nau",
    name: "Tẩy Tế Bào Chết Body Đường Nâu",
    brand: "SoftGlow",
    category: "Dưỡng thể",
    price: 219000,
    images: [
      {
        src: unsplash("photo-1521840233161-295ed621e056"),
        alt: "Hũ/ chai mỹ phẩm tối giản trên nền pastel",
      },
      {
        src: unsplash("photo-1693990437506-dac9d69697a9"),
        alt: "Mỹ phẩm tối giản với ánh sáng tự nhiên",
      },
    ],
    shortDescription:
      "Tẩy da chết body hạt mịn, dễ massage. Dùng 1–2 lần/ tuần để da trông mịn hơn (demo).",
    highlights: [
      "Hạt mịn, không cào rát (demo)",
      "Dễ rửa sạch",
      "Mùi ấm nhẹ dễ chịu",
      "Hợp dùng trước dưỡng thể",
    ],
    rating: 4.4,
    sold: 1410,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["200g", "400g"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_tool_brush_set",
    slug: "bo-co-trang-diem-8-cay",
    name: "Bộ Cọ Trang Điểm 8 Cây",
    brand: "StudioKit",
    category: "Dụng cụ",
    price: 329000,
    images: [
      {
        src: unsplash("photo-1503236823255-94609f598e71"),
        alt: "Cọ trang điểm chụp cận",
      },
      {
        src: unsplash("photo-1526947425960-945c6e72858f"),
        alt: "Bảng phấn mắt trang điểm",
      },
    ],
    shortDescription:
      "Bộ cọ cơ bản đủ dùng hằng ngày: tán nền, má, mắt. Lông mềm, dễ vệ sinh (demo).",
    highlights: [
      "Đủ cọ nền/ má/ mắt",
      "Lông mềm, tán đều",
      "Cán cầm chắc tay",
      "Dễ vệ sinh, nhanh khô",
    ],
    rating: 4.6,
    sold: 980,
    conditionLabel: "Mới 100%",
    option: { name: "Bộ", values: ["8 cây", "12 cây"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_tool_sponge_set",
    slug: "bong-mut-tan-nen-bo-4",
    name: "Bông Mút Tán Nền (Bộ 4)",
    brand: "StudioKit",
    category: "Dụng cụ",
    price: 79000,
    compareAtPrice: 99000,
    images: [
      {
        src: unsplash("photo-1526947425960-945c6e72858f"),
        alt: "Phấn trang điểm chụp cận",
      },
      {
        src: unsplash("photo-1618331665436-1480d7519f8f"),
        alt: "Mỹ phẩm tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Bông mút tán nền mềm, giúp lớp nền mịn và đều hơn. Dùng khô hoặc ẩm đều ổn (demo).",
    highlights: [
      "Mềm, đàn hồi",
      "Tán nền nhanh, đều",
      "Dễ vệ sinh",
      "Bộ 4 chiếc tiện thay phiên",
    ],
    rating: 4.5,
    sold: 3120,
    conditionLabel: "Mới 100%",
    option: { name: "Kiểu", values: ["Giọt nước", "Vát cạnh"] },
    badges: ["Mới về", "Giảm giá"],
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
