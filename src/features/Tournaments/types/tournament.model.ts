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

export enum TournamentFormatEnum {
  SingleElimination = 1,
  DoubleElimination = 2,
  RoundRobin = 3,
}

export interface TournamentFormatItem {
  id: TournamentFormatEnum;
  name: string;
}

export interface CreateTournamentRequest {
  name: string;
  description: string;
  format: TournamentFormatEnum;
  numberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: Date;
  endDate: Date;
  location: string;
  allowJoinViaLink: boolean;
  organizerId: string;
  bannerImage: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  matchDuration: number | null;
  registrationDeadline: Date;
  isPublic: boolean;
  status: TournamentStatus;
}

export interface UpdateTournamentRequest {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
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
  startDate: Date;
  endDate: Date;
  location: string;
  organizer: UserSummary;
  bannerImage: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  isPublic: boolean;
  status: TournamentStatus;
  registrationDeadline: Date;
  matchDuration?: number | null; // Added for backward compatibility with cards
}

export interface TournamentDetail extends Tournament {
  teams: TournamentTeam[];
  matches: Match[];
  registrationDeadline: Date;
  allowJoinViaLink: boolean;
  matchDuration: number | null;
  createdAt: Date;
}

export interface TournamentTeam {
  team: {
    id: string;
    name: string;
    logoUrl: string | null;
  };
  registeredAt: string;
}

export interface JoinTournamentRequest {
  teamId: string;
}
