import { z } from 'zod';

// Define validations for the zop model fields
const roleSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' })
                  .max(30, { message: 'Name cannot be longer than 30 characters.' })
                  .optional(),
  description: z.string().max(255, { message: 'Description cannot be longer than 255 characters.' }).optional(),
  isActive: z.boolean().optional(),
  permissions: z.array().optional(),
});

// Function to validate a zop object
export const validateRole = (role) => {
  try {
    roleSchema.parse(role);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map(x => x.message).join(', ')}`);
  }
};
