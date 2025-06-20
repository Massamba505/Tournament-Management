export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  managerId: string;
  captainId?: string;
  isActive: boolean;
}

export interface TeamMember {
  userId: string;
  fullName: string;
  email: string;
  memberType: string;
  isCaptain: boolean;
  joinedAt: string;
}

export interface Member {
  id: number;
  name: string;
}
