import { z } from 'zod';

// Define validations for the Usuario model fields
const userSchema = z.object({
  name: z.string().min(3).max(150).optional(),
  lastName: z.string().min(3).max(150).optional(),
  email: z.string().email().optional(),
  password: z.string().min(3).max(10).optional(),
  phone: z.string().nullable().optional(),
  role: z.string().optional(),
  avatar: z.string().nullable().optional(),
  isActive: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Function to validate a Usuario object
export const validateUser = (user) => {
  try {
    userSchema.parse(user);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map(x => x.message).join(', ')}`);
  }
};
