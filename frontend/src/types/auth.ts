import { z } from "zod";

// Login
export const loginSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
export type LoginRequest = z.infer<typeof loginSchema>;
export type LoginResponse = {
  token: string;
};

// Register
export const registerSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
});
export type RegisterRequest = z.infer<typeof registerSchema>;
export type RegisterResponse = {
  token: string;
};
