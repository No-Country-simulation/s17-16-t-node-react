import { z } from 'zod';

// Define validations for the zop model fields
const zopSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' })
                  .max(30, { message: 'Name cannot be longer than 30 characters.' })
                  .regex(/^[a-zA-Z0-9]+$/, { message: 'Name must contain only letters and numbers.' })
                  .required({ message: 'The name field is required.' }),
  description: z.string().max(255, { message: 'Description cannot be longer than 255 characters.' }).optional(),
  isActive: z.boolean({ required_error: 'The isActive field is required.' }),
  permissions: z.array(z.enum(['read', 'write', 'delete'], { message: 'Permission must be one of the following values: read, write, delete.' })).optional(),
});

// Function to validate a zop object
export const validateZop = (zop) => {
  try {
    zopSchema.parse(zop);
  } catch (error) {
    throw new Error(`Validation error: ${error.errors.map(x => x.message).join(', ')}`);
  }
};
