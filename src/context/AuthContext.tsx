import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Auth, Roles, User } from "../types";
import toast from "react-hot-toast";
import { loginUser, logoutUser, registerUser } from "../service/api";

interface AuthContextType {
  auth: Auth | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userDetails: User) => Promise<void>;
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
      const response = await loginUser(email, password);
      setAuth({ token: response.token });
      toast.success(response.message);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const register = async (userDetails: User) => {
    try {
      setLoading(true);
      const response = await registerUser(userDetails);
      toast.success(response.message);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const response = await logoutUser();
      toast.success(response.message);
      setAuth(null);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during logout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
