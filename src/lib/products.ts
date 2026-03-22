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
        src: "https://i.pinimg.com/control1/1200x/0a/de/92/0ade92d4314fa22f320ad73c215c9e47.jpg",
        alt: "Chai serum tối giản trên nền sáng",
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
        src: "https://i.pinimg.com/736x/2c/d7/db/2cd7db448922075e41fcdabf3d3e176f.jpg",
        alt: "Tuýp kem dưỡng tối giản trên nền sáng",
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
        src: "https://i.pinimg.com/736x/69/aa/4b/69aa4bc63628177b805ffde02dd36789.jpg",
        alt: "Son môi chụp cận trên nền tối giản",
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
        src: "https://i.pinimg.com/1200x/56/db/7c/56db7caeb578c71389a43b4595701f1f.jpg",
        alt: "Cọ trang điểm đặt trên nền phấn",
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
        src: "https://i.pinimg.com/1200x/bf/2a/93/bf2a93b38894790e7ed6b145a5c22d0f.jpg",
        alt: "Chai nước hoa tối giản chụp cận",
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
        src: "https://i.pinimg.com/736x/53/45/c7/5345c7735ef82d3713aee0fbc6c90f10.jpg",
        alt: "Chai xịt tối giản trên nền sáng",
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
        src: "https://i.pinimg.com/736x/f8/72/86/f872869f4089ca32580560b722cb7ab0.jpg",
        alt: "Chai dầu gội tối giản trên nền sáng",
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
        src: "https://i.pinimg.com/736x/ad/74/56/ad74564e00fe5fde5e71b1ad4786f16b.jpg",
        alt: "Chai serum tối giản chụp cận",
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
        src: "https://i.pinimg.com/736x/93/45/bc/9345bc501e799b043bee2768fb9d5779.jpg",
        alt: "Chai lotion tối giản trên nền sáng",
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
        src: "https://i.pinimg.com/736x/ad/07/42/ad07427a5dee9778386026e5f05fed64.jpg",
        alt: "Hũ/ chai mỹ phẩm tối giản trên nền pastel",
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
        src: "https://i.pinimg.com/1200x/43/0c/fc/430cfcffb9bbfced2882434fa794c016.jpg",
        alt: "Cọ trang điểm chụp cận",
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
        src: "https://i.pinimg.com/1200x/48/57/97/4857979784184a81ca8081fa4b84a0e0.jpg",
        alt: "Phấn trang điểm chụp cận",
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
  {
    id: "p_skin_cleanser_gentle_gel",
    slug: "sua-rua-mat-gel-diu-nhe-balance",
    name: "Sữa Rửa Mặt Gel Dịu Nhẹ Balance",
    brand: "DermaMuse",
    category: "Chăm sóc da",
    price: 219000,
    compareAtPrice: 269000,
    images: [
      {
        src: "https://i.pinimg.com/1200x/b8/f8/db/b8f8db5e271799244da5d50e3dbafee6.jpg",
        alt: "Sữa rửa mặt dạng gel trên nền sáng",
      },
    ],
    shortDescription:
      "Gel rửa mặt dịu nhẹ giúp làm sạch bụi bẩn và dầu thừa, phù hợp dùng sáng tối cho da cần cảm giác thoáng nhẹ.",
    highlights: [
      "Kết cấu gel dễ rửa sạch",
      "Làm sạch mà không quá khô căng",
      "Phù hợp routine hằng ngày",
      "Thiết kế gọn, dễ mang theo",
    ],
    rating: 4.6,
    sold: 1980,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["120ml", "200ml"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_skin_toner_hydra_balance",
    slug: "toner-cap-am-daily-balance",
    name: "Toner Cấp Ẩm Daily Balance",
    brand: "Lumière",
    category: "Chăm sóc da",
    price: 259000,
    images: [
      {
        src: "https://i.pinimg.com/1200x/46/98/67/4698671fbf560ed852c1682e93680055.jpg",
        alt: "Chai toner tối giản chụp cận với ánh sáng tự nhiên",
      },
    ],
    shortDescription:
      "Toner cấp ẩm mỏng nhẹ, hỗ trợ làm dịu và giúp da sẵn sàng hơn cho các bước serum, kem dưỡng phía sau.",
    highlights: [
      "Thấm nhanh, không nhờn dính",
      "Cho da cảm giác ẩm mềm tức thì",
      "Dễ kết hợp trong nhiều routine",
      "Hợp da thường đến da hỗn hợp",
    ],
    rating: 4.5,
    sold: 1670,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["150ml", "250ml"] },
    badges: ["Mới về"],
  },
  {
    id: "p_skin_barrier_cream",
    slug: "kem-duong-phuc-hoi-barrier-cream",
    name: "Kem Dưỡng Phục Hồi Barrier Cream",
    brand: "Lumière",
    category: "Chăm sóc da",
    price: 329000,
    compareAtPrice: 389000,
    images: [
      {
        src: "https://i.pinimg.com/736x/d4/8b/9f/d48b9fbe04e5bae37fc8463353c07cd5.jpg",
        alt: "Kem dưỡng tối giản trên nền pastel sáng",
      },
    ],
    shortDescription:
      "Kem dưỡng phục hồi có chất kem êm, giúp khóa ẩm và tạo cảm giác dễ chịu cho làn da sau các bước treatment.",
    highlights: [
      "Chất kem êm, dễ tán",
      "Hỗ trợ khóa ẩm sau serum",
      "Phù hợp dùng ban đêm hoặc máy lạnh",
      "Bao bì tối giản, sạch mắt",
    ],
    rating: 4.7,
    sold: 2140,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["50g", "80g"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_makeup_cushion_natural_fit",
    slug: "cushion-mong-nhe-natural-fit",
    name: "Cushion Mỏng Nhẹ Natural Fit",
    brand: "Peachy",
    category: "Trang điểm",
    price: 389000,
    compareAtPrice: 449000,
    images: [
      {
        src: "https://i.pinimg.com/736x/91/9b/ac/919bacba9ad8bce83d13cc2a32afd98e.jpg",
        alt: "Sản phẩm nền trang điểm chụp cận trên nền sáng",
      },
    ],
    shortDescription:
      "Cushion cho lớp nền mỏng nhẹ, dễ dặm lại trong ngày và tạo hiệu ứng da đều màu tự nhiên.",
    highlights: [
      "Lớp nền mỏng, dễ tán",
      "Cho bề mặt da ráo nhẹ",
      "Tiện mang theo để dặm lại",
      "Hợp phong cách makeup hằng ngày",
    ],
    rating: 4.6,
    sold: 2480,
    conditionLabel: "Mới 100%",
    option: { name: "Tone", values: ["01 Sáng", "02 Tự nhiên", "03 Beige"] },
    badges: ["Hot"],
  },
  {
    id: "p_makeup_mascara_long_lash",
    slug: "mascara-cong-mi-long-lash",
    name: "Mascara Cong Mi Long Lash",
    brand: "Rose&Co",
    category: "Trang điểm",
    price: 199000,
    images: [
      {
        src: "https://i.pinimg.com/736x/17/6b/77/176b77704a5e696a136039208137cf01.jpg",
        alt: "Mascara và son môi tối giản trên nền trung tính",
      },
    ],
    shortDescription:
      "Mascara giúp hàng mi trông tơi và cong hơn, phù hợp kiểu trang điểm nhẹ nhàng, gọn gàng mỗi ngày.",
    highlights: [
      "Đầu chải dễ thao tác",
      "Hiệu ứng mi cong tự nhiên",
      "Phù hợp makeup đi học, đi làm",
      "Dễ phối cùng eyeliner mảnh",
    ],
    rating: 4.4,
    sold: 1730,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Đen", "Nâu đen"] },
    badges: ["Mới về"],
  },
  {
    id: "p_makeup_eyeshadow_everyday_nudes",
    slug: "bang-phan-mat-everyday-nudes",
    name: "Bảng Phấn Mắt Everyday Nudes",
    brand: "Studio Color",
    category: "Trang điểm",
    price: 319000,
    compareAtPrice: 379000,
    images: [
      {
        src: "https://i.pinimg.com/736x/0a/d7/f6/0ad7f6a4e4e30b138ab544e7ce5ce212.jpg",
        alt: "Bảng phấn mắt tông nude chụp cận",
      },
    ],
    shortDescription:
      "Bảng phấn mắt tông nude dễ dùng, phù hợp các layout từ tự nhiên đến nhấn mắt nhẹ cho buổi tối.",
    highlights: [
      "Tông màu dễ phối",
      "Có lì và nhũ nhẹ",
      "Phù hợp makeup hằng ngày",
      "Gọn, dễ mang theo",
    ],
    rating: 4.7,
    sold: 1420,
    conditionLabel: "Mới 100%",
    option: { name: "Bảng", values: ["6 ô", "9 ô"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_fragrance_rollon_citrus_tea",
    slug: "nuoc-hoa-roll-on-citrus-tea",
    name: "Nước Hoa Roll-on Citrus Tea",
    brand: "Mellow",
    category: "Nước hoa",
    price: 179000,
    images: [
      {
        src: "https://i.pinimg.com/736x/2c/dd/76/2cdd7695b0bcfff8fe26b9aae74cacd9.jpg",
        alt: "Chai nước hoa roll-on nhỏ gọn trên nền sáng",
      },
    ],
    shortDescription:
      "Nước hoa roll-on hương trà cam tươi sáng, tiện mang theo để chấm lại ở cổ tay hoặc sau tai trong ngày.",
    highlights: [
      "Thiết kế nhỏ gọn",
      "Hương mở đầu thanh mát",
      "Dễ dặm lại khi cần",
      "Hợp đi học, đi làm",
    ],
    rating: 4.5,
    sold: 1640,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["10ml", "15ml"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_fragrance_edp_velvet_wood",
    slug: "nuoc-hoa-edp-go-am-velvet-wood",
    name: "Nước Hoa EDP Gỗ Ấm Velvet Wood",
    brand: "Noir Atelier",
    category: "Nước hoa",
    price: 689000,
    compareAtPrice: 829000,
    images: [
      {
        src: "https://i.pinimg.com/736x/d7/92/f8/d792f8f1046ae47d503b5d520783a21a.jpg",
        alt: "Chai nước hoa tông trầm đặt trên nền sáng",
      },
    ],
    shortDescription:
      "EDP hương gỗ ấm có cảm giác trầm hơn, phù hợp những dịp cần vẻ ngoài chỉn chu và hiện đại.",
    highlights: [
      "Tầng hương ấm, sạch và dễ dùng",
      "Phù hợp môi trường công sở",
      "Thiết kế chai tối giản",
      "Dùng tốt cả ngày lẫn tối",
    ],
    rating: 4.8,
    sold: 870,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["30ml", "50ml", "100ml"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_fragrance_hair_perfume_clean_bloom",
    slug: "hair-perfume-clean-bloom",
    name: "Hair Perfume Clean Bloom",
    brand: "Mellow",
    category: "Nước hoa",
    price: 249000,
    images: [
      {
        src: "https://i.pinimg.com/736x/a8/1c/34/a81c3485789b069dfa88f5ab610f78b5.jpg",
        alt: "Chai hair perfume dạng xịt trên nền sáng",
      },
    ],
    shortDescription:
      "Xịt hương tóc mùi hoa sạch nhẹ nhàng, giúp mái tóc lưu lại cảm giác tươi mới mà không quá gắt.",
    highlights: [
      "Hương sạch, nhẹ và hiện đại",
      "Thiết kế tiện mang theo",
      "Dễ xịt lại sau giờ làm",
      "Phù hợp người thích mùi thơm thanh",
    ],
    rating: 4.4,
    sold: 1190,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["50ml", "80ml"] },
    badges: ["Mới về"],
  },
  {
    id: "p_hair_conditioner_soft_silk",
    slug: "dau-xa-mem-toc-soft-silk",
    name: "Dầu Xả Mềm Tóc Soft Silk",
    brand: "SilkLab",
    category: "Chăm sóc tóc",
    price: 279000,
    compareAtPrice: 329000,
    images: [
      {
        src: "https://i.pinimg.com/736x/7e/04/e9/7e04e901fa1221b1ac9f8f7a15182977.jpg",
        alt: "Chai dầu xả tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Dầu xả giúp tóc mềm hơn sau khi gội, giảm cảm giác khô xơ và hỗ trợ chải tóc dễ dàng hơn.",
    highlights: [
      "Kết cấu kem mượt",
      "Giúp tóc dễ chải hơn",
      "Hợp dùng sau dầu gội phục hồi",
      "Mùi hương nhẹ, dễ chịu",
    ],
    rating: 4.5,
    sold: 1360,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["250ml", "500ml"] },
    badges: ["Ưu đãi"],
  },
  {
    id: "p_hair_mask_protein_repair",
    slug: "mat-na-u-toc-protein-repair",
    name: "Mặt Nạ Ủ Tóc Protein Repair",
    brand: "HairMuse",
    category: "Chăm sóc tóc",
    price: 339000,
    compareAtPrice: 399000,
    images: [
      {
        src: "https://i.pinimg.com/736x/60/79/41/607941da1ec1a8a64e8e375713eb7278.jpg",
        alt: "Hũ ủ tóc tối giản chụp cận trên nền sáng",
      },
    ],
    shortDescription:
      "Mặt nạ ủ tóc cho cảm giác tóc mềm và vào nếp hơn sau khi xả, phù hợp tóc khô hoặc xử lý hóa chất nhẹ.",
    highlights: [
      "Kết cấu đặc vừa phải",
      "Ủ nhanh 5-10 phút",
      "Phù hợp tóc khô xơ",
      "Dùng xen kẽ với dầu xả hằng tuần",
    ],
    rating: 4.7,
    sold: 980,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["250g", "400g"] },
    badges: ["Hot"],
  },
  {
    id: "p_hair_heat_protect_spray",
    slug: "xit-bao-ve-nhiet-heat-shield",
    name: "Xịt Bảo Vệ Nhiệt Heat Shield",
    brand: "HairMuse",
    category: "Chăm sóc tóc",
    price: 249000,
    images: [
      {
        src: "https://i.pinimg.com/736x/9c/7b/ce/9c7bce3fcbbe08e315ae16a2e80e7729.jpg",
        alt: "Chai xịt chăm sóc tóc tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Xịt dưỡng trước khi sấy hoặc tạo kiểu, giúp tóc bớt khô hơn và giữ bề mặt mượt gọn hơn trong ngày.",
    highlights: [
      "Dạng xịt mỏng nhẹ",
      "Dùng trước sấy và tạo kiểu",
      "Không gây cảm giác bết khi dùng vừa đủ",
      "Phù hợp tóc uốn hoặc nhuộm",
    ],
    rating: 4.4,
    sold: 1110,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["120ml", "180ml"] },
    badges: ["Mới về"],
  },
  {
    id: "p_body_shower_gel_cotton_soft",
    slug: "sua-tam-cotton-soft",
    name: "Sữa Tắm Cotton Soft",
    brand: "SoftGlow",
    category: "Dưỡng thể",
    price: 209000,
    compareAtPrice: 249000,
    images: [
      {
        src: "https://i.pinimg.com/736x/89/06/9b/89069be22aa2b5a12da4d906d76f25f2.jpg",
        alt: "Chai sữa tắm tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Sữa tắm hương cotton sạch và nhẹ, tạo bọt vừa phải, phù hợp cho những ai thích cảm giác dễ chịu sau khi tắm.",
    highlights: [
      "Làm sạch dịu nhẹ",
      "Hương cotton sạch, dễ dùng",
      "Bọt mịn, dễ rửa",
      "Dùng hằng ngày thoải mái",
    ],
    rating: 4.5,
    sold: 1840,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["300ml", "500ml"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_body_hand_cream_shea_comfort",
    slug: "kem-duong-tay-shea-comfort",
    name: "Kem Dưỡng Tay Shea Comfort",
    brand: "SoftGlow",
    category: "Dưỡng thể",
    price: 129000,
    images: [
      {
        src: "https://i.pinimg.com/736x/29/58/f1/2958f1e51fb8690568eb24dc3dc6a249.jpg",
        alt: "Tuýp kem dưỡng tay tối giản chụp cận",
      },
    ],
    shortDescription:
      "Kem dưỡng tay nhỏ gọn, giúp da tay mềm hơn và tiện mang theo trong túi để dùng nhiều lần trong ngày.",
    highlights: [
      "Kích thước nhỏ gọn",
      "Dưỡng ẩm nhanh, không nhờn quá mức",
      "Hương dịu, dễ chịu",
      "Tiện để bàn làm việc hoặc túi xách",
    ],
    rating: 4.4,
    sold: 2230,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["50ml", "75ml"] },
    badges: ["Mới về"],
  },
  {
    id: "p_body_glow_oil",
    slug: "tinh-dau-duong-the-glow-oil",
    name: "Tinh Dầu Dưỡng Thể Glow Oil",
    brand: "Velour",
    category: "Dưỡng thể",
    price: 289000,
    compareAtPrice: 349000,
    images: [
      {
        src: "https://i.pinimg.com/736x/8f/cf/69/8fcf690d7442bab2ccea28fdbddb12c6.jpg",
        alt: "Chai body oil tối giản trên nền sáng",
      },
    ],
    shortDescription:
      "Body oil cho bề mặt da bóng khỏe hơn, phù hợp dùng sau tắm hoặc trước khi ra ngoài để da trông mượt mà hơn.",
    highlights: [
      "Cho da hiệu ứng bóng nhẹ",
      "Dùng tốt sau bước dưỡng thể",
      "Mùi hương ấm, sạch",
      "Thiết kế chai tối giản, sang",
    ],
    rating: 4.6,
    sold: 950,
    conditionLabel: "Mới 100%",
    option: { name: "Dung tích", values: ["100ml", "150ml"] },
    badges: ["Giảm giá"],
  },
  {
    id: "p_tool_eyelash_curler",
    slug: "kep-mi-cong-tu-nhien",
    name: "Kẹp Mi Cong Tự Nhiên",
    brand: "StudioKit",
    category: "Dụng cụ",
    price: 119000,
    images: [
      {
        src: "https://i.pinimg.com/736x/d4/81/67/d481675e73b3151e7c28def8dd3a3088.jpg",
        alt: "Dụng cụ trang điểm đặt trên nền phấn",
      },
    ],
    shortDescription:
      "Kẹp mi thiết kế gọn tay, hỗ trợ tạo độ cong tự nhiên trước khi chuốt mascara để tổng thể mắt trông sáng hơn.",
    highlights: [
      "Khung kẹp gọn, dễ cầm",
      "Tạo độ cong nhẹ tự nhiên",
      "Dùng tốt trước mascara",
      "Phù hợp makeup hằng ngày",
    ],
    rating: 4.5,
    sold: 1520,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Bạc", "Hồng nhạt"] },
    badges: ["Bán chạy"],
  },
  {
    id: "p_tool_handheld_mirror",
    slug: "guong-trang-diem-cam-tay",
    name: "Gương Trang Điểm Cầm Tay",
    brand: "StudioKit",
    category: "Dụng cụ",
    price: 149000,
    compareAtPrice: 189000,
    images: [
      {
        src: "https://i.pinimg.com/1200x/95/e8/11/95e81168909f79adbb0529132f48603a.jpg",
        alt: "Phụ kiện bàn trang điểm tối giản chụp cận",
      },
    ],
    shortDescription:
      "Gương cầm tay nhỏ gọn, phù hợp để bàn hoặc mang theo khi cần chỉnh trang nhanh trong ngày.",
    highlights: [
      "Kích thước gọn gàng",
      "Dễ cầm, dễ mang theo",
      "Phù hợp dặm makeup nhanh",
      "Thiết kế tối giản, sạch mắt",
    ],
    rating: 4.3,
    sold: 860,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Kem", "Hồng phấn"] },
    badges: ["Ưu đãi"],
  },
  {
    id: "p_tool_brush_cleaner_pad",
    slug: "tam-ve-sinh-co-silicone",
    name: "Tấm Vệ Sinh Cọ Silicone",
    brand: "StudioKit",
    category: "Dụng cụ",
    price: 89000,
    images: [
      {
        src: "https://i.pinimg.com/736x/01/2d/e3/012de3c38bd559939f7b26bcc273576b.jpg",
        alt: "Cọ trang điểm chụp cận trên nền sáng",
      },
    ],
    shortDescription:
      "Tấm silicone hỗ trợ vệ sinh cọ nhanh hơn, phù hợp dùng cùng xà phòng hoặc dung dịch làm sạch dụng cụ trang điểm.",
    highlights: [
      "Bề mặt có rãnh dễ chà cọ",
      "Gọn, dễ cất giữ",
      "Dùng với nhiều kích cỡ cọ",
      "Tiện cho routine vệ sinh định kỳ",
    ],
    rating: 4.4,
    sold: 1340,
    conditionLabel: "Mới 100%",
    option: { name: "Màu", values: ["Be", "Hồng"] },
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
