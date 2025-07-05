export enum Roles {
  General = 1,
  Organizer = 2,
  Admin = 3
}

// Utility functions for role conversion
export const roleToString = (role: Roles): string => {
  switch (role) {
    case Roles.General: return "General";
    case Roles.Organizer: return "Organizer";
    case Roles.Admin: return "Admin";
    default: return "General";
  }
};

export const stringToRole = (roleStr: string): Roles => {
  switch (roleStr.toLowerCase()) {
    case "general": return Roles.General;
    case "organizer": return Roles.Organizer;
    case "admin": return Roles.Admin;
    default: return Roles.General;
  }
};
