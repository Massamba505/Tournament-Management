import type { ReactNode } from "react";
import type { Tournament } from "../../../../types/tournament";

export default function TournamentDetails({
  tournament,
  actions,
}: {
  tournament: Tournament;
  actions: ReactNode;
}) {
  return (
    <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {tournament.name}
          </h2>
          {tournament.description && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {tournament.description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="font-medium">Start:</span>
              <span className="ml-1">
                {new Date(tournament.startDate).toLocaleDateString()}
              </span>
            </span>
            {tournament.endDate && (
              <span className="flex items-center">
                <span className="font-medium">End:</span>
                <span className="ml-1">
                  {new Date(tournament.endDate).toLocaleDateString()}
                </span>
              </span>
            )}
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                tournament.isActive
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {tournament.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
        <div className="ml-6">{actions}</div>
      </div>
    </div>
  );
}
