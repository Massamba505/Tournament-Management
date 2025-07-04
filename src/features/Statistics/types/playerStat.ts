import type { UserSummary } from "@shared/types/user";

export enum PlayerPosition {
  Goalkeeper = "Goalkeeper",
  Defender = "Defender",
  Midfielder = "Midfielder",
  Forward = "Forward"
}

export interface PlayerStat {
  id: string;
  matchId: string;
  playerId: string;
  player: UserSummary;
  teamId: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  position: PlayerPosition;
}

export interface CreatePlayerStatRequest {
  matchId: string;
  playerId: string;
  teamId: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  position: PlayerPosition;
}

export interface UpdatePlayerStatRequest {
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  minutesPlayed?: number;
  position?: PlayerPosition;
}
