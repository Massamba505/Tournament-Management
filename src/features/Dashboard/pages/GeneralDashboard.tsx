import type { User } from "../../../shared/types/user";
import GeneralTournamentSection from "../components/GeneralTournamentSection";

interface GeneralDashboardProps {
  user: User;
}

function GeneralDashboard({ user }: GeneralDashboardProps) {
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
