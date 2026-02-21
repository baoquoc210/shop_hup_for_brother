export type OrderItem = {
  productId: string;
  quantity: number;
  optionValue?: string;
};

export type Order = {
  id: string;
  createdAt: number;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  note?: string;
  paymentMethod: "cod" | "bank" | "card";
  status: "Đã tạo" | "Đang xử lý" | "Đang giao" | "Hoàn tất";
};

const ORDERS_KEY = "shophub_orders_v1";

function safeParseJson<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function loadOrders(): Order[] {
  if (typeof window === "undefined") return [];
  const parsed = safeParseJson<Order[]>(localStorage.getItem(ORDERS_KEY));
  return Array.isArray(parsed) ? parsed : [];
}

export function saveOrder(order: Order) {
  if (typeof window === "undefined") return;
  const orders = loadOrders();
  localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders].slice(0, 20)));
}

export function findOrderById(id: string) {
  return loadOrders().find((o) => o.id.toLowerCase() === id.toLowerCase()) ?? null;
}
