import { api } from "./customFetch";
import {
  type TournamentFormat,
  type CreateTournament,
} from "../types/tournament";

export const getTournamentFormats = (): Promise<TournamentFormat[]> => {
  return api("/tournament/formats");
};

export const createTournament = (
  tournament: CreateTournament
): Promise<void> => {
  return api("/tournament", {
    method: "POST",
    body: JSON.stringify(tournament),
  });
};
