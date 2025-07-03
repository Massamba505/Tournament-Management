import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import type { Tournament } from "@features/Tournaments/types/tournament";
import { Link } from "react-router-dom";
import TournamentCard from "./TournamentCard";
import { getOrganizerTournaments } from "@features/Tournaments/services/tournaments.service";
import LoadingSpinner from "@shared/components/LoadingSpinner";

interface TournamentProps {
  userId: string;
}

const TournamentSection = ({ userId }: TournamentProps) => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const { data } = await getOrganizerTournaments(userId);
        setTournaments(data || []);
        setFilteredTournaments(data || []);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, [userId]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = tournaments.filter((tournament) =>
      tournament.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTournaments(filtered);
  };

  return (
    <div className="flex flex-col h-full w">
      <div className="mb-2 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Tournaments..."
          className="px-4 py-2 border-2 outline-none border-gray-300 rounded-lg w-full max-w-2xl"
        />
      </div>
      <section className="mt-8 px-4 sm:px-0">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Tournaments</h2>
          <Link
            to="/create-tournament"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#142d4c] text-white text-sm rounded-lg font-medium hover:bg-[#142d4c]/90"
            title="New Tournament"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden md:block">New Tournament</span>
          </Link>
        </div>

        {loading && (
          <div className="flex items-center justify-center h-[60vh]">
            <LoadingSpinner />
          </div>
        )}

        {filteredTournaments.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-12 border rounded-lg max-w-[350px]">
            <p className="text-lg font-medium mb-2">No tournaments found</p>
            <p className="text-sm">
              Click "<span className="inline md:hidden">+</span>
              <span className="hidden md:inline">New Tournament</span>" to
              create one
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start gap-6">
            {filteredTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TournamentSection;
