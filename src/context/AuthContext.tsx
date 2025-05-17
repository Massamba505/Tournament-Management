import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Auth, Roles } from "../types";
import toast from "react-hot-toast";

interface AuthContextType {
  auth: Auth | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    fullname: string,
    email: string,
    password: string,
    role: Roles
  ) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProp {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
}

export function AuthProvider({ children }: AuthProviderProp) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setAuth({ token: "MassambaToken" });
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    fullname: string,
    email: string,
    password: string,
    role: Roles
  ) => {
    try {
      setLoading(true);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuth(null);
    toast.success("You have been successfully logged out");
  };

  return (
    <AuthContext.Provider value={{ auth, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
