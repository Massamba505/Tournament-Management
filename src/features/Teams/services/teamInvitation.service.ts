import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  TeamInvitation,
  CreateTeamInvitationRequest,
  TeamInvitationResponseRequest,
} from "@features/Teams/types/teamInvitation";

export const getUserInvitations = (): Promise<
  ApiResponse<TeamInvitation[]>
> => {
  return api("/team-invitations/user", { method: "GET" }, true);
};

export const getTeamInvitations = (
  teamId: string
): Promise<ApiResponse<TeamInvitation[]>> => {
  return api(`/team-invitations/team/${teamId}`, { method: "GET" }, true);
};

export const getInvitationById = (
  invitationId: string
): Promise<ApiResponse<TeamInvitation>> => {
  return api(`/team-invitations/${invitationId}`, { method: "GET" }, true);
};

export const sendInvitation = (
  payload: CreateTeamInvitationRequest
): Promise<ApiResponse<{ invitationId: string }>> => {
  return api(
    "/team-invitations",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    true
  );
};

export const respondToInvitation = (
  invitationId: string,
  payload: TeamInvitationResponseRequest
): Promise<void> => {
  return api(
    `/team-invitations/${invitationId}/respond`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
    true
  );
};

export const cancelInvitation = (invitationId: string): Promise<void> => {
  return api(
    `/team-invitations/${invitationId}/cancel`,
    { method: "DELETE" },
    true
  );
};
