export type PersonalRole = "Chef" | "Mesero/a";

export interface IPersonal {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: PersonalRole;
  avatar: string;
  phone: string;
  restaurant: string;
}
