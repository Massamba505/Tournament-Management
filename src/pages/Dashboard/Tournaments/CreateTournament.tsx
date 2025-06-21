import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import { getTournamentFormats } from "../../../service/tournaments.service";
import type { TournamentFormat } from "../../../types";
import CreateTournamentForm from "./components/CreateTournamentForm";

function CreateTournaments() {
  const { user } = useAuth();
  const [formats, setFormats] = useState<TournamentFormat[]>([]);

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        const data = await getTournamentFormats();
        setFormats(data.data ?? []);
      } catch (err: any) {
        toast.error(err.message);
        console.error(err);
      }
    };

    fetchFormats();
  }, []);

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
