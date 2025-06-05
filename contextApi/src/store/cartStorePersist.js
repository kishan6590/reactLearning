import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCartStore = create(persist((set) => ({
  cart: [1, 2, 3, 4, 5],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
})))
// Zustand + persist middleware automatically aapka data localStorage me save karta hai — aapko manually save karne ki zarurat bilkul bhi nahi hai.