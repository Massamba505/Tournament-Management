import type { MatchStatus } from "./enums";
import type { PlayerStat } from "./playerStat";
import type { TeamSummary } from "./team";

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

export interface MatchDetail {
  id: string;
  homeTeam: TeamSummary;
  awayTeam: TeamSummary;
  homeScore: number | null;
  awayScore: number | null;
  matchDate: string;
  venue: string;
  status: MatchStatus;
  tournamentId: string;
  playerStats: PlayerStat[] | null;
}

export interface MatchCreateRequest {
  tournamentId: string;
  homeTeamId: string;
  awayTeamId: string;
  matchDate: string;
  venue: string;
  status?: MatchStatus;
}

export interface MatchUpdateRequest {
  homeScore?: number | null;
  awayScore?: number | null;
  matchDate?: string;
  venue?: string;
  status?: MatchStatus;
}

export interface UpdateMatchStatusRequest {
  status: MatchStatus;
}
