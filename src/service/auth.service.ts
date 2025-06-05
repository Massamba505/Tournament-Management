import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../types/auth";
import { api } from "./customFetch";

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
