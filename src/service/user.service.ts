import type { User } from "../types";
import { api } from "./customFetch";

export const getCurrentUser = (): Promise<User> => {
  return api("/user/me");
};

export const getAllUsers = (): Promise<User[]> => {
  return api("/user");
};
