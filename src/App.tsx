import { Navigate, Route, Routes } from "react-router-dom";
import {
  CreateTournaments,
  Dashboard,
  DashboardLayout,
  Fixtures,
  LandingPage,
  Login,
  Notifications,
  Register,
  Statistics,
  Teams,
  Tournaments,
  Unauthorized,
} from "@features/index";
import RedirectIfAuthenticated from "@shared/components/RedirectIfAuthenticated";
import ProtectedRoutes from "@shared/components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />

      <Route element={<RedirectIfAuthenticated />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="create-tournament" element={<CreateTournaments />} />
          <Route path="teams" element={<Teams />} />
          <Route path="fixtures" element={<Fixtures />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
