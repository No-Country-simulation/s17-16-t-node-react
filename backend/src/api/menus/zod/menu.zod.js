import { z } from 'zod';

// Define validations for the Menu model fields
const zodSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  description: z.string().optional(),
  price: z.string().min(1, { message: 'Price is required.' }),
  category: z.string().optional(),
  available: z.boolean().optional(),
  restaurant: z.string().min(1, { message: 'Restaurant ID is required.' }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Function to validate a Menu object
export const validateZod = (zod) => {
  try {
    zodSchema.parse(zod);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map((x) => x.message).join(', ')}`);
  }
};

export default zodSchema;

