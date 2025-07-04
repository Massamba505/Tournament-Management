import type { TeamSummary } from "@shared/types/teamSummary";
import type { PlayerStat } from "@features/Statistics/types/playerStat";

export enum MatchStatus {
  Scheduled = "Scheduled",
  InProgress = "InProgress",
  Completed = "Completed",
  Cancelled = "Cancelled",
  Postponed = "Postponed"
}

export interface Match {
  id: string;
  homeTeam: TeamSummary;
  awayTeam: TeamSummary;
  homeScore: number | null;
  awayScore: number | null;
  matchDate: string;
  venue: string;
  status: MatchStatus;
}

export interface MatchDetail extends Match {
  tournamentId: string;
  playerStats?: PlayerStat[];
}

export interface CreateMatchRequest {
  tournamentId: string;
  homeTeamId: string;
  awayTeamId: string;
  matchDate: string;
  venue: string;
  status?: MatchStatus;
}

export interface UpdateMatchRequest {
  homeScore?: number;
  awayScore?: number;
  matchDate?: string;
  venue?: string;
  status?: MatchStatus;
}

export interface UpdateMatchScoreRequest {
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}
