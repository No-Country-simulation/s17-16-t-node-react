import { z } from "zod";

export interface ITable {
  id: string;
  tableNumber: number;
  chairs: number;
  available: boolean;
}

export const tableResponse = z.object({
  id: z.string(),
  tableNumber: z.string(),
  chairs: z.string(),
  available: z.boolean(),
});

export const tableFormSchema = tableResponse.omit({ id: true, available: true });
export type Table = z.infer<typeof tableResponse>;
