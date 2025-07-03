import { Users, Trash2 } from "lucide-react";
import type { TournamentTeam } from "../types/tournament";
import { useState } from "react";
import { deleteTournamentTeam } from "../services/tournaments.service";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

interface TeamCardProps {
  tournamentTeam: TournamentTeam;
  registeredAt: string;
  tournamentId: string;
  onDelete: (teamId: string) => void;
}

function TeamCard({
  tournamentTeam,
  registeredAt,
  tournamentId,
  onDelete,
}: TeamCardProps) {
  const { team } = tournamentTeam;
  const [modalOpen, setModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      setDeleting(true);
      await deleteTournamentTeam(tournamentId, team.id);
      onDelete(team.id);
      setModalOpen(false);
    } catch (error) {
      console.error("Failed to delete team:", error);
      alert("Could not delete the team.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative">
      <button
        onClick={() => setModalOpen(true)}
        className="absolute cursor-pointer top-2 right-2 text-red-500 hover:text-red-700"
        disabled={deleting}
        title="Delete Team"
      >
        <Trash2 className="w-8 h-8" />
      </button>

      <ConfirmDeleteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        teamName={team.name}
      />

      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
          {team.logoUrl ? (
            <img
              src={team.logoUrl}
              alt={`${team.name} logo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <Users className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {team.name}
          </h3>
          <p className="text-sm text-gray-500">
            Registered: {new Date(registeredAt).toLocaleDateString()} at{" "}
            {new Date(registeredAt).toLocaleTimeString()}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Manager:</span>
          <span className="text-sm text-gray-900">{team.manager.fullName}</span>
        </div>

        {team.captain && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Captain:</span>
            <span className="text-sm text-gray-900">
              {team.captain.fullName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
