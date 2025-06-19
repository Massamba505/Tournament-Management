import React from "react";
import { Settings, Power, PowerOff, Users, Calendar } from "lucide-react";
import type { Tournament } from "../../../../types/tournament";

interface TournamentActionsProps {
  tournament: Tournament;
  onToggleStatus: () => void;
  onManageTeams: () => void;
  onScheduleMatches: () => void;
  onSettings: () => void;
}

const TournamentActions: React.FC<TournamentActionsProps> = ({
  tournament,
  onToggleStatus,
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
      <button onClick={onToggleStatus}>
        {tournament.isActive ? (
          <>
            <PowerOff className="h-4 w-4 mr-2" />
            Deactivate
          </>
        ) : (
          <>
            <Power className="h-4 w-4 mr-2" />
            Activate
          </>
        )}
      </button>
    </div>
  );
};

export default TournamentActions;
