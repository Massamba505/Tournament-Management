import { Navigate, Outlet } from "react-router-dom";
import type { Roles } from "../types";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRoutesProps {
  requiredRole?: Roles | Roles[];
}

export default function ProtectedRoutes({
  requiredRole,
}: ProtectedRoutesProps) {
  const { user, token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token || !user) {
    console.log("noooo token");
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    if (!roles.includes(user.role)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <Outlet />;
}
