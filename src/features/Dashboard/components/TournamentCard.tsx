import { MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tournament } from "@features/Tournaments/types/tournament";

interface TournamentProps {
  tournament: Tournament;
}

function TournamentCard({ tournament }: TournamentProps) {
  const isUpcoming = new Date(tournament.startDate) > new Date();
  const isActive = new Date(tournament.startDate) <= new Date() && new Date(tournament.endDate) >= new Date();
  
  const getStatusInfo = () => {
    if (isUpcoming) {
      return { text: "Upcoming", className: "bg-blue-50 text-blue-700 border border-blue-200" };
    } else if (isActive) {
      return { text: "Active", className: "bg-green-50 text-green-700 border border-green-200" };
    } else {
      return { text: "Completed", className: "bg-gray-50 text-gray-700 border border-gray-200" };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div
      key={tournament.id}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 max-w-[380px] flex-grow relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Banner Image with better overlay */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {tournament.bannerImage ? (
          <img
            src={tournament.bannerImage}
            alt={`${tournament.name} Banner`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
            <Trophy className="h-16 w-16 text-white/80" />
          </div>
        )}
        
        {/* Status badge overlay */}
        <div className="absolute top-4 right-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${statusInfo.className}`}>
            {statusInfo.text}
          </span>
        </div>
        
        {/* Privacy indicator */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
              tournament.isPublic
                ? "bg-green-50/90 text-green-700 border border-green-200"
                : "bg-gray-50/90 text-gray-700 border border-gray-200"
            }`}
          >
            {tournament.isPublic ? "Public" : "Private"}
          </span>
        </div>
      </div>

      {/* Content with better spacing and typography */}
      <div className="relative p-6 space-y-5">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
            {tournament.name}
          </h3>
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            {tournament.format} Tournament
          </p>
        </div>

        {/* Enhanced info grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-medium">{tournament.numberOfTeams} Teams</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 bg-yellow-50 rounded-lg">
              <Trophy className="h-4 w-4 text-yellow-600" />
            </div>
            <span className="font-medium">{tournament.matchDuration || 90} min</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 col-span-2">
            <div className="p-1.5 bg-green-50 rounded-lg">
              <MapPin className="h-4 w-4 text-green-600" />
            </div>
            <span className="font-medium truncate">{tournament.location}</span>
          </div>
        </div>

        {/* Enhanced footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            <span className="font-medium text-gray-700">Registration ends:</span>
            <br />
            <span className="font-semibold">
              {new Date(tournament.endDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <Link
            to={`/manage-tournament/${tournament.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
          >
            Manage
            <Trophy className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;
