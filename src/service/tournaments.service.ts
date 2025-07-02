import { api } from "./customFetch";
import {
  type TournamentFormat,
  type CreateTournament,
  type Tournament,
  type TournamentTeam,
  type UpdateTournament,
} from "../types/tournament";
import type { ApiResponse } from "../types/common";

export const getTournamentFormats = (): Promise<
  ApiResponse<TournamentFormat[]>
> => {
  return api("/tournaments/formats");
};

export const createTournament = (
  tournament: CreateTournament
): Promise<void> => {
  return api("/tournaments", {
    method: "POST",
    body: JSON.stringify(tournament),
  });
};

export const getOrganizerTournaments = (
  id: string
): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments/organizer/${id}`,
    {
      method: "GET",
    },
    true
  );
};

export const getAllTournaments = (): Promise<ApiResponse<Tournament[]>> => {
  return api(
    `/tournaments`,
    {
      method: "GET",
    },
    true
  );
};

export const teamJoinTournament = (
  tournamentId: string
): Promise<ApiResponse<null>> => {
  return api(
    `/tournaments/${tournamentId}/teams`,
    {
      method: "POST",
    },
    true
  );
};

export const getTournamentTeams = (
  id: string
): Promise<ApiResponse<TournamentTeam[]>> => {
  return api(
    `/tournaments/${id}/teams`,
    {
      method: "GET",
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

export const deleteTournament = (tournamentId: string): Promise<void> => {
  return api(
    `/tournaments/${tournamentId}`,
    {
      method: "DELETE",
    },
    true
  );
};

export const updateTournament = (
  tournament: UpdateTournament,
  tournamentId: string
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
