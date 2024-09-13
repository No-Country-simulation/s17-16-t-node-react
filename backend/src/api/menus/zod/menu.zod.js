import { z } from 'zod';

// Define validations for the Menu model fields
const menuSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  description: z.string().optional(),
  price: z.string().min(1).max(50).optional(),
  category: z.string().optional(),
  available: z.boolean().optional(),
  restaurant: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Function to validate a Menu object
export const validateMenu = (menu) => {
  try {
    menuSchema.parse(menu);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map((x) => x.message).join(', ')}`);
  }
};
