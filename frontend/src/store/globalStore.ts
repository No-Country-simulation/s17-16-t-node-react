import { getProducts } from "@/services/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { IProduct } from "@/types/menu";
import type { Order } from "@/types/orders";
import type { IUser } from "@/types/user";

interface GlobalState {
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
  menu: IProduct[];
  addMenu: (product: IProduct) => void;
  getMenu: () => Promise<void>;
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrder: (order: Order) => void;
  deleteOrder: (orderId: string) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      //user
      user: undefined,
      setUser: (user: IUser | undefined) => set({ user }),

      //menu
      menu: [],
      addMenu: (product: IProduct) =>
        set((state) => ({ ...state, menu: [...state.menu, product] })),
      getMenu: async () => {
        const res = await getProducts();
        set((state) => ({
          ...state,
          menu: res.data,
        }));
      },

      //orders
      orders: [],
      addOrder: (order: Order) => set((state) => ({ ...state, orders: [...state.orders, order] })),
      updateOrder: (order: Order) => {
        set((state) => {
          if (order.status === "Terminado") {
            return { ...state, orders: state.orders.filter((o) => o.id !== order.id) };
          }

          const ordersUpdated = state.orders.map((o) => (o.id === order.id ? order : o));
          return { ...state, orders: ordersUpdated };
        });
      },
      deleteOrder: (orderId: string) =>
        set((state) => ({ ...state, orders: state.orders.filter((o) => o.id !== orderId) })),
    }),
    { name: "global-state" },
  ),
);
