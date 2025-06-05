import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Landing";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import Tournaments from "./pages/Dashboard/Tournaments/Tournaments";
import Teams from "./pages/Dashboard/Teams/Teams";
import Fixtures from "./pages/Dashboard/Fixtures/Fixtures";
import Statistics from "./pages/Dashboard/Statistics/Statistics";
import Notifications from "./pages/Notifications/Notifications";

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
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
