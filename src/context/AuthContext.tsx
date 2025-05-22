import { createContext, useState, useEffect, type ReactNode } from "react";
import { getMe, userLogin, userLogout, UserRegister } from "../service/api";
import toast from "react-hot-toast";
import type { RegisterRequest, User } from "../types";

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
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
  const [loading, setLoading] = useState(true);

  const fetchUser = async (authToken: string) => {
    setLoading(true);
    try {
      console.log("fetching user");
      const userData = await getMe(authToken);
      console.log(userData);
      setUser(userData);
    } catch (err) {
      const message = "Failed to fetch user";
      errorHappend(message);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const errorHappend = (message: string) => {
    setToken(null);
    setUser(null);
    throw new Error(message);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { message, token: newToken } = await userLogin(email, password);
      localStorage.setItem("token", newToken);
      toast.success(message);
      setToken(newToken);
    } catch (err) {
      const message = "Login failed. Please check your credentials.";
      errorHappend(message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userDetails: RegisterRequest) => {
    setLoading(true);
    try {
      const { message, token: newToken } = await UserRegister(userDetails);
      localStorage.setItem("token", newToken);
      toast.success(message);
      setToken(newToken);
    } catch (err) {
      const message = "Registration failed. Please try again.";
      errorHappend(message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (token) {
        const { message } = await userLogout(token);
        toast.success(message);
      }
    } catch (err) {
      const message = "Logout failed.";
      errorHappend(message);
    } finally {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
