import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  JoinTournamentRequest,
  TournamentTeam,
  TournamentTeamDetail,
} from "../types/tournamentTeams.model";

export const joinTournament = (
  tournamentId: string,
  request: JoinTournamentRequest
): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}/teams`,
    {
      method: "POST",
      body: JSON.stringify(request),
    },
    true
  );
};

export const getTournamentTeam = (
  tournamentId: string,
  teamId: string
): Promise<ApiResponse<TournamentTeam>> => {
  return api(
    `/tournaments/${tournamentId}/teams/${teamId}`,
    {
      method: "GET",
    },
    true
  );
};

export const getTournamentTeamDetails = (
  tournamentId: string,
  teamId: string
): Promise<ApiResponse<TournamentTeamDetail>> => {
  return api(
    `/tournaments/${tournamentId}/teams/${teamId}/details`,
    {
      method: "GET",
    },
    true
  );
};

export const getTournamentTeams = (
  tournamentId: string
): Promise<ApiResponse<TournamentTeam[]>> => {
  return api(
    `/tournaments/${tournamentId}/teams`,
    {
      method: "GET",
    },
    true
  );
};

export const removeTournamentTeam = (
  tournamentId: string,
  teamId: string
): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}/teams/${teamId}`,
    {
      method: "DELETE",
    },
    true
  );
};

export const checkTeamExistsInTournament = (
  tournamentId: string,
  teamId: string
): Promise<ApiResponse<{ exists: boolean }>> => {
  return api(
    `/tournaments/${tournamentId}/teams/${teamId}/exists`,
    {
      method: "GET",
    },
    true
  );
};
