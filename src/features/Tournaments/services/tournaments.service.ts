import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  TournamentCreateRequest,
  Tournament,
  TournamentDetail,
  TournamentFormatItem,
  TournamentStatus,
  TournamentTeam,
  TournamentUpdateRequest,
  UpdateTournamentStatusRequest,
} from "../types/tournament";

// Get tournament formats
export const getTournamentFormats = (): Promise<
  ApiResponse<TournamentFormatItem[]>
> => {
  return api("/tournaments/formats");
};

// Create a new tournament
export const createTournament = (
  tournament: TournamentCreateRequest
): Promise<void> => {
  return api(
    "/tournaments",
    {
      method: "POST",
      body: JSON.stringify(tournament),
    },
    true
  );
};

// Get all tournaments
export const getAllTournaments = (): Promise<ApiResponse<Tournament[]>> => {
  return api(
    "/tournaments",
    {
      method: "GET",
    },
    true
  );
};

// Get tournament by ID
export const getTournamentById = (
  id: string
): Promise<ApiResponse<Tournament>> => {
  return api(
    `/tournaments/${id}`,
    {
      method: "GET",
    },
    true
  );
};

// Get tournament details by ID
export const getTournamentDetailsById = (
  id: string
): Promise<ApiResponse<TournamentDetail>> => {
  return api(
    `/tournaments/${id}/details`,
    {
      method: "GET",
    },
    true
  );
};

// Get tournaments by organizer ID
export const getOrganizerTournaments = (
  organizerId: string
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/organizer/${organizerId}`,
    {
      method: "GET",
    },
    true
  );
};

// Get tournaments by status
export const getTournamentsByStatus = (
  status: TournamentStatus
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/status/${status}`,
    {
      method: "GET",
    },
    true
  );
};

// Search tournaments
export const searchTournaments = (
  term: string
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/search?term=${encodeURIComponent(term)}`,
    {
      method: "GET",
    },
    true
  );
};

// Get upcoming tournaments
export const getUpcomingTournaments = (
  count: number = 5
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/upcoming?count=${count}`,
    {
      method: "GET",
    },
    true
  );
};

// Get tournaments by user participation
export const getTournamentsByUserParticipation = (
  userId: string
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/user/${userId}/participation`,
    {
      method: "GET",
    },
    true
  );
};

// Get current user's tournaments
export const getCurrentUserTournaments = (): Promise<
  ApiResponse<Tournament[]>
> => {
  return api(
    `/tournaments/my-tournaments`,
    {
      method: "GET",
    },
    true
  );
};

// Update a tournament
export const updateTournament = (
  tournamentId: string,
  tournament: TournamentUpdateRequest
): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}`,
    {
      method: "PUT",
      body: JSON.stringify(tournament),
    },
    true
  );
};

// Update tournament status
export const updateTournamentStatus = (
  tournamentId: string,
  status: UpdateTournamentStatusRequest
): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}/status`,
    {
      method: "PATCH",
      body: JSON.stringify(status),
    },
    true
  );
};

// Delete tournament
export const deleteTournament = async (tournamentId: string): Promise<void> => {
  return await api(
    `/tournaments/${tournamentId}`,
    {
      method: "DELETE",
    },
    true
  );
};

// Tournament Teams endpoints
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

export const teamJoinTournament = (
  tournamentId: string,
  teamId: string
): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}/teams`,
    {
      method: "POST",
      body: JSON.stringify({ teamId }),
    },
    true
  );
};

export const deleteTournamentTeam = (
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
