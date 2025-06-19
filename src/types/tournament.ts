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

////////////////////////////////////////////////////////////////////////////////
export interface User {
  id: string;
  name: string;
  email?: string;
}

export interface Member {
  id: number;
  name: string;
  surname?: string;
  profilePicture?: string;
}

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  joinedAt: string;
  isActive: boolean;
  user: User;
}

export interface Team {
  id: string;
  name: string;
  logoUrl?: string;
  managerId: string;
  captainId?: string;
  createdAt: string;
  isActive: boolean;
  manager: User;
  captain?: User;
  members: TeamMember[];
  players?: Member[];
}

export interface Tournament {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  isActive: boolean;
}

export interface TournamentTeam {
  id: string;
  tournamentId: string;
  teamId: string;
  registeredAt: string;
  isActive: boolean;
  tournament: Tournament;
  team: Team;
}

export interface TournamentWithTeams extends Tournament {
  teams: TournamentTeam[];
}
