import { useEffect, useState } from "react";
import { getTournamentFormats } from "../services/tournaments.service";
import CreateTournamentForm from "../components/CreateTournamentForm";
import { useAuth } from "@features/Authentication/hooks/useAuth";
import type { TournamentFormatItem } from "../types/tournament";
import { TournamentFormatEnum } from "../types/tournament";

// Fallback formats in case API call fails
const defaultFormats: TournamentFormatItem[] = [
  { id: TournamentFormatEnum.SingleElimination, name: "Single Elimination" },
  { id: TournamentFormatEnum.DoubleElimination, name: "Double Elimination" },
  { id: TournamentFormatEnum.RoundRobin, name: "Round Robin" }
];

function CreateTournaments() {
  const { user } = useAuth();
  const [formats, setFormats] = useState<TournamentFormatItem[]>(defaultFormats);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Create Your Tournament
        </h1>
      </div>
      <CreateTournamentForm userId={user.id} formats={formats} />
    </div>
  );
}

export default CreateTournaments;
