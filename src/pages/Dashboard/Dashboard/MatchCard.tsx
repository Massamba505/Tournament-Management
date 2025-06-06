import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface MatchCardProps {
  match: any;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white min-w-xs rounded-lg border border-gray-200 p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="text-sm text-gray-500 mb-3 font-medium">
        {match.league}
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <span className="font-semibold text-gray-900">{match.homeTeam}</span>
        </div>

        <span className="text-gray-500 font-medium px-2">vs</span>

        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-900">{match.awayTeam}</span>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col flex-wrap text-sm justify-between text-gray-600">
        <div className="flex items-center space-x-1">
          <Calendar size={14} />
          <span>
            {match.date} • {match.time}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <MapPin size={14} />
          <span>{match.venue}</span>
        </div>
      </div>

      <div className="mt-3 text-right">
        <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
