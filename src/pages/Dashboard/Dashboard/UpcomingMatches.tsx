import { Calendar } from "lucide-react";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  const matches = [
    {
      id: "1",
      league: "Summer League 2023",
      homeTeam: "FC United",
      awayTeam: "City Warriors",
      date: "Tomorrow",
      time: "18:00",
      venue: "City Sports Complex",
    },
    {
      id: "2",
      league: "Corporate Cup",
      homeTeam: "Real FC",
      awayTeam: "FC United",
      date: "Sat, Jun 29",
      time: "15:30",
      venue: "Business Park Stadium",
    },
  ];

  return (
    <div className="min-w-md mx-auto border-2 border-gray-100 flex flex-col p-6 rounded-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar size={20} className="text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-900">
          Upcoming Matches
        </h2>
      </div>

      <div className="gap-3 flex lg:flex-col flex-wrap">
        {matches.map((match: any) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
