import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  Team,
  TeamSummary,
  TeamMember,
  CreateTeamRequest,
  UpdateTeamRequest,
  UpdateTeamStatusRequest,
  TeamInvitation,
  CreateTeamInvitationRequest,
  TeamInvitationResponseRequest
} from "../types/team";
import type { Match } from "@features/Fixtures/types/match";
import type { PlayerStat } from "@features/Statistics/types/playerStat";

// Get all teams
export const getAllTeams = (): Promise<ApiResponse<Team[]>> => {
  return api("/teams", {
    method: "GET"
  }, true);
};

// Get team by ID
export const getTeamById = (teamId: string): Promise<ApiResponse<Team>> => {
  return api(`/teams/${teamId}`, {
    method: "GET"
  }, true);
};

// Get team details by ID
export const getTeamDetailsById = (teamId: string): Promise<ApiResponse<Team>> => {
  return api(`/teams/${teamId}/details`, {
    method: "GET"
  }, true);
};

// Create a new team
export const createTeam = (team: CreateTeamRequest): Promise<ApiResponse<Team>> => {
  return api("/teams", {
    method: "POST",
    body: JSON.stringify(team),
  }, true);
};

// Update a team
export const updateTeam = (teamId: string, team: UpdateTeamRequest): Promise<void> => {
  return api(`/teams/${teamId}`, {
    method: "PUT",
    body: JSON.stringify(team),
  }, true);
};

// Update team status
export const updateTeamStatus = (teamId: string, statusRequest: UpdateTeamStatusRequest): Promise<void> => {
  return api(`/teams/${teamId}/status`, {
    method: "PATCH",
    body: JSON.stringify(statusRequest),
  }, true);
};

// Delete a team
export const deleteTeam = (teamId: string): Promise<void> => {
  return api(`/teams/${teamId}`, {
    method: "DELETE",
  }, true);
};

// Search teams
export const searchTeams = (term: string): Promise<ApiResponse<TeamSummary[]>> => {
  return api(`/teams/search?term=${encodeURIComponent(term)}`, {
    method: "GET",
  }, true);
};

// Get teams by manager ID
export const getTeamsByManagerId = (managerId: string): Promise<ApiResponse<Team[]>> => {
  return api(`/teams/manager/${managerId}`, {
    method: "GET",
  }, true);
};

// Get current user's teams
export const getCurrentUserTeams = (): Promise<ApiResponse<Team[]>> => {
  return api(`/teams/my-teams`, {
    method: "GET",
  }, true);
};

// Team Members

// Get team members
export const getTeamMembers = (teamId: string): Promise<ApiResponse<TeamMember[]>> => {
  return api(`/teams/${teamId}/members`, {
    method: "GET",
  }, true);
};

// Remove team member
export const removeTeamMember = (teamId: string, userId: string): Promise<void> => {
  return api(`/teams/${teamId}/members/${userId}`, {
    method: "DELETE",
  }, true);
};

// Update member type
export const updateMemberType = (teamId: string, userId: string, memberType: string): Promise<void> => {
  return api(`/teams/${teamId}/members/${userId}/type`, {
    method: "PATCH",
    body: JSON.stringify({ memberType }),
  }, true);
};

// Team Statistics

// Get team matches
export const getTeamMatches = (teamId: string): Promise<ApiResponse<Match[]>> => {
  return api(`/teams/${teamId}/matches`, {
    method: "GET",
  }, true);
};

// Get team statistics
export const getTeamStatistics = (teamId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/teams/${teamId}/statistics`, {
    method: "GET",
  }, true);
};

// Team Invitations

// Get team invitations
export const getTeamInvitations = (teamId: string): Promise<ApiResponse<TeamInvitation[]>> => {
  return api(`/teams/${teamId}/invitations`, {
    method: "GET",
  }, true);
};

// Create team invitation
export const createTeamInvitation = (invitation: CreateTeamInvitationRequest): Promise<void> => {
  return api(`/team-invitations`, {
    method: "POST",
    body: JSON.stringify(invitation),
  }, true);
};

// Get user invitations
export const getUserInvitations = (): Promise<ApiResponse<TeamInvitation[]>> => {
  return api(`/team-invitations/my-invitations`, {
    method: "GET",
  }, true);
};

// Respond to invitation
export const respondToInvitation = (invitationId: string, response: TeamInvitationResponseRequest): Promise<void> => {
  return api(`/team-invitations/${invitationId}/respond`, {
    method: "PATCH",
    body: JSON.stringify(response),
  }, true);
};

// Delete invitation
export const deleteInvitation = (invitationId: string): Promise<void> => {
  return api(`/team-invitations/${invitationId}`, {
    method: "DELETE",
  }, true);
};
