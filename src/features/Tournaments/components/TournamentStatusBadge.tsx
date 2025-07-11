import React from "react";
import { 
  FileText, 
  Users, 
  UserCheck, 
  Play, 
  Trophy, 
  XCircle 
} from "lucide-react";
import { TournamentStatus } from "../types/tournament";

interface TournamentStatusBadgeProps {
  status: TournamentStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

const TournamentStatusBadge: React.FC<TournamentStatusBadgeProps> = ({ 
  status, 
  size = "md", 
  showIcon = true 
}) => {
  const getStatusConfig = (status: TournamentStatus) => {
    const configs = {
      [TournamentStatus.Draft]: {
        label: "Draft",
        icon: FileText,
        className: "bg-gray-50 text-gray-700 border-gray-200",
        dotColor: "bg-gray-400"
      },
      [TournamentStatus.RegistrationOpen]: {
        label: "Registration Open",
        icon: Users,
        className: "bg-blue-50 text-blue-700 border-blue-200",
        dotColor: "bg-blue-400"
      },
      [TournamentStatus.RegistrationClosed]: {
        label: "Registration Closed",
        icon: UserCheck,
        className: "bg-yellow-50 text-yellow-700 border-yellow-200",
        dotColor: "bg-yellow-400"
      },
      [TournamentStatus.InProgress]: {
        label: "In Progress",
        icon: Play,
        className: "bg-green-50 text-green-700 border-green-200",
        dotColor: "bg-green-400"
      },
      [TournamentStatus.Completed]: {
        label: "Completed",
        icon: Trophy,
        className: "bg-purple-50 text-purple-700 border-purple-200",
        dotColor: "bg-purple-400"
      },
      [TournamentStatus.Cancelled]: {
        label: "Cancelled",
        icon: XCircle,
        className: "bg-red-50 text-red-700 border-red-200",
        dotColor: "bg-red-400"
      }
    };

    return configs[status] || configs[TournamentStatus.Draft];
  };

  const getSizeClasses = (size: "sm" | "md" | "lg") => {
    const sizes = {
      sm: {
        badge: "px-2 py-1 text-xs",
        icon: "h-3 w-3",
        dot: "w-1.5 h-1.5"
      },
      md: {
        badge: "px-3 py-1.5 text-sm",
        icon: "h-4 w-4",
        dot: "w-2 h-2"
      },
      lg: {
        badge: "px-4 py-2 text-base",
        icon: "h-5 w-5",
        dot: "w-2.5 h-2.5"
      }
    };

    return sizes[size];
  };

  const config = getStatusConfig(status);
  const sizeClasses = getSizeClasses(size);
  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-semibold rounded-full border
        ${config.className} ${sizeClasses.badge}
      `}
    >
      {showIcon && (
        <div className="flex items-center">
          <div className={`rounded-full ${config.dotColor} ${sizeClasses.dot} animate-pulse`} />
          <Icon className={`ml-1 ${sizeClasses.icon}`} />
        </div>
      )}
      {config.label}
    </span>
  );
};

export default TournamentStatusBadge;
