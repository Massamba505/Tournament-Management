import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

function RedirectIfAuthenticated() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return null;
  }

  return <Outlet />;
}

export default RedirectIfAuthenticated;
