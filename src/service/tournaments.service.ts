import { api } from "./customFetch";
import {
  type TournamentFormat,
  type CreateTournament,
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
