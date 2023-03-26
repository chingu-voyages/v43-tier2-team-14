import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { persist } from "zustand/middleware"

const store = (set) => ({
  bookList: [],
  wishList: [],
  getBooks: async () => {
    const url = "https://v43-tier2-team14-backend.onrender.com/api/books/"
    // &limit=50

    try {
      const response = await fetch(url)
      const data = await response.json()
      set({ bookList: data.categories.items })
    } catch (error) {
      console.log(error)
    }
  },
  addToWishlist: (item) =>
    set((state) => ({
      wishList: [...state.wishList, item],
    })),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => {
        return item.id !== id
      }),
    })),
})

export const bookStore = create(persist(devtools(store), { name: "bookStore" }))