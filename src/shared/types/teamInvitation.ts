import type { InvitationStatus } from "./enums";
import type { UserSummary } from "./user";

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

export interface TeamInvitationCreateRequest {
  teamId: string;
  invitedUserId: string;
}

export interface TeamInvitationResponseRequest {
  status: InvitationStatus;
}
