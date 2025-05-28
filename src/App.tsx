import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import DashboardLayout from "./components/Layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<RedirectIfAuthenticated />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
