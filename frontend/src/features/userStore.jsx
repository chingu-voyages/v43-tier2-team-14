import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const userStore = create((set) => ({
  user: null,
  fetchUserData: () => {
    const response = axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`);
    console.log(response);
  },
  logout: async () => {
    set({ user: null });
  },
  setUserData: (user) =>
    set((state) => ({
      user: user,
    })),
}));
