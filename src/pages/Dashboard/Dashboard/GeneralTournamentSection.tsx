import { Roles } from "../../../constants/roles";
import type { Tournament, User } from "../../../types";
import TournamentCard from "./TournamentCard";

interface GeneralTournamentSectionProps {
  tournaments: Tournament[];
  loading: boolean;
  user: User;
}

const GeneralTournamentSection = ({
  tournaments,
  loading,
  user,
}: GeneralTournamentSectionProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="text-gray-500 text-lg">Loading tournaments...</span>
      </div>
    );
  }

  if (tournaments.length === 0) {
    if (user.role === Roles.Organizer) {
      return (
        <div className="text-center text-gray-500 py-12 border rounded-lg max-w-[350px]">
          <p className="text-lg font-medium mb-2">No tournaments found</p>
          <p className="text-sm">
            Click "<span className="inline md:hidden">+</span>
            <span className="hidden md:inline">New Tournament</span>" to create
            one
          </p>
        </div>
      );
    }
    return (
      <div className="text-center text-gray-500 py-12 border rounded-lg max-w-[350px] mx-auto">
        <p className="text-lg font-medium mb-2">No tournaments found.</p>
      </div>
    );
  }

  return (
    <section className="mt-8 px-4 sm:px-0">
      <div className="flex items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Tournaments</h2>
      </div>

      <div className="flex flex-wrap justify-start gap-6">
        {tournaments.map((tournament) => {
          return (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              user={user}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GeneralTournamentSection;
