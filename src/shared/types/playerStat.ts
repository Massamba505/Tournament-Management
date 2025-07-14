import type { PlayerPosition } from "./enums";

export interface PlayerStat {
  playerId: string;
  matchId: string;
  playerName: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  position: PlayerPosition;
}

export interface PlayerStatCreateRequest {
  playerId: string;
  matchId: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  position: PlayerPosition;
}

export interface PlayerStatUpdateRequest {
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  position?: PlayerPosition;
}
