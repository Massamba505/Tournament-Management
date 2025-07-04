import type { UserSummary } from "@shared/types/user";

export enum TeamStatus {
  Active = "Active",
  Inactive = "Inactive",
  Disbanded = "Disbanded"
}

export interface Team {
  id: string;
  name: string;
  logoUrl: string | null;
  managerId: string;
  captainId: string | null;
  status: TeamStatus;
  createdAt: string;
  manager: UserSummary;
  captain: UserSummary | null;
  members: TeamMember[];
}

export interface TeamSummary {
  id: string;
  name: string;
  logoUrl: string | null;
  captainName: string | null;
  memberCount: number;
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  memberType: MemberType;
  joinedAt: string;
  user: UserSummary;
}

export enum MemberType {
  Manager = "Manager",
  Captain = "Captain",
  Player = "Player"
}

export interface CreateTeamRequest {
  name: string;
  logoUrl?: string | null;
}

export interface UpdateTeamRequest {
  name?: string;
  logoUrl?: string | null;
  captainId?: string | null;
  status?: TeamStatus;
}

export interface UpdateTeamStatusRequest {
  status: TeamStatus;
}

export interface TeamInvitation {
  id: string;
  teamId: string;
  team: TeamSummary;
  userId: string;
  user: UserSummary;
  invitedAt: string;
  status: InvitationStatus;
  responseDate: string | null;
}

export enum InvitationStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected"
}

export interface CreateTeamInvitationRequest {
  teamId: string;
  userId: string;
}

export interface TeamInvitationResponseRequest {
  status: InvitationStatus;
}
