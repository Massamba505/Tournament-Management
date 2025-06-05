import { api } from "./customFetch";
import type { Team } from "../types/team";
import type { Player } from "../types/player";
import type { PlayerStat } from "../types/playerStat";
import type { TeamLeaderboardEntry } from "../types/leaderboard";

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
  return api(`/teams/${teamId}/players`);
};

export const getPlayerStatsForMatch = (
  matchId: number
): Promise<PlayerStat[]> => {
  return api(`/matches/${matchId}/player-stats`);
};

export const getLeaderboard = (
  tournamentId: string
): Promise<TeamLeaderboardEntry[]> => {
  return api(`/tournaments/${tournamentId}/leaderboard`);
};
