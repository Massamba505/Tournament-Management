import { api } from "./customFetch";
import type { Role } from "../types/role";

export const getRoles = (): Promise<Role[]> => {
  return api("/roles");
};
