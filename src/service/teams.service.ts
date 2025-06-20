import { api } from "./customFetch";
import type { Team } from "../types/team";
import type { Player } from "../types/player";

export const getTeams = (): Promise<Team[]> => {
  return api("/teams");
};

export const createTeam = (team: Partial<Team>): Promise<void> => {
  return api("/teams", {
    method: "POST",
    body: JSON.stringify(team),
  });
};

export const getTeamPlayers = (teamId: string): Promise<Player[]> => {
  return api(`/teams/${teamId}/player`);
};
