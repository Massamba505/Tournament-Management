import { Users } from "lucide-react";
import type { Team } from "../../../../types/tournament";

interface TeamCardProps {
  team: Team;
  registeredAt: string;
}

function TeamCard({ team, registeredAt }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
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
            Registered: {new Date(registeredAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Manager:</span>
          <span className="text-sm text-gray-900">{team.manager.name}</span>
        </div>

        {team.captain && (
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Captain:</span>
            <span className="text-sm text-gray-900">{team.captain.name}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Members:</span>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-900">{team.members.length}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Status:</span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              team.isActive
                ? "bg-green-100 text-blue-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {team.isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
