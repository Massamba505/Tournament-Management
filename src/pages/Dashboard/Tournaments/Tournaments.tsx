import { useState, useEffect } from "react";
import type { Tournament, TournamentTeam } from "../../../types/tournament";
import {
  deleteTournament,
  getOrganizerTournaments,
  getTournamentTeams,
} from "../../../service/tournaments.service";
import TournamentDropdown from "./components/TournamentDropdown";
import TournamentDetails from "./components/TournamentDetails";
import TeamsList from "./components/TeamsList";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import ConfirmDeleteTournamentModal from "./components/ConfirmDeleteTournamentModal";

function Tournaments() {
  const { user } = useAuth();
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [selectedTournament, setSelectedTournament] =
    useState<Tournament | null>(null);
  const [tournamentTeams, setTournamentTeams] = useState<TournamentTeam[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchTournaments();
  }, []);

  if (!user) return null;

  const fetchTournaments = async () => {
    try {
      const data = await getOrganizerTournaments(user.id);
      setTournaments(data.data ?? []);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  const fetchTournamentTeams = async (tournamentId: string) => {
    setLoading(true);
    try {
      const data = await getTournamentTeams(tournamentId);
      setTournamentTeams(data.data ?? []);
    } catch (error) {
      console.error("Error fetching tournament teams:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTournamentSelect = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    fetchTournamentTeams(tournament.id);
  };

  const handleTeamDelete = (teamId: string) => {
    setTournamentTeams((prev) =>
      prev.filter((team) => team.team.id !== teamId)
    );
  };

  const confirmDeleteTournament = () => {
    setIsDeleteModalOpen(true);
  };

  const performDeleteTournament = async () => {
    if (!selectedTournament) return;

    try {
      await deleteTournament(selectedTournament.id);

      setTournaments((prev) =>
        prev.filter((t) => t.id !== selectedTournament.id)
      );

      setSelectedTournament(null);
      toast.success("Tournament deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete tournament. Please try again.");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Tournament Management</h1>
        <p className="text-lg text-gray-600">
          Manage your tournaments and view registered teams
        </p>
      </div>

      <TournamentDropdown
        tournaments={tournaments}
        selectedTournament={selectedTournament}
        onSelect={handleTournamentSelect}
      />

      {selectedTournament && (
        <>
          <TournamentDetails
            tournament={selectedTournament}
            onDelete={confirmDeleteTournament}
          />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <TeamsList
              tournamentId={selectedTournament.id}
              tournamentTeams={tournamentTeams}
              loading={loading}
              onDeleteTeam={handleTeamDelete}
            />
          </div>

          <ConfirmDeleteTournamentModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={performDeleteTournament}
            tournamentName={selectedTournament.name}
          />
        </>
      )}
    </>
  );
}

export default Tournaments;
