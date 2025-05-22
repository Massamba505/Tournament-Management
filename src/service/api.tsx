import type { RegisterRequest, User } from "../types";

const API_BASE_URL = "https://localhost:7175/api";

const handleError = async (response: Response) => {
  let message = response.statusText;
  const data = await response.json();
  message = data.message;

  throw new Error(`${message}`);
};

export const userLogin = async (
  email: string,
  password: string
): Promise<{ message: string; token: string }> => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return handleError(response);
  }

  return response.json();
};

export const UserRegister = async (
  data: RegisterRequest
): Promise<{ message: string; token: string }> => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return handleError(response);
  }

  return response.json();
};

export const userLogout = async (
  token: string
): Promise<{ message: string }> => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return handleError(response);
  }

  return response.json();
};

export const getMe = async (token: string): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return handleError(response);
  }

  return response.json();
};
