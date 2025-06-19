import React, { useState, useEffect } from "react";
import { ChevronDown, UserPlus, Settings, Power, PowerOff } from "lucide-react";
import type { Team, Member } from "../../../types/tournament";
import MembersList from "./components/MembersList";

const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate fetching user's teams
    const mockTeams: Team[] = [
      {
        id: "1",
        name: "Thunder Wolves",
        logoUrl: undefined,
        managerId: "user1",
        captainId: "user2",
        createdAt: "2024-05-01T00:00:00Z",
        isActive: true,
        manager: { id: "user1", name: "John Smith" },
        captain: { id: "user2", name: "Mike Johnson" },
        members: [],
      },
      {
        id: "2",
        name: "Fire Dragons",
        logoUrl: undefined,
        managerId: "user5",
        captainId: "user6",
        createdAt: "2024-05-10T00:00:00Z",
        isActive: true,
        manager: { id: "user5", name: "Alex Chen" },
        captain: { id: "user6", name: "Emma Davis" },
        members: [],
      },
      {
        id: "3",
        name: "Storm Eagles",
        logoUrl: undefined,
        managerId: "user10",
        captainId: "user11",
        createdAt: "2024-04-15T00:00:00Z",
        isActive: false,
        manager: { id: "user10", name: "Sarah Wilson" },
        captain: { id: "user11", name: "James Brown" },
        members: [],
      },
    ];
    setTeams(mockTeams);
  }, []);

  const fetchTeamMembers = async (teamId: string) => {
    setLoading(true);

    // Mock API call - replace with actual API
    setTimeout(() => {
      const mockMembers: Member[] = [
        {
          id: 1,
          name: "Mike",
          surname: "Johnson",
          profilePicture: undefined,
        },
        {
          id: 2,
          name: "Sarah",
          surname: "Wilson",
          profilePicture: undefined,
        },
        {
          id: 3,
          name: "David",
          surname: "Brown",
          profilePicture: undefined,
        },
        {
          id: 4,
          name: "Emma",
          surname: "Davis",
          profilePicture: undefined,
        },
        {
          id: 5,
          name: "Tom",
          surname: "Wilson",
          profilePicture: undefined,
        },
        {
          id: 6,
          name: "Lisa",
          surname: "Garcia",
          profilePicture: undefined,
        },
      ];

      setTeamMembers(mockMembers);
      setLoading(false);
    }, 1000);
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    setDropdownOpen(false);
    fetchTeamMembers(team.id);
  };

  const handleToggleTeamStatus = () => {
    if (!selectedTeam) return;

    const updatedTeam = { ...selectedTeam, isActive: !selectedTeam.isActive };
    setSelectedTeam(updatedTeam);

    // Update teams list
    setTeams(
      teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team))
    );

    console.log(
      `Team ${updatedTeam.name} ${
        updatedTeam.isActive ? "activated" : "deactivated"
      }`
    );
    // TODO: Implement actual API call
  };

  const handleAddPlayer = () => {
    console.log("Add player to team:", selectedTeam?.name);
    // TODO: Implement add player functionality
  };

  const handleTeamSettings = () => {
    console.log("Open team settings:", selectedTeam?.name);
    // TODO: Implement team settings functionality
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Team Management
          </h1>
          <p className="text-gray-600">
            Manage your teams and view team members
          </p>
        </div>

        {/* Team Dropdown */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Team
          </label>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-3 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <div className="flex items-center justify-between">
                <span
                  className={selectedTeam ? "text-gray-900" : "text-gray-500"}
                >
                  {selectedTeam ? selectedTeam.name : "Choose a team..."}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transform transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div className="py-1">
                  {teams.map((team) => (
                    <button
                      key={team.id}
                      onClick={() => handleTeamSelect(team)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            {team.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            Manager: {team.manager.name}
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            team.isActive
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {team.isActive ? "Active" : "Inactive"}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Details with Action buttons */}
        {selectedTeam && (
          <div className="mb-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedTeam.name}
              </h2>
              <div className="flex gap-2">
                <button onClick={handleAddPlayer}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Player
                </button>
                <button onClick={handleTeamSettings}>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </button>
                <button onClick={handleToggleTeamStatus}>
                  {selectedTeam.isActive ? (
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
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Manager: {selectedTeam.manager.name}</span>
              {selectedTeam.captain && (
                <span>Captain: {selectedTeam.captain.name}</span>
              )}
              <span>
                Created: {new Date(selectedTeam.createdAt).toLocaleDateString()}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedTeam.isActive
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {selectedTeam.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        )}

        {/* Members List */}
        {selectedTeam && (
          <MembersList members={teamMembers} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Teams;
