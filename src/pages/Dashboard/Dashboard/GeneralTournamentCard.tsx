import { Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tournament } from "../../../types";
import { teamJoinTournament } from "../../../service/tournaments.service";
import { useState } from "react";
import toast from "react-hot-toast";

interface TournamentProps {
  tournament: Tournament;
}

function GeneralTournamentCard({ tournament }: TournamentProps) {
  const isUpcoming = new Date(tournament.startDate) > new Date();
  const [loading, setLoading] = useState<boolean>(false);
  const isRegistrationOpen =
    new Date(tournament.registrationDeadline) > new Date();

  async function joinTournament(tournamentId: string) {
    setLoading(true);
    try {
      // const { message } = await teamJoinTournament(tournamentId);
      toast.success(`Successfully joined tournament`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      key={tournament.id}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 max-w-[350px] flex-grow"
    >
      <div className="h-40 bg-gray-100 overflow-hidden">
        <img
          src={tournament.bannerImage}
          alt={`${tournament.name} Banner`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
              {tournament.name}
            </h3>
            <p className="text-sm text-gray-500">
              {tournament.format} Tournament
            </p>
          </div>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              tournament.isPublic
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {tournament.isPublic ? "Public" : "Private"}
          </span>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {tournament.numberOfTeams} Teams
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {isUpcoming ? "Upcoming" : "In Progress"}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-yellow-500" />
            Match: {tournament.matchDuration} min
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {tournament.location}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-gray-500">
            Registration ends:{" "}
            <span className="font-medium">
              {new Date(tournament.registrationDeadline).toLocaleDateString()}
            </span>
          </div>
          <div className="flex gap-2">
            {isRegistrationOpen && (
              <button
                onClick={() => joinTournament(tournament.id)}
                className="text-sm cursor-pointer font-medium text-blue-600 hover:text-blue-800"
              >
                {loading ? "Joining..." : "Join"}
              </button>
            )}
            <Link
              to={`/tournament-details/${tournament.id}`}
              className="text-sm cursor-pointer font-medium text-blue-600 hover:text-blue-800"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralTournamentCard;
