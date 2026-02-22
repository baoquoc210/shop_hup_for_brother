"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type CartLine = {
  productId: string;
  quantity: number;
  optionValue?: string;
};

type ToastKind = "info" | "success" | "error";

type ToastItem = {
  id: string;
  kind: ToastKind;
  message: string;
};

type ShopContextValue = {
  cart: CartLine[];
  wishlist: string[];
  cartCount: number;
  wishlistCount: number;
  addToCart: (line: Omit<CartLine, "quantity"> & { quantity?: number }) => void;
  setLineQuantity: (line: Omit<CartLine, "quantity"> & { quantity: number }) => void;
  removeFromCart: (line: Omit<CartLine, "quantity">) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toast: (message: string, kind?: ToastKind) => void;
  toasts: ToastItem[];
  dismissToast: (id: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "khanhs_studio_cart_v1";
const WISHLIST_KEY = "khanhs_studio_wishlist_v1";

function safeParseJson<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const savedCart = safeParseJson<CartLine[]>(localStorage.getItem(CART_KEY));
    const savedWishlist = safeParseJson<string[]>(
      localStorage.getItem(WISHLIST_KEY),
    );
    if (Array.isArray(savedCart)) setCart(savedCart);
    if (Array.isArray(savedWishlist)) setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const dismissToast = useCallback((id: string) => {
    setToasts((items) => items.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, kind: ToastKind = "info") => {
      const id = makeId();
      const item: ToastItem = { id, message, kind };
      setToasts((items) => [...items, item].slice(-3));
      window.setTimeout(() => dismissToast(id), 3200);
    },
    [dismissToast],
  );

  const addToCart = useCallback(
    (line: Omit<CartLine, "quantity"> & { quantity?: number }) => {
      const quantity = Math.max(1, Math.floor(line.quantity ?? 1));
      setCart((prev) => {
        const next = [...prev];
        const index = next.findIndex(
          (l) =>
            l.productId === line.productId && l.optionValue === line.optionValue,
        );
        if (index >= 0) {
          next[index] = { ...next[index], quantity: next[index].quantity + quantity };
          return next;
        }
        next.push({ ...line, quantity });
        return next;
      });
      toast("Đã thêm vào giỏ hàng", "success");
    },
    [toast],
  );

  const setLineQuantity = useCallback(
    (line: Omit<CartLine, "quantity"> & { quantity: number }) => {
      const quantity = Math.max(0, Math.floor(line.quantity));
      setCart((prev) => {
        const next = prev
          .map((l) =>
            l.productId === line.productId && l.optionValue === line.optionValue
              ? { ...l, quantity }
              : l,
          )
          .filter((l) => l.quantity > 0);
        return next;
      });
    },
    [],
  );

  const removeFromCart = useCallback((line: Omit<CartLine, "quantity">) => {
    setCart((prev) =>
      prev.filter(
        (l) =>
          !(
            l.productId === line.productId && l.optionValue === line.optionValue
          ),
      ),
    );
    toast("Đã xoá khỏi giỏ hàng", "info");
  }, [toast]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlist((prev) =>
        prev.includes(productId)
          ? prev.filter((id) => id !== productId)
          : [...prev, productId],
      );
    },
    [],
  );

  const isInWishlist = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, l) => sum + l.quantity, 0),
    [cart],
  );
  const wishlistCount = wishlist.length;

  const value = useMemo<ShopContextValue>(
    () => ({
      cart,
      wishlist,
      cartCount,
      wishlistCount,
      addToCart,
      setLineQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isInWishlist,
      toast,
      toasts,
      dismissToast,
    }),
    [
      addToCart,
      cart,
      cartCount,
      clearCart,
      dismissToast,
      isInWishlist,
      removeFromCart,
      setLineQuantity,
      toast,
      toasts,
      toggleWishlist,
      wishlist,
      wishlistCount,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within <ShopProvider>");
  return ctx;
}
