import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const userStore = create((set) => ({
  user: null,
  fetchUserData: async () => {
    try {
      const userData = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(userData);
      set({ user: userData });
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => set({ user: null }),
}));
