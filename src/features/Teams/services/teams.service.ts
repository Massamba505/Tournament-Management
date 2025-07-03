import { api } from "@shared/services/customFetch";
import type { Team } from "../types/team";
import type { Player } from "@features/Statistics/types/player";
import type { ApiResponse } from "@shared/types/common";

export const getTeams = (): Promise<Team[]> => {
  return api("/teams");
};

export const createTeam = (team: Partial<Team>): Promise<void> => {
  return api("/teams", {
    method: "POST",
    body: JSON.stringify(team),
  });
};

export const getTeamPlayers = (
  teamId: string
): Promise<ApiResponse<Player[]>> => {
  return api(`/teams/${teamId}/player`);
};
