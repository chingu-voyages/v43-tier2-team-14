import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  getUserData: async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}`;
      const res = await fetch(`${url}/api/user`, {
        credentials: "include",
      });
      console.log(url);
      const resData = await res.text();
      const userData = resData ? JSON.parse(resData) : null;
      console.log(userData);
      set({ user: userData });
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => set({ user: null }),
}));
