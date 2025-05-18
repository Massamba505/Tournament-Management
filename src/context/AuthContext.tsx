import { createContext, useState, useEffect, type ReactNode } from "react";
import { getMe, userLogin, userLogout, UserRegister } from "../service/api";
import toast from "react-hot-toast";
import type { RegisterRequest, User } from "../types";

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (authToken: string) => {
    setLoading(true);
    try {
      const userData = await getMe(authToken);
      setUser(userData);
    } catch (err) {
      setError("Failed to fetch user");
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser(token);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { message, token: newToken } = await userLogin(email, password);
      setToken(newToken);
      localStorage.setItem("token", newToken);
      toast.success(message);
      await fetchUser(newToken);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const register = async (userDetails: RegisterRequest) => {
    setLoading(true);
    setError(null);
    try {
      const { message, token: newToken } = await UserRegister(userDetails);
      setToken(newToken);
      localStorage.setItem("token", newToken);
      toast.success(message);
      await fetchUser(newToken);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      if (token) {
        const { message } = await userLogout(token);
        toast.success(message);
      }
    } catch (err) {
      setError("Logout failed.");
    } finally {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
