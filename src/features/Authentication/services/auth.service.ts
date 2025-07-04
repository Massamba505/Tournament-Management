import { api } from "@shared/services/customFetch";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  ChangePasswordRequest,
  ResetPasswordRequest,
  ForgotPasswordRequest,
} from "../types/auth";

export const login = (data: LoginRequest): Promise<AuthResponse> => {
  return api(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    false
  );
};

export const register = (data: RegisterRequest): Promise<AuthResponse> => {
  return api(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    false
  );
};

export const logout = (): Promise<AuthResponse> => {
  return api(
    "/auth/logout",
    {
      method: "POST",
    },
    true
  );
};

export const changePassword = (
  data: ChangePasswordRequest
): Promise<AuthResponse> => {
  return api(
    "/auth/change-password",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    true
  );
};

export const resetPassword = (
  token: string,
  data: ResetPasswordRequest
): Promise<AuthResponse> => {
  return api(
    `/auth/reset-password/${token}`,
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    false
  );
};

export const forgotPassword = (
  data: ForgotPasswordRequest
): Promise<AuthResponse> => {
  return api(
    "/auth/forgot-password",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    false
  );
};
