import type { TournamentStatus, TournamentFormatEnum } from "./enums";
import type { UserSummary } from "./user";
import type { Match } from "./match";
import type { Team } from "./team";

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
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  isPublic: boolean;
  status: TournamentStatus;
  createdAt: string;
}

export interface TournamentTeam {
  teamId: string;
  teamName: string;
  logoUrl: string | null;
  registeredAt: string;
}

export interface TournamentFormatItem {
    id: number;
    name: string;
}

export interface TournamentDetail {
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
  contactEmail: string | null;
  contactPhone: string | null;
  entryFee: number | null;
  isPublic: boolean;
  status: TournamentStatus;
  allowJoinViaLink: boolean;
  matchDuration: number | null;
  createdAt: string;
  teams: TournamentTeam[];
  matches: Match[];
}

export interface TournamentTeamDetail {
  team: Team;
  registeredAt: string;
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
  status?: TournamentStatus;
}

export interface TournamentUpdateRequest {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  allowJoinViaLink?: boolean;
  bannerImage?: string;
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

export interface JoinTournamentRequest {
  teamId: string;
}
