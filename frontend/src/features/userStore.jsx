import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  fetchUserData: async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}`;
    const res = await fetch(`${url}/api/user`, {
      credentials: "include",
    });
    const resData = await res.text();
    const userData = resData ? JSON.parse(resData) : null;
    console.log("User data:", userData);
    set({ user: userData });
  },
  logout: async () => set({ user: null }),
}));
