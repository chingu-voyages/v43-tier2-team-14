import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = create({
  cartItems: null,
  fetchCartItems: async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/get-cart-items`,
      {
        userId: userId,
      }
    );
    set({ cartItems: response });
  },

  addItemToCart: async (userId, item) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/add-item-to-cart`,
      {
        userId: userId,
        item: item,
      }
    );
    set({ ...cartItems, response });
  },
  
  removeItemFromCart: async (userId, item) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/remove-item-from-cart`,
      {
        userId: userId,
        item: item,
      }
    );
    set({ response });
  },
});

export const cartStore = create(devtools(store));
