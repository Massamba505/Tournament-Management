import type { TeamStatus, MemberType } from "./enums";
import type { UserSummary } from "./user";

export interface TeamSummary {
  id: string;
  name: string;
  logoUrl: string | null;
}

export interface Team {
  id: string;
  name: string;
  logoUrl: string | null;
  manager: UserSummary;
  captain: UserSummary | null;
  status: TeamStatus;
  createdAt: string;
}

export interface TeamDetail {
  id: string;
  name: string;
  logoUrl: string | null;
  managerName: string;
  status: TeamStatus;
  manager: UserSummary;
  captain: UserSummary | null;
  members: TeamMember[];
  createdAt: string;
}

export interface TeamMember {
  userId: string;
  fullName: string;
  profilePicture: string;
  memberType: MemberType;
  isCaptain: boolean;
  joinedAt: string;
}

export interface TeamCreateRequest {
  name: string;
  logoUrl?: string | null;
}

export interface TeamUpdateRequest {
  name?: string;
  logoUrl?: string | null;
  captainId?: string | null;
  status?: TeamStatus;
}

export interface AddTeamMemberRequest {
  userId: string;
}

export interface UpdateMemberTypeRequest {
  memberType: MemberType;
}
