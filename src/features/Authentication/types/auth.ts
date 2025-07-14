import type { UserRole } from "@shared/types/enums";
import type { User } from "@shared/types/user";

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  profilePicture?: string | null;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
  user?: User;
}
