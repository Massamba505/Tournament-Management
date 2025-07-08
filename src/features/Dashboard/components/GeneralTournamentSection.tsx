import { useEffect, useState } from "react";
import GeneralTournamentCard from "./GeneralTournamentCard";
import type { User } from "@shared/types/user";
import type { Tournament } from "@features/Tournaments/types/tournament";
import { getAllTournaments } from "@features/Tournaments/services/tournaments.service";
import LoadingSpinner from "@shared/components/LoadingSpinner";
import Pagination from "./Pagination";
import { Search, Trophy } from "lucide-react";

interface TournamentProps {
  user: User;
}

const GeneralTournamentSection = ({  }: TournamentProps) => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTournaments.slice(indexOfFirstItem, indexOfLastItem);

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
    setCurrentPage(1); // Reset to first page on new search

    const filtered = tournaments.filter((tournament) =>
      tournament.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTournaments(filtered);
  };

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <button className="px-3 py-1 rounded-full text-sm bg-blue-600 text-white shadow-sm">
          All
        </button>
        <button className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
          Upcoming
        </button>
        <button className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
          Registration Open
        </button>
        <button className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
          In Progress
        </button>
      </div>
                  
      <div className="flex items-center mb-4 relative">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search tournaments..."
          className="pl-10 pr-4 border-gray-200 py-2 w-full border rounded-lg focus:border-blue-500 outline-none transition-all"
        />
      </div>
      
      <div className={"flex flex-col h-full w"}>
        {loading && (
          <div className="flex items-center justify-center h-[60vh]">
            <LoadingSpinner />
          </div>
        )}

        {filteredTournaments.length === 0 && !loading ? (
          <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-dashed border-gray-200 shadow-inner">
            <Trophy size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="mb-2 text-2xl font-semibold text-gray-700">No Tournaments Found</h2>
            <p className="mb-4 text-base text-gray-500 max-w-md text-center">
              It looks like there are currently no tournaments available.
              <br />
              Check back later.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-start gap-6">
              {currentItems.map((tournament) => (
                <GeneralTournamentCard
                  key={tournament.id}
                  tournament={tournament}
                />
              ))}
            </div>
            
            <Pagination
              totalItems={filteredTournaments.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default GeneralTournamentSection;
