import type { Roles, User } from "../types";

export const loginUser = async (email: string, password: string) => {
  return {
    token: "MassambaToken",
    message: "Login Successfully",
  };
};

export const registerUser = async (userDetails: User) => {
  return {
    message: "Registered Successfully",
  };
};

export const logoutUser = async () => {
  return {
    message: "Logout Successfully",
  };
};
