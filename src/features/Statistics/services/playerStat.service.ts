import { api } from "@shared/services/customFetch";
import type { ApiResponse } from "@shared/types/common";
import type {
  PlayerStatCreateRequest,
  PlayerStat,
  PlayerStatUpdateRequest,
} from "@shared/types/playerStat";

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
  payload: PlayerStatCreateRequest
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
  payload: PlayerStatUpdateRequest
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
