import React from "react";
import { Settings, Users, Calendar } from "lucide-react";

interface TournamentActionsProps {
  onManageTeams: () => void;
  onScheduleMatches: () => void;
  onSettings: () => void;
}

const TournamentActions: React.FC<TournamentActionsProps> = ({
  onManageTeams,
  onScheduleMatches,
  onSettings,
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <button onClick={onManageTeams}>
        <Users className="h-4 w-4 mr-2" />
        Manage Teams
      </button>
      <button onClick={onScheduleMatches}>
        <Calendar className="h-4 w-4 mr-2" />
        Schedule Matches
      </button>
      <button onClick={onSettings}>
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </button>
    </div>
  );
};

export default TournamentActions;
