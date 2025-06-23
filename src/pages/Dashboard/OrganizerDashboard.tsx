import type { User } from "../../types";
import TournamentSection from "./Dashboard/TournamentSection";

interface OrganizerDashboardProps {
  user: User;
}

function OrganizerDashboard({ user }: OrganizerDashboardProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-5">Dashboard</h1>
      <div className="h-full w-full">
        <TournamentSection userId={user.id} />
      </div>
    </>
  );
}

export default OrganizerDashboard;
