import { UserRole } from "../types/enums";

export const roleToString = (role: UserRole): string => {
  switch (role) {
    case UserRole.General:
      return "General";
    case UserRole.Organizer:
      return "Organizer";
    case UserRole.Admin:
      return "Admin";
    default:
      return "General";
  }
};

export const stringToRole = (roleStr: string): UserRole => {
  switch (roleStr.toLowerCase()) {
    case "general":
      return UserRole.General;
    case "organizer":
      return UserRole.Organizer;
    case "admin":
      return UserRole.Admin;
    default:
      return UserRole.General;
  }
};
