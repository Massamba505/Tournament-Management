export interface Role {
  id: number;
  name: "General" | "Organizer";
}

export type RoleName = Role["name"];
