import { Navigate, Outlet } from "react-router-dom";
import type { Roles } from "@shared/constants/roles";
import { useAuth } from "@/features/Authentication/hooks/useAuth";
import LoadingSpinner from "@shared/components/LoadingSpinner";

interface ProtectedRoutesProps {
  requiredRole?: Roles | Roles[];
}

export default function ProtectedRoutes({
  requiredRole,
}: ProtectedRoutesProps) {
  const { user, token, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!token || !user) {
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
