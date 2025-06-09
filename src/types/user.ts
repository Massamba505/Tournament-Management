import type { Role } from "./role";

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: Role;
  createdAt: string;
}
