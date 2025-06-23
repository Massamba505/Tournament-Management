import type { Tournament } from "../../../../types/tournament";
interface Props {
  tournament: Tournament;
  onDelete: () => void;
}

export default function TournamentDetails({ tournament, onDelete }: Props) {
  return (
    <div className="mb-10 bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-6">
        {tournament.bannerImage && (
          <div className="overflow-hidden rounded-xl max-h-[300px] relative group">
            <img
              src={tournament.bannerImage}
              alt="Tournament Banner"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
          </div>
        )}

        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={onDelete}
            className="px-4 py-2 cursor-pointer bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {tournament.name}
          </h2>

          {tournament.description && (
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {tournament.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-800">Start:</span>{" "}
            {new Date(tournament.startDate).toLocaleDateString()}
          </div>
          {tournament.endDate && (
            <div>
              <span className="font-semibold text-gray-800">End:</span>{" "}
              {new Date(tournament.endDate).toLocaleDateString()}
            </div>
          )}
          <div>
            <span className="font-semibold text-gray-800">
              Registration Deadline:
            </span>{" "}
            {new Date(tournament.registrationDeadline).toLocaleDateString()}
          </div>
          <div>
            <span className="font-semibold text-gray-800">Match Duration:</span>{" "}
            {tournament.matchDuration} min
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm text-gray-700 mt-2">
          <div>
            <span className="font-medium text-gray-800">Format:</span>{" "}
            {tournament.format}
          </div>
          <div>
            <span className="font-medium text-gray-800">Teams Allowed:</span>{" "}
            {tournament.numberOfTeams}
          </div>
          <div>
            <span className="font-medium text-gray-800">Max Players/Team:</span>{" "}
            {tournament.maxPlayersPerTeam}
          </div>
          <div>
            <span className="font-medium text-gray-800">Location:</span>{" "}
            {tournament.location}
          </div>
          <div>
            <span className="font-medium text-gray-800">Entry Fee:</span>{" "}
            {tournament.entryFee
              ? `$${tournament.entryFee.toFixed(2)}`
              : "Free"}
          </div>
          <div>
            <span className="font-medium text-gray-800">
              Allow Join via Link:
            </span>{" "}
            {tournament.allowJoinViaLink ? "Yes" : "No"}
          </div>
          <div>
            <span className="font-medium text-gray-800">Visibility:</span>{" "}
            {tournament.isPublic ? "Public" : "Private"}
          </div>
        </div>

        {(tournament.contactEmail || tournament.contactPhone) && (
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              {tournament.contactEmail && (
                <div>
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  {tournament.contactEmail}
                </div>
              )}
              {tournament.contactPhone && (
                <div>
                  <span className="font-medium text-gray-800">Phone:</span>{" "}
                  {tournament.contactPhone}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
