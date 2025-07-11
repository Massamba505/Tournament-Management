import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type { 
  Match, 
  CreateMatchRequest, 
  UpdateMatchRequest, 
  UpdateMatchScoreRequest,
  MatchStatus
} from "../types/match";
import type { PlayerStat, CreatePlayerStatRequest, UpdatePlayerStatRequest } from "@features/Statistics/types/playerStat";

// Get match by ID
export const getMatchById = (matchId: string): Promise<ApiResponse<Match>> => {
  return api(`/team-matches/${matchId}`, {
    method: "GET"
  }, true);
};

// Get match details
export const getMatchDetails = (matchId: string): Promise<ApiResponse<Match>> => {
  return api(`/team-matches/${matchId}/details`, {
    method: "GET"
  }, true);
};

// Create a match
export const createMatch = (match: CreateMatchRequest): Promise<void> => {
  return api("/team-matches", {
    method: "POST",
    body: JSON.stringify(match),
  }, true);
};

// Update a match
export const updateMatch = (matchId: string, match: UpdateMatchRequest): Promise<void> => {
  return api(`/team-matches/${matchId}`, {
    method: "PUT",
    body: JSON.stringify(match),
  }, true);
};

// Update match score
export const updateMatchScore = (matchId: string, scoreUpdate: UpdateMatchScoreRequest): Promise<void> => {
  return api(`/team-matches/${matchId}/score`, {
    method: "PATCH",
    body: JSON.stringify(scoreUpdate),
  }, true);
};

// Delete a match
export const deleteMatch = (matchId: string): Promise<void> => {
  return api(`/team-matches/${matchId}`, {
    method: "DELETE",
  }, true);
};

// Get matches by tournament
export const getMatchesByTournament = (tournamentId: string): Promise<ApiResponse<Match[]>> => {
  return api(`/matches/tournament/${tournamentId}`, {
    method: "GET",
  }, true);
};

// Get matches by team
export const getMatchesByTeam = (teamId: string): Promise<ApiResponse<Match[]>> => {
  return api(`/teams/${teamId}/matches`, {
    method: "GET",
  }, true);
};

// Get matches by status
export const getMatchesByStatus = (status: MatchStatus): Promise<ApiResponse<Match[]>> => {
  return api(`/team-matches/status/${status}`, {
    method: "GET",
  }, true);
};

// Player stats for a match

// Get player stats for a match
export const getMatchPlayerStats = (matchId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/team-matches/${matchId}/player-stats`, {
    method: "GET",
  }, true);
};

// Add player stat to a match
export const addPlayerStat = (playerStat: CreatePlayerStatRequest): Promise<void> => {
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
