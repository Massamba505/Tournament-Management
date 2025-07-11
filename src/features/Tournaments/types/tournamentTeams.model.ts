import type { Team } from "@features/Teams/types/team";

export interface TournamentTeam {
  teamId: string;
  teamName: string;
  logoUrl: string | null;
  registeredAt: string;
}

export interface TournamentTeamDetail {
  team: Team;
  registeredAt: string;
}

export interface JoinTournamentRequest {
  teamId: string;
}
