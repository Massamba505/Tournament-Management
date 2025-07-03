import type { Roles } from "@shared/constants/roles";

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: Roles;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
}
