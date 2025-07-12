import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  CreatePlayerStatRequest,
  PlayerStat,
  UpdatePlayerStatRequest,
} from "../types/playerStat";

export const getStatsByMatch = (
  matchId: string
): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/player-stats/match/${matchId}`, { method: "GET" }, true);
};

export const getStatsByPlayer = (
  playerId: string
): Promise<ApiResponse<PlayerStat[]>> => {
  return api(`/player-stats/player/${playerId}`, { method: "GET" }, true);
};

export const getStatByPlayerAndMatch = (
  playerId: string,
  matchId: string
): Promise<ApiResponse<PlayerStat>> => {
  return api(
    `/player-stats/player/${playerId}/match/${matchId}`,
    { method: "GET" },
    true
  );
};

export const createPlayerStat = (
  payload: CreatePlayerStatRequest
): Promise<void> => {
  return api(
    "/player-stats",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    true
  );
};

export const updatePlayerStat = (
  playerId: string,
  matchId: string,
  payload: UpdatePlayerStatRequest
): Promise<void> => {
  return api(
    `/player-stats/player/${playerId}/match/${matchId}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
    true
  );
};

export const deletePlayerStat = (
  playerId: string,
  matchId: string
): Promise<void> => {
  return api(
    `/player-stats/player/${playerId}/match/${matchId}`,
    { method: "DELETE" },
    true
  );
};
