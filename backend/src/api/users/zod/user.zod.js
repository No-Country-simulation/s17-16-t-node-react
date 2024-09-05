import { z } from 'zod';

// Define validations for the Usuario model fields
const zodSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  email: z.string().email({ message: 'The email format is not valid.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  phone: z.string().nullable().optional(),
  role: z.string().optional(),
  avatar: z.string().nullable().optional(),
  isActive: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Function to validate a Usuario object
export const validateZod = (zod) => {
  try {
    zodSchema.parse(zod);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map(x => x.message).join(', ')}`);
  }
};
