import { z } from "zod";

// Login
const responseSchema = z.object({
  code: z.number(),
  status: z.string(),
  description: z.string(),
  endPoint: z.string(),
  limit: z.string(),
  remaining: z.string(),
  rest: z.string(),
  data: z
    .object({
      user: z.object({
        id: z.string(),
        avatar: z.string().url(),
        dni: z.string().nullable(),
        name: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        phone: z.string().nullable(),
        role: z.string().nullable(),
      }),
      token: z.string().optional(),
    })
    .partial(),
});
export const loginSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
export type LoginResponse = z.infer<typeof responseSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;

// Register
export const registerSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
});
export type RegisterRequest = z.infer<typeof registerSchema>;
export type RegisterResponse = z.infer<typeof responseSchema>;
