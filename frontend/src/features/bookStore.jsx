import { create } from "zustand"

export const bookStore = create((set) => ({
  bookList: [],
  wishList: [],
  getBooks: async () => {
    const url =
      "https://v43-tier2-team14-backend.onrender.com/api/books?category=%7B%7D"

    try {
      const response = await fetch(url)
      const data = await response.json()
      set({ bookList: data })
      console.log(data.categories.items)
    } catch (error) {
      console.log(error)
    }
  },
  addToWishlist: () =>
    set((state) => ({
      // code here
    })),
}))
