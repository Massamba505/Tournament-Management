import type { MemberType, UserRole } from "./enums";
import type { TeamSummary } from "./team";

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string | null;
  role: UserRole;
  createdAt: string;
}

export interface UserDetail {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string | null;
  role: UserRole;
  createdAt: string;
  teams: TeamSummary[]
}

export interface UserSummary {
  id: string;
  fullName: string;
  profilePicture: string | null;
  memberType: MemberType;
}

export interface UserUpdateRequest {
  name?: string;
  surname?: string;
  email?: string;
  profilePicture?: string | null;
}

export interface Member {
  id: string;
  fullName: string;
  profilePicture: string;
}

export interface Captain extends Member {}

export interface Manager extends Member {}
