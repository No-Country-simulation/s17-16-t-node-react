import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  code: z.string(),
  photo: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  category: z.string(),
  quantity: z.number().min(1, "La cantidad mínima es 1"),
});

export type OrderProduct = z.infer<typeof productSchema>;

export const orderSchema = z.object({
  id: z.string(),
  tableNumber: z.string(),
  total: z.string(),
  description: z.string().optional(),
  products: z.array(productSchema).nonempty("Debe seleccionar al menos un producto"),
});

export type Order = z.infer<typeof orderSchema> & {
  id: string;
};
