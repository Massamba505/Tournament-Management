import { useAuth } from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner";
import GeneralDashboard from "./GeneralDashboard";
import OrganizerDashboard from "./OrganizerDashboard";

const Dashboard = () => {
  const { user, loading } = useAuth();
  if (!user) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (user.role === "General") {
    return <GeneralDashboard user={user} />;
  }

  if (user.role === "Organizer") {
    return <OrganizerDashboard user={user} />;
  }
};

export default Dashboard;
