import type { Roles } from "../constants/roles";
import type { ApiResponse } from "../types/common";
import { api } from "./customFetch";

export const getRoles = (): Promise<ApiResponse<ApiResponse<Roles[]>>> => {
  return api("/roles");
};
