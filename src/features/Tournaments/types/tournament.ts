import type { UserSummary } from "@shared/types/user";
import type { Match } from "@features/Fixtures/types/match";

export enum TournamentStatus {
  Draft = "Draft",
  RegistrationOpen = "RegistrationOpen",
  RegistrationClosed = "RegistrationClosed",
  InProgress = "InProgress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

export enum TournamentFormat {
  LeagueFormat = 0,
  KnockoutFormat = 1,
  GroupStage = 2,
  SwissSystem = 3,
  RoundRobin = 4,
  DoubleElimination = 5,
}

export interface TournamentFormatItem {
  id: TournamentFormat;
  name: string;
}

export interface CreateTournamentRequest {
  name: string;
  description: string;
  format: TournamentFormat;
  numberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  location: string;
  allowJoinViaLink: boolean;
  organizerId: string;
  bannerImage: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  matchDuration: number | null;
  registrationDeadline: string;
  isPublic: boolean;
  status: TournamentStatus;
}

export interface UpdateTournamentRequest {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  allowJoinViaLink?: boolean;
  bannerImage?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  matchDuration?: number | null;
  registrationDeadline?: string;
  isPublic?: boolean;
  status?: TournamentStatus;
}

export interface UpdateTournamentStatusRequest {
  status: TournamentStatus;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  format: string;
  numberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  location: string;
  organizer: UserSummary;
  bannerImage: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  isPublic: boolean;
  status: TournamentStatus;
}

export interface TournamentDetail extends Tournament {
  teams: TournamentTeam[];
  matches: Match[];
  registrationDeadline: string;
  allowJoinViaLink: boolean;
  matchDuration: number | null;
  createdAt: string;
}

export interface TournamentTeam {
  teamId: string;
  teamName: string;
  logoUrl?: string | null;
  registeredAt: string;
}

export interface JoinTournamentRequest {
  teamId: string;
}
