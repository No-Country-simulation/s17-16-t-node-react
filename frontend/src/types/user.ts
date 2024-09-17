export interface IUser {
  id: string;
  avatar: string;
  dni: string | null;
  name: string;
  lastName: string;
  email: string;
  phone: string | null;
  role: string | null;
}
