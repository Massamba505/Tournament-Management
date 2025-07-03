import type { Team } from "@features/Teams/types/team";
import type { User } from "@shared/types/user";

export interface TournamentFormat {
  id: number;
  name: string;
}

export interface CreateTournament {
  name: string | null;
  organizerId: string | null;
  description: string | null;
  formatId: number | null;
  numberOfTeams: number | null;
  maxPlayersPerTeam: number | null;
  startDate: string | null;
  endDate: string | null;
  location: string | null;
  allowJoinViaLink: boolean;
  bannerImage: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  matchDuration: number | null;
  registrationDeadline: string | null;
  isPublic: boolean | null;
}

export interface UpdateTournament {
  name: string;
  description: string;
  formatId: number;
  numberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  location: string;
  allowJoinViaLink: boolean;
  bannerImage: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
  entryFee?: number | null;
  matchDuration?: number | null;
  registrationDeadline: string;
  isPublic: boolean;
}

export interface Tournament {
  id: string;
  name: string;
  format: string;
  description: string;
  numberOfTeams: number;
  maxPlayersPerTeam: number;
  startDate: string;
  endDate: string;
  location: string;
  allowJoinViaLink: boolean;
  organizerId: string;
  bannerImage: string;
  contactEmail?: string;
  contactPhone?: string;
  entryFee?: number;
  matchDuration: number;
  registrationDeadline: string;
  isPublic: boolean;
}

export interface TournamentTeam {
  team: Team;
  registeredAt: string;
}

export interface JoinTournament {
  teamId: string;
}

////////////////////////////////////////////////////////////////////////////////
export interface TeamMember {
  teamId: string;
  joinedAt: string;
  user: User;
}

export interface TournamentWithTeams extends Tournament {
  teams: TournamentTeam[];
}
