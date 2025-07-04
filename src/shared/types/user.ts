import type { Roles } from "@shared/constants/roles";

export enum MemberType {
  Player = "Player",
  Manager = "Manager",
  Organizer = "Organizer",
  Captain = "Captain"
}

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: Roles;
}

export interface UserSummary {
  id: string;
  fullName: string;
  profilePicture: string | null;
  memberType: MemberType;
}

export interface Member {
  id: number;
  fullName: string;
  profilePicture: string;
}

export interface Captain extends Member {}

export interface Manager extends Member {}
