import type { ApiResponse } from "@shared/types/common";
import type { User } from "@shared/types/user";
import { api } from "@shared/services/customFetch";

export const getCurrentUser = (): Promise<ApiResponse<User>> => {
  return api("/users/me");
};

export const getAllUsers = (): Promise<ApiResponse<User[]>> => {
  return api("/users");
};
