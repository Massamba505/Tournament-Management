import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import {
  login as loginApi,
  register as registerApi,
  logout as logoutApi,
} from "../service/auth.service";
import type { User } from "../types/user";
import type { RegisterRequest } from "../types/auth";
import { getCurrentUser } from "../service/user.service";

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);

  const handleToken = useCallback((newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setToken(newToken);
  }, []);

  const fetchUser = useCallback(async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const userData = await getCurrentUser();
      setUser(userData.data ?? null);
    } catch (err: any) {
      toast.error(err.message);
      handleToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [token, handleToken]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { token: newToken, message } = await loginApi({ email, password });
      toast.success(message);
      handleToken(newToken);
    } catch (err: any) {
      toast.error(err.message);
      handleToken(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    setLoading(true);
    try {
      const { token: newToken, message } = await registerApi(data);
      toast.success(message);
      handleToken(newToken);
    } catch (err: any) {
      toast.error(err.message);
      handleToken(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const { message } = await logoutApi();
      toast.success(message);
      handleToken(null);
      setUser(null);
    } catch (err) {
      toast.error("Failed to logout");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token, fetchUser]);

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
