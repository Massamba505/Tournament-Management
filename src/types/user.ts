import type { Roles } from "../constants/roles";

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: Roles;
}
