export interface PlayerStat {
  id: number;
  playerId: string;
  matchId: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}
