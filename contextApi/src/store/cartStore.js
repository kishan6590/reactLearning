import { create } from "zustand";

export const useCartStore = create((set) => ({
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
}));
