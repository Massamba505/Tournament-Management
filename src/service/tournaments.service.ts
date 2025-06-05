import { api } from "./customFetch";
import type {
  Tournament,
  TournamentType,
  TournamentFormat,
} from "../types/tournament";
import type { Match } from "../types/match";

export const getTournaments = (): Promise<Tournament[]> => {
  return api("/tournament");
};

export const createTournament = (
  tournament: Partial<Tournament>
): Promise<void> => {
  return api("/tournament", {
    method: "POST",
    body: JSON.stringify(tournament),
  });
};

export const getTournamentById = (id: string): Promise<Tournament> => {
  return api(`/tournament/${id}`);
};

export const getTournamentTypes = (): Promise<TournamentType[]> => {
  return api("/tournament/types");
};

export const getTournamentFormats = (): Promise<TournamentFormat[]> => {
  return api("/tournament/formats");
};

export const getMatches = (tournamentId: string): Promise<Match[]> => {
  return api(`/tournament/${tournamentId}/matches`);
};

export const createMatch = (match: Partial<Match>): Promise<void> => {
  return api("/match", {
    method: "POST",
    body: JSON.stringify(match),
  });
};
