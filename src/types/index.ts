export interface Auth {
  token: string;
}

export type Roles = "General" | "Organiser";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: Roles;
}
