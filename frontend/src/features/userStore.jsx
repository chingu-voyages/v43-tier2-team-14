import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  fetchUserData: async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user`,
      {
        credentials: "include",
      }
    );
    const resData = await response.text();
    const userData = resData ? JSON.parse(resData) : null;
    console.log(userData);
    set({ user: userData });
  },
  logout: async () => set({ user: null }),
}));
