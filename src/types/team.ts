import type { Captain, Manager, Member } from "./user";

export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  manager: Manager;
  captain?: Captain;
  members?: Member[];
  players?: Member[];
}
