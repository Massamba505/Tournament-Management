import { ChevronDown } from "lucide-react";
import type { Tournament } from "../../../../types/tournament";
import { useState } from "react";

export default function TournamentDropdown({
  tournaments,
  selectedTournament,
  onSelect,
}: {
  tournaments: Tournament[];
  selectedTournament: Tournament | null;
  onSelect: (tournament: Tournament) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Tournament
      </label>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-3 text-left shadow-sm hover:bg-gray-50"
        >
          <div className="flex items-center justify-between">
            <span
              className={
                selectedTournament
                  ? "text-gray-900 font-medium"
                  : "text-gray-500"
              }
            >
              {selectedTournament?.name || "Choose a tournament..."}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="py-1">
              {tournaments.map((tournament) => (
                <button
                  key={tournament.id}
                  onClick={() => {
                    onSelect(tournament);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">
                        {tournament.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
