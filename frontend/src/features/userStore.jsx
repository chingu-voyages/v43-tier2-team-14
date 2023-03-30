import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const userStore = create((set) => ({
  user: null,
  logout: async () => {
    set({ user: null });
  },
  fetchUserData: async () => {
    try {
      const userInfo = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(userInfo.data);
      set({ user: userInfo.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
