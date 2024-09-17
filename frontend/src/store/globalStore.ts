import { getProducts } from "@/services/products";
import { create } from "zustand";

import type { IProduct } from "@/types/menu";
import type { IUser } from "@/types/user";

interface GlobalState {
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
  menu: IProduct[];
  addMenu: (product: IProduct) => void;
  getMenu: () => Promise<void>;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  //user
  user: undefined,
  setUser: (user: IUser | undefined) => set({ user }),

  //menu
  menu: [],
  addMenu: (product: IProduct) => set((state) => ({ ...state, menu: [...state.menu, product] })),
  getMenu: async () => {
    const res = await getProducts();
    set((state) => ({
      ...state,
      menu: res.data,
    }));
  },
}));
