import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  TournamentCreateRequest,
  Tournament,
  TournamentDetail,
  TournamentFormatItem,
  TournamentStatus,
  TournamentUpdateRequest,
  UpdateTournamentStatusRequest,
} from "../types/tournament";

export const getTournamentFormats = (): Promise<
  ApiResponse<TournamentFormatItem[]>
> => {
  return api("/tournaments/formats");
};

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

export const getAllTournaments = (): Promise<ApiResponse<Tournament[]>> => {
  return api(
    "/tournaments",
    {
      method: "GET",
    },
    true
  );
};

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

export const deleteTournament = async (tournamentId: string): Promise<void> => {
  return await api(
    `/tournaments/${tournamentId}`,
    {
      method: "DELETE",
    },
    true
  );
};
