import { useAuth } from "../../features/Authentication/hooks/useAuth";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import GeneralDashboard from "./pages/GeneralDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import { UserRole } from "@/shared/types/enums";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!user) return null;

  switch (user.role) {
    case UserRole.Organizer:
      return <OrganizerDashboard user={user} />;
    case UserRole.General:
      return <GeneralDashboard user={user} />;
    default:
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Unsupported User Role
          </h2>
          <p className="text-gray-600">
            Your current role doesn't have a specialized dashboard view.
          </p>
        </div>
      );
  }
};

export default Dashboard;
