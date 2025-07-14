import { api } from "@shared/services/customFetch";

export interface RoleInfo {
  id: number;
  name: string;
}

export const getRoles = (): Promise<RoleInfo[]> => {
  return api("/roles", { method: "GET" }, false);
};
