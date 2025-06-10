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
