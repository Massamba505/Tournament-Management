import { createContext, useEffect, useState, type ReactNode } from "react";
import type { RegisterRequest, User } from "../types";
import toast from "react-hot-toast";
import { getMe, userLogin, userLogout, UserRegister } from "../service/api";

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
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
        try {
          const data = await getMe(savedToken);
          setUser(data);
        } catch (error) {
          setError(`${error}`);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await userLogin(email, password);

      setToken(response.token);
      localStorage.setItem("token", `${token}`);

      toast.success(response.message);
    } catch (error) {
      throw new Error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const register = async (userDetails: RegisterRequest) => {
    try {
      setLoading(true);
      const response = await UserRegister(userDetails);
      localStorage.setItem("token", `${response.token}`);
      toast.success(response.message);
    } catch (error) {
      throw new Error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const response = await userLogout(`${token}`);
      toast.success(response.message);
      setToken(null);
    } catch (error) {
      throw new Error("An error occurred during logout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}
