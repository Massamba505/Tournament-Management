import type { User } from "../../../types";
import GeneralTournamentSection from "./GeneralTournamentSection";

interface OrganizerDashboardProps {
  user: User;
}

function GeneralDashboard({ user }: OrganizerDashboardProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-5">Dashboard</h1>
      <div className="h-full w-full">
        <GeneralTournamentSection user={user} />
      </div>
    </>
  );
}

export default GeneralDashboard;
