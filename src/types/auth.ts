import type { Roles } from "../constants/roles";

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  roleId: Roles;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
}
