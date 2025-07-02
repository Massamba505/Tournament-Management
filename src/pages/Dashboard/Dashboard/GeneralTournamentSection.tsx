import { useEffect, useState } from "react";
import { getAllTournaments } from "../../../service/tournaments.service";
import type { Tournament, User } from "../../../types";
import LoadingSpinner from "../../../components/LoadingSpinner";
import GeneralTournamentCard from "./GeneralTournamentCard";

interface TournamentProps {
  user: User;
}

const GeneralTournamentSection = ({ user }: TournamentProps) => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        <div className="flex items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Tournaments</h2>
        </div>

        {loading && (
          <div className="flex items-center justify-center h-[60vh]">
            <LoadingSpinner />
          </div>
        )}

        {filteredTournaments.length === 0 && !loading ? (
          <div className="text-center text-gray-500 py-12 border rounded-lg max-w-[350px]">
            <p className="text-lg font-medium mb-2">No tournaments found.</p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start gap-6">
            {filteredTournaments.map((tournament) => (
              <GeneralTournamentCard
                key={tournament.id}
                tournament={tournament}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default GeneralTournamentSection;
