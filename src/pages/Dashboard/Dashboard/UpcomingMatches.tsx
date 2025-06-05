import { Calendar } from "lucide-react";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  const matches: any = [];

  return (
    <div className="max-w-md mx-auto border-2 border-gray-100 p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar size={20} className="text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-900">
          Upcoming Matches
        </h2>
      </div>

      <div className="space-y-4">
        {matches.map((match: any) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
