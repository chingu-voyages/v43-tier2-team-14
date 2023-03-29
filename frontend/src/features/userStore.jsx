import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const userStore = create((set) => ({
  user: null,
  updateUser: (user) => set(() => ({ user: user })),

  logout: async () => set({ user: null }),
}));
