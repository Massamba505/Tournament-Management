import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@features/Authentication/hooks/useAuth";

function RedirectIfAuthenticated() {
  const { user, token, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && token) {
      navigate("/dashboard");
    }
  }, [loading, user, token, navigate]);

  return <Outlet />;
}

export default RedirectIfAuthenticated;
