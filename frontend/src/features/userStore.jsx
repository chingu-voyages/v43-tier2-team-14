import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  user: null,
  fetchUserData: async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/user`,
      { withCredentials: true }
    );
    console.log(response.data);
  },
  logout: async () => {
    set({ user: null });
  },
  setUserData: (user) =>
    set((state) => ({
      user: user,
    })),
});

export const userStore = create(devtools(store));
