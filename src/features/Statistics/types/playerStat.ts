export enum PlayerPosition {
  Goalkeeper = "Goalkeeper",
  Defender = "Defender",
  Midfielder = "Midfielder",
  Forward = "Forward",
}

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

export interface CreatePlayerStatRequest {
  playerId: string;
  matchId: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  position: PlayerPosition;
}

export interface UpdatePlayerStatRequest {
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  position?: PlayerPosition;
}
