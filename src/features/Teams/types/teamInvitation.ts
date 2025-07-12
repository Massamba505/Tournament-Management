import type { UserSummary } from "@/shared/types/user";

export enum InvitationStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Expired = "Expired",
}

export interface TeamInvitation {
  id: string;
  teamId: string;
  teamName: string;
  invitedUserId: string;
  invitedUser: UserSummary;
  invitedByUserId: string;
  invitedByUser: UserSummary;
  status: InvitationStatus;
  createdAt: string;
  respondedAt: string | null;
}

export interface CreateTeamInvitationRequest {
  teamId: string;
  invitedUserId: string;
}

export interface TeamInvitationResponseRequest {
  status: InvitationStatus;
}
