import type { ApiResponse } from "@shared/types/common";
import type { User, UserSummary } from "@shared/types/user";
import { api } from "@shared/services/customFetch";
import type { PlayerStat } from "@features/Statistics/types/playerStat";

// Get current user
export const getCurrentUser = (): Promise<ApiResponse<User>> => {
  return api("/users/me", {
    method: "GET",
  }, true);
};

// Get user by ID
export const getUserById = (userId: string): Promise<ApiResponse<User>> => {
  return api(`/users/${userId}`, {
    method: "GET",
  }, true);
};

// Get user profile
export const getUserProfile = (userId: string): Promise<ApiResponse<User>> => {
  return api(`/users/${userId}/profile`, {
    method: "GET",
  }, true);
};

// Update user profile
export const updateUserProfile = (userId: string, profileData: Partial<User>): Promise<void> => {
  return api(`/users/${userId}/profile`, {
    method: "PUT",
    body: JSON.stringify(profileData),
  }, true);
};

// Update user status
export const updateUserStatus = (userId: string, status: string): Promise<void> => {
  return api(`/users/${userId}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  }, true);
};

// Get user statistics
export const getUserStatistics = (userId: string): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/users/${userId}/statistics`, {
    method: "GET",
  }, true);
};

// Search users
export const searchUsers = (term: string): Promise<ApiResponse<UserSummary[]>> => {
  return api(`/users/search?term=${encodeURIComponent(term)}`, {
    method: "GET",
  }, true);
};

// Get all users
export const getAllUsers = (): Promise<ApiResponse<User[]>> => {
  return api("/users", {
    method: "GET",
  }, true);
};
