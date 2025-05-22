export type Roles = 1 | 2;

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  profilePricture: string;
  role: Roles;
}

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  roleId: number;
}
