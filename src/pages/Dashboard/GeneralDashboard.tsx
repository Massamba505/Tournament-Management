import { useEffect, useState } from "react";
import { getAllTournaments } from "../../service/tournaments.service";
import type { Tournament, User } from "../../types";
import GeneralTournamentSection from "./Dashboard/GeneralTournamentSection";

interface OrganizerDashboardProps {
  user: User;
}

function GeneralDashboard({ user }: OrganizerDashboardProps) {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const { data } = await getAllTournaments();
        setTournaments(data || []);
        setFilteredTournaments(data || []);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = tournaments.filter((tournament) =>
      tournament.name.toLowerCase().includes(query)
    );
    setFilteredTournaments(filtered);
  }, [searchQuery, tournaments]);

  return (
    <div className="h-full w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black mb-5">Dashboard</h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Tournaments..."
          className="px-4 py-2 border-2 outline-none border-gray-300 rounded-lg w-full max-w-2xl"
        />
      </div>

      <GeneralTournamentSection
        tournaments={filteredTournaments}
        loading={loading}
        user={user}
      />
    </div>
  );
}

export default GeneralDashboard;
