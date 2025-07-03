import type { Roles } from "@shared/constants/roles";
import type { ApiResponse } from "@shared/types/common";
import { api } from "@shared/services/customFetch";

export const getRoles = (): Promise<ApiResponse<ApiResponse<Roles[]>>> => {
  return api("/roles");
};
