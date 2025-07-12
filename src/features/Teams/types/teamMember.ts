export enum MemberType {
  Manager = 1,
  Captain = 2,
  Player = 3,
}

export interface TeamMember {
  userId: string;
  fullName: string;
  memberType: MemberType;
  isCaptain: boolean;
  joinedAt: string;
}

export interface AddTeamMemberRequest {
  userId: string;
}

export interface UpdateMemberTypeRequest {
  memberType: MemberType;
}
