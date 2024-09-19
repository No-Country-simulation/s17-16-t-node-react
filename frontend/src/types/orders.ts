import type { IProduct } from "./menu";

export type OrderProduct = IProduct & { quantity: number };

export type OrderStatus = "Esperando" | "Preparando" | "Listo" | "Entregado" | "Terminado";

export type Order = {
  id: string;
  tableNumber: string;
  description: string;
  total: number;
  products: OrderProduct[];
  status: OrderStatus;
};
