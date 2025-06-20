export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  profilePicture: string;
  role: string; // Backend returns role as string
  createdAt?: string; // Optional if not always present
}
