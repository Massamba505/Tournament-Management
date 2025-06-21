import type { User } from "../types";
import type { ApiResponse } from "../types/common";
import { api } from "./customFetch";

export const getCurrentUser = (): Promise<ApiResponse<User>> => {
  return api("/users/me");
};

export const getAllUsers = (): Promise<ApiResponse<User[]>> => {
  return api("/users");
};
