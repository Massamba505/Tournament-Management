import type { ApiResponse } from "@shared/types/common";
import type { User, UserDetail, UserSummary, UserUpdateRequest } from "@shared/types/user";
import { api } from "@shared/services/customFetch";
import type { PlayerStat } from "@shared/types/playerStat";
import type { UserStatus } from "@shared/types/enums";

export const getCurrentUser = (): Promise<ApiResponse<User>> => {
  return api("/users/me", {
    method: "GET",
  }, true);
};

export const getUserById = (userId: string): Promise<ApiResponse<User>> => {
  return api(`/users/${userId}`, {
    method: "GET",
  }, true);
};

export const getUserProfile = (userId: string): Promise<ApiResponse<UserDetail>> => {
  return api(`/users/${userId}/profile`, {
    method: "GET",
  }, true);
};

export const updateUserProfile = (userId: string, profileData: UserUpdateRequest): Promise<void> => {
  return api(`/users/${userId}/profile`, {
    method: "PUT",
    body: JSON.stringify(profileData),
  }, true);
};

export const updateUserStatus = (userId: string, status: UserStatus): Promise<void> => {
  return api(`/users/${userId}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  }, true);
};

export const getUserStatistics = (userId: string): Promise<ApiResponse<{ userId: string; name: string; surname: string; stats: PlayerStat[] }>> => {
  return api(`/users/${userId}/stats`, {
    method: "GET",
  }, true);
};

export const getUserTeams = (userId: string): Promise<ApiResponse<UserSummary[]>> => {
  return api(`/users/${userId}/teams`, {
    method: "GET",
  }, true);
};

export const searchUsers = (query: string): Promise<ApiResponse<User[]>> => {
  return api(`/users/search?query=${encodeURIComponent(query)}`, {
    method: "GET",
  }, true);
};
