import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  fetchUserData: async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}`;
    const res = await fetch(`${url}/api/user`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => set({ user: data }));
  },
  logout: async () => set({ user: null }),
}));
