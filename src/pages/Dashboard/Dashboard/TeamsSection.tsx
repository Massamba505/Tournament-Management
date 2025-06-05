import { Users, Plus } from "lucide-react";

const TeamsSection = () => {
  const teams: any = [];

  return (
    <>
      {teams.map((team: any) => (
        <div
          key={team.id}
          className="bg-white flex-1 min-w-72  rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {team.name}
              </h3>
              <p className="text-sm text-gray-500">Role: {team.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1 text-gray-600">
              <Users className="h-4 w-4" />
              <span className="text-sm">{team.members} Members</span>
            </div>
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${team.statusColor}`}
            >
              {team.status}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Team Readiness</span>
              <span className="text-sm font-medium text-gray-900">
                {team.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#142d4c] h-2 rounded-full transition-all duration-300"
                style={{ width: `${team.progress}%` }}
              ></div>
            </div>
          </div>

          <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Manage Team
          </button>
        </div>
      ))}

      <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-[#142d4c]/20 rounded-full flex items-center justify-center mb-4">
          <Plus className="h-8 w-8 text-[#142d4c]" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Create New Team
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Build a new team and invite members to join
        </p>
        <button className="px-6 py-2 bg-[#142d4c] text-white rounded-lg text-sm font-medium hover:bg-g[#142d4c]/90">
          Get Started
        </button>
      </div>
    </>
  );
};

export default TeamsSection;
