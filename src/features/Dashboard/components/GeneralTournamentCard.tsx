import { Clock, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tournament } from "@features/Tournaments/types/tournament";
import { useState } from "react";
import toast from "react-hot-toast";

interface TournamentProps {
  tournament: Tournament;
  joinButton?: boolean; 
}

function GeneralTournamentCard({ tournament, joinButton = false }: TournamentProps) {
  const isUpcoming = new Date(tournament.startDate) > new Date();
  const [loading, setLoading] = useState<boolean>(false);
  const isRegistrationOpen = new Date(tournament.endDate) > new Date();

  async function joinTournament() {
    setLoading(true);
    try {
      // const { message } = await teamJoinTournament(tournamentId);
      toast.success(`Successfully joined tournament ${tournament.name}`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const getStatusBadge = () => {
    if (isUpcoming) {
      return {
        text: "Upcoming",
        className: "bg-blue-100 text-blue-800 border border-blue-200"
      };
    }
    return {
      text: "In Progress",
      className: "bg-green-100 text-green-800 border border-green-200"
    };
  };

  const status = getStatusBadge();

  return (
    <div
      key={tournament.id}
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 max-w-[350px] flex-grow group relative overflow-hidden"
    >
      <div className="relative h-44 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <img
          src={tournament.bannerImage ?? ""}
          alt={`${tournament.name} Banner`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.className}`}>
            {status.text}
          </span>
        </div>
        
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
            <Trophy className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="relative p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {tournament.name}
          </h3>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {tournament.format} Tournament
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="bg-blue-100 rounded-full p-1">
              <Users className="h-3 w-3 text-blue-600" />
            </div>
            <span className="font-medium">{tournament.numberOfTeams}</span>
            <span className="text-gray-500">Teams</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="bg-green-100 rounded-full p-1">
              <Clock className="h-3 w-3 text-green-600" />
            </div>
            <span className="font-medium">{tournament.matchDuration || 90}</span>
            <span className="text-gray-500">min</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="font-medium">{tournament.location}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
          <span>Registration ends:</span>
          <span className="font-semibold text-gray-700">
            {new Date(tournament.endDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        <div className="flex gap-2 pt-2">
          {isRegistrationOpen && joinButton && (
            <button
              onClick={() => joinTournament()}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {loading ? "Joining..." : "Join Tournament"}
            </button>
          )}
          <Link
            to={`/tournament-details/${tournament.id}`}
            className={`${
              isRegistrationOpen && joinButton ? 'flex-none' : 'flex-1'
            } bg-white border border-gray-200 text-gray-700 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-center`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GeneralTournamentCard;
