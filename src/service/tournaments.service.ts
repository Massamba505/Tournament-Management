import { api } from "./customFetch";
import {
  type TournamentFormat,
  type CreateTournament,
  type Tournament,
  type TournamentTeam,
} from "../types/tournament";

export const getTournamentFormats = (): Promise<TournamentFormat[]> => {
  return api("/tournament/formats");
};

export const createTournament = (
  tournament: CreateTournament
): Promise<void> => {
  return api(
    "/tournament",
    {
      method: "POST",
      body: JSON.stringify(tournament),
    },
    true
  );
};

export const getTournaments = (): Promise<Tournament[]> => {
  return api(
    "/tournament",
    {
      method: "GET",
    },
    true
  );
};

export const getTournamentTeams = (id: string): Promise<TournamentTeam[]> => {
  return api(
    `/tournament/${id}/teams`,
    {
      method: "GET",
    },
    true
  );
};
