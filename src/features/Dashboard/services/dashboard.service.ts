import { api } from "@shared/services/customFetch";
import type { Tournament } from "@features/Tournaments/types/tournament";
import type { ApiResponse } from "@shared/types/common";

export const getUpcomingTournaments = async (): Promise<ApiResponse<Tournament[]>> => {
  return api("/tournaments?status=RegistrationOpen");
};