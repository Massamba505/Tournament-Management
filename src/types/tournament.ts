export interface TournamentType {
  id: number;
  name: "5-a-side" | "7-a-side" | "Futsal";
}

export interface TournamentFormat {
  id: number;
  name: "Knockout" | "RoundRobin";
}

export interface Tournament {
  id: string;
  name: string;
  type: TournamentType;
  format: TournamentFormat;
  location?: string;
  startDate?: string;
  organizerId: number;
}

export interface TournamentRegistration {
  tournamentId: string;
  teamId: string;
  registeredAt?: string;
}

export type TournamentFormData = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  format: "League" | "Knockout";
  type: "5-a-side" | "11-a-side";
  location: string;
  maxTeams: number;
  rules: string;
};
