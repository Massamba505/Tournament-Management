import type { Tournament } from "@/shared/types/tournament";
import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";

export const getUpcomingTournaments = async (count: number = 5): Promise<ApiResponse<Tournament[]>> => {
  return api(`/tournaments/upcoming?count=${count}`);
};

export const getTournamentsByStatus = async (status: string): Promise<ApiResponse<Tournament[]>> => {
  return api(`/tournaments/status/${status}`);
};