import type { Role } from "./role";

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: Role;
}
