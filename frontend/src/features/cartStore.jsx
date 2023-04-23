import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = create({
  cart: null,
  getCart: async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/get-cart-items`,
      {
        userId: userId,
      }
    );
    set({ cart: response });
  },
  addItemToCartState: (item) => {
    set((state)=>{
      const cartItemExist = state.cart.find(item.id)
    })
  },

  removeItemFromCartState: async (item) => {
    set({ ...cart, item });
  },

  addCartDB: async (userId, cart) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/add-item-to-cart`,
      {
        userId: userId,
        item: item,
      }
    );
    set({ ...cart, response });
  },

  removeCartDB: async (userId) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/remove-item-from-cart`,
      {
        userId: userId,
      }
    );
    set({ response });
  },
});

export const cartStore = create(devtools(store));
