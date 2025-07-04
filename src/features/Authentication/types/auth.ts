import type { Roles } from "@shared/constants/roles";
import type { User } from "@shared/types/user";

export interface RegisterRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Roles;
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

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface ForgotPasswordRequest {
  email: string;
}
