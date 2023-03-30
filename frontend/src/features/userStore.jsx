import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  logout: async () => {
    set({ user: null });
  },
  setUserData: (user) =>
    set((state) => ({
      user: user,
    })),
}));
