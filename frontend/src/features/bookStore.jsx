import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const store = (set) => ({
  bookList: [],
  wishList: [],
  getBooks: async () => {
    const url = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/books?category=science+fiction`;
    console.log(url);
    // must add category name for it to work
    // "http://localhost:4000/api/books?category=science+fiction";
    // ?category=category name
    // &limit=40 maximum 40 books
    // &lang=ar
    // &orderBy=newest or relevance

    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ bookList: data.categories.items });
    } catch (error) {
      console.log(error);
    }
  },
  addToWishlist: (item) =>
    set((state) => {
      const wishItemExist = state.wishList.some(
        (wishItem) => wishItem.id === item.id
      );
      if (!wishItemExist) {
        return {
          wishList: [...state.wishList, item],
        };
      }
      return state;
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => item.id !== id),
    })),
});

export const bookStore = create(
  persist(devtools(store), { name: "bookStore" })
);
