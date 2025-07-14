import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type { 
  Match, 
  MatchDetail,
  MatchCreateRequest, 
  MatchUpdateRequest, 
  UpdateMatchStatusRequest
} from "@shared/types/match";
import type { MatchStatus } from "@shared/types/enums";

export const getMatchById = (matchId: string): Promise<ApiResponse<MatchDetail>> => {
  return api(`/matches/${matchId}`, {
    method: "GET"
  }, true);
};

export const getMatchesByTournament = (tournamentId: string): Promise<ApiResponse<Match[]>> => {
  return api(`/matches/tournament/${tournamentId}`, {
    method: "GET",
  }, true);
};

export const getMatchesByTeam = (teamId: string): Promise<ApiResponse<Match[]>> => {
  return api(`/matches/team/${teamId}`, {
    method: "GET",
  }, true);
};

export const getMatchesByStatus = (tournamentId: string, status: MatchStatus): Promise<ApiResponse<Match[]>> => {
  return api(`/matches/tournament/${tournamentId}/status/${status}`, {
    method: "GET",
  }, true);
};

export const createMatch = (match: MatchCreateRequest): Promise<void> => {
  return api("/matches", {
    method: "POST",
    body: JSON.stringify(match),
  }, true);
};

export const updateMatch = (matchId: string, match: MatchUpdateRequest): Promise<void> => {
  return api(`/matches/${matchId}`, {
    method: "PUT",
    body: JSON.stringify(match),
  }, true);
};

export const updateMatchStatus = (matchId: string, statusUpdate: UpdateMatchStatusRequest): Promise<void> => {
  return api(`/matches/${matchId}/status`, {
    method: "PATCH",
    body: JSON.stringify(statusUpdate),
  }, true);
};

export const deleteMatch = (matchId: string): Promise<void> => {
  return api(`/matches/${matchId}`, {
    method: "DELETE",
  }, true);
};
