import type { ApiResponse } from "@shared/types/common";
import { api } from "@shared/services/customFetch";

export interface RoleInfo {
  id: number;
  name: string;
}

export const getRoles = (): Promise<ApiResponse<RoleInfo[]>> => {
  return api("/roles");
};
