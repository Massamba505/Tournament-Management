import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

function RedirectIfAuthenticated() {
  const { user, loading, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user && token) {
        navigate("/dashboard");
      }
    }
  }, [loading, user, token, navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <Outlet />;
}

export default RedirectIfAuthenticated;
