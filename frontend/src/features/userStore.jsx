import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const store = (set) => ({
  user: [],
  getUserData: async () => {
    const url = `http://localhost:4000/api/user`;

    try {
      const res = await fetch(url, {
        credentials: "include",
      });
      const userData = await res.json();
      console.log(userData);
      set({ user: userData });
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  },

  //function if you want to mutate the state
  // addToWishlist: (item) =>
  //   set((state) => ({
  //     wishList: [...state.wishList, item],
  //   })),
});

export const userStore = create(
  persist(devtools(store), { name: "userStore" })
);
