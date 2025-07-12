import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  TeamMember,
  AddTeamMemberRequest,
  UpdateMemberTypeRequest,
} from "../types/teamMember";

export const getTeamMembers = (
  teamId: string
): Promise<ApiResponse<TeamMember[]>> => {
  return api(`/teams/${teamId}/members`, { method: "GET" }, true);
};

export const getTeamMember = (
  teamId: string,
  userId: string
): Promise<ApiResponse<TeamMember>> => {
  return api(`/teams/${teamId}/members/${userId}`, { method: "GET" }, true);
};

export const addTeamMember = (
  teamId: string,
  member: AddTeamMemberRequest
): Promise<void> => {
  return api(
    `/teams/${teamId}/members`,
    {
      method: "POST",
      body: JSON.stringify(member),
    },
    true
  );
};

export const removeTeamMember = (
  teamId: string,
  userId: string
): Promise<void> => {
  return api(
    `/teams/${teamId}/members/${userId}`,
    {
      method: "DELETE",
    },
    true
  );
};

export const assignTeamCaptain = (
  teamId: string,
  userId: string
): Promise<void> => {
  return api(
    `/teams/${teamId}/members/${userId}/captain/assign`,
    {
      method: "PATCH",
    },
    true
  );
};

export const updateMemberType = (
  teamId: string,
  userId: string,
  request: UpdateMemberTypeRequest
): Promise<void> => {
  return api(
    `/teams/${teamId}/members/${userId}/type`,
    {
      method: "PATCH",
      body: JSON.stringify(request),
    },
    true
  );
};
