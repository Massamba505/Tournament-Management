export enum MemberType {
  Player = 1,
  Manager = 2,
  Organizer = 3,
  Captain = 4,
}

export enum UserRole {
  General = 1,
  Organizer = 2,
  Admin = 3,
}

export enum UserStatus {
  Active = "Active",
  Inactive = "Inactive",
  PendingVerification = "PendingVerification",
}

export enum TeamStatus {
  Active = "Active",
  Inactive = "Inactive",
}

export enum MatchStatus {
  Scheduled = "Scheduled",
  InProgress = "InProgress",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

export enum PlayerPosition {
  Goalkeeper = "Goalkeeper",
  Defender = "Defender",
  Midfielder = "Midfielder",
  Forward = "Forward",
}

export enum TournamentStatus {
  Draft = 0,
  RegistrationOpen = 1,
  RegistrationClosed = 2,
  InProgress = 3,
  Completed = 4,
  Cancelled = 5,
}

export enum TournamentFormatEnum {
  SingleElimination = 1,
  DoubleElimination = 2,
  RoundRobin = 3,
}

export enum InvitationStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Expired = "Expired",
}
