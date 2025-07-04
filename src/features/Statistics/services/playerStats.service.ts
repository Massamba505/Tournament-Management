import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type { PlayerStat, CreatePlayerStatRequest, UpdatePlayerStatRequest } from "../types/playerStat";

// Get player stats by player ID
export const getPlayerStatsByPlayer = (playerId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/player-stats/player/${playerId}`, {
    method: "GET"
  }, true);
};

// Get player stats by team ID
export const getPlayerStatsByTeam = (teamId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/player-stats/team/${teamId}`, {
    method: "GET"
  }, true);
};

// Get player stats by tournament ID
export const getPlayerStatsByTournament = (tournamentId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/player-stats/tournament/${tournamentId}`, {
    method: "GET"
  }, true);
};

// Get player stats by match ID
export const getPlayerStatsByMatch = (matchId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/team-matches/${matchId}/player-stats`, {
    method: "GET"
  }, true);
};

// Create player stat
export const createPlayerStat = (playerStat: CreatePlayerStatRequest): Promise<void> => {
  return api(`/player-stats`, {
    method: "POST",
    body: JSON.stringify(playerStat),
  }, true);
};

// Update player stat
export const updatePlayerStat = (playerStatId: string, playerStat: UpdatePlayerStatRequest): Promise<void> => {
  return api(`/player-stats/${playerStatId}`, {
    method: "PUT",
    body: JSON.stringify(playerStat),
  }, true);
};

// Delete player stat
export const deletePlayerStat = (playerStatId: string): Promise<void> => {
  return api(`/player-stats/${playerStatId}`, {
    method: "DELETE",
  }, true);
};
