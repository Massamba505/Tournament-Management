import type { UserSummary } from "@shared/types/user";
import type { Match } from "@features/Fixtures/types/match";
import type { TournamentTeam } from "./tournamentTeams.model";

export enum TournamentStatus {
  Draft = "Draft",
  RegistrationOpen = "RegistrationOpen",
  RegistrationClosed = "RegistrationClosed",
  InProgress = "InProgress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

export enum TournamentFormatEnum {
  SingleElimination = 1,
  DoubleElimination = 2,
  RoundRobin = 3,
}

export interface TournamentFormatItem {
  id: TournamentFormatEnum;
  name: string;
}

export interface TournamentCreateRequest {
  name: string;
  description: string;
  format: TournamentFormatEnum;
  maxNumberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  location: string;
  organizerId: string;
  bannerImage: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  allowJoinViaLink: boolean;
  matchDuration?: number | null;
  isPublic: boolean;
  status: TournamentStatus;
}

export interface TournamentUpdateRequest {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  registrationDeadline?: string;
  location?: string;
  bannerImage?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  allowJoinViaLink?: boolean;
  matchDuration?: number | null;
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
  maxNumberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  location: string;
  organizer: UserSummary;
  bannerImage: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  isPublic: boolean;
  status: TournamentStatus;
  createdAt: string;
  matchDuration?: number | null;
}

export interface TournamentDetail extends Tournament {
  allowJoinViaLink: boolean;
  teams: TournamentTeam[];
  matches: Match[];
}
