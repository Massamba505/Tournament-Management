import type { UserSummary } from "@shared/types/user";
import type { MemberType } from "@features/Teams/types/team";

export interface Player {
  id: string;
  userId: string;
  teamId: string;
  memberType: MemberType;
  user: UserSummary;
}
