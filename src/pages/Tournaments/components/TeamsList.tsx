import React from "react";
import { Users } from "lucide-react";
import type { TournamentTeam } from "../../../../types/tournament";
import TeamCard from "./TeamCard";

interface TeamsListProps {
  tournamentTeams: TournamentTeam[];
  loading: boolean;
  tournamentId: string;
  onDeleteTeam: (teamId: string) => void;
}

const TeamsList: React.FC<TeamsListProps> = ({
  tournamentTeams,
  loading,
  tournamentId,
  onDeleteTeam,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg h-64 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (tournamentTeams.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No teams registered
        </h3>
        <p className="text-gray-500">
          This tournament doesn't have any teams registered yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Registered Teams ({tournamentTeams.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournamentTeams.map((tournamentTeam) => (
          <TeamCard
            key={tournamentTeam.team.id}
            tournamentTeam={tournamentTeam}
            registeredAt={tournamentTeam.registeredAt}
            tournamentId={tournamentId}
            onDelete={onDeleteTeam}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsList;
