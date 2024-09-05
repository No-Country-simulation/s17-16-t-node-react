import { z } from "zod";

// Define validations for the restaurant model fields
const zodSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(100, { message: "Name cannot be longer than 100 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long." })
    .max(255, { message: "Address cannot be longer than 255 characters." }),
  category: z
    .string()
    .min(3, { message: "Category must be at least 3 characters long." })
    .max(50, { message: "Category cannot be longer than 50 characters." }),
  logo: z.string().url({ message: "Logo must be a valid URL." }).optional(),
  owner: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, { message: "Owner must be a valid ObjectId." }),
  menus: z
    .array(
      z.string().regex(/^[0-9a-fA-F]{24}$/, {
        message: "Menu must be a valid ObjectId.",
      })
    )
    .optional(),
  staff: z
    .array(
      z.string().regex(/^[0-9a-fA-F]{24}$/, {
        message: "Staff must be a valid ObjectId.",
      })
    )
    .optional(),
  isActive: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Function to validate a restaurant object
export const validateZod = (zod) => {
  try {
    zodSchema.parse(zod);
  } catch (error) {
    throw new Error(
      `Validation error: ${error.errors.map((x) => x.message).join(", ")}`
    );
  }
};
