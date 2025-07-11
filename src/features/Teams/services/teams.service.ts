import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  Team,
  TeamSummary,
  CreateTeamRequest,
  UpdateTeamRequest,
} from "../types/team";
import type { Match } from "@features/Fixtures/types/match";

export const getCurrentUserTeams = (): Promise<ApiResponse<Team[]>> => {
  return api("/teams", { method: "GET" }, true);
};

export const getTeamById = (teamId: string): Promise<ApiResponse<Team>> => {
  return api(`/teams/${teamId}`, { method: "GET" }, true);
};

export const getTeamDetailsById = (
  teamId: string
): Promise<ApiResponse<Team>> => {
  return api(`/teams/details/${teamId}`, { method: "GET" }, true);
};

export const createTeam = (
  team: CreateTeamRequest
): Promise<ApiResponse<Team>> => {
  return api(
    "/teams",
    {
      method: "POST",
      body: JSON.stringify(team),
    },
    true
  );
};

export const updateTeam = (
  teamId: string,
  team: UpdateTeamRequest
): Promise<void> => {
  return api(
    `/teams/${teamId}`,
    {
      method: "PUT",
      body: JSON.stringify(team),
    },
    true
  );
};

export const deactivateTeam = (teamId: string): Promise<void> => {
  return api(`/teams/${teamId}/deactivate`, { method: "PATCH" }, true);
};

export const activateTeam = (teamId: string): Promise<void> => {
  return api(`/teams/${teamId}/activate`, { method: "PATCH" }, true);
};

export const deleteTeam = (teamId: string): Promise<void> => {
  return api(`/teams/${teamId}`, { method: "DELETE" }, true);
};

export const searchTeams = (
  term: string
): Promise<ApiResponse<TeamSummary[]>> => {
  return api(
    `/teams/search?query=${encodeURIComponent(term)}`,
    { method: "GET" },
    true
  );
};

export const getTeamsByStatus = (
  status: string
): Promise<ApiResponse<Team[]>> => {
  return api(`/teams/status/${status}`, { method: "GET" }, true);
};

export const getTeamMatches = (
  teamId: string
): Promise<ApiResponse<Match[]>> => {
  return api(`/teams/${teamId}/matches`, { method: "GET" }, true);
};

export const getTeamStatistics = (
  teamId: string
): Promise<ApiResponse<any>> => {
  return api(`/teams/${teamId}/statistics`, { method: "GET" }, true);
};
