import type { Roles } from "@shared/constants/roles";

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: Roles;
}

export interface Member {
  id: number;
  fullName: string;
  profilePicture: string;
}

export interface Captain extends Member {}

export interface Manager extends Member {}
