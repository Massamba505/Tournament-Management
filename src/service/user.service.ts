import type { User } from "../types";
import { api } from "./customFetch";

interface UserResponse<T> {
  data: T;
  message?: string;
}

export const getCurrentUser = (): Promise<UserResponse<User>> => {
  return api("/users/me");
};

export const getAllUsers = (): Promise<UserResponse<User[]>> => {
  return api("/users");
};
