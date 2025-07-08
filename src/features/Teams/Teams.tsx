import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, Crown, Shield, ChevronDown, 
  Calendar, Mail, UserPlus, Edit3, Trash2 
} from "lucide-react";
import { getCurrentUserTeams, getTeamMembers, updateTeam, deleteTeam } from "./services/teams.service";
import type { Team, TeamMember, UpdateTeamRequest } from "./types/team";
import LoadingSpinner from "@shared/components/LoadingSpinner";
import { EditTeamModal } from "./components";
import toast from "react-hot-toast";

function Teams() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetchUserTeams();
  }, []);

  useEffect(() => {
    if (selectedTeam) {
      fetchTeamMembers(selectedTeam.id);
    }
  }, [selectedTeam]);

  const fetchUserTeams = async () => {
    try {
      const response = await getCurrentUserTeams();
      if (response.data) {
        setTeams(response.data);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
      toast.error("Failed to fetch teams");
    } finally {
      setLoading(false);
    }
  };

  const fetchTeamMembers = async (teamId: string) => {
    setMembersLoading(true);
    try {
      const response = await getTeamMembers(teamId);
      if (response.success && response.data) {
        setTeamMembers(response.data);
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      toast.error("Failed to fetch team members");
    } finally {
      setMembersLoading(false);
    }
  };

  const getMemberIcon = (memberType: string) => {
    switch (memberType) {
      case "Manager":
        return <Shield className="h-4 w-4 text-purple-600" />;
      case "Captain":
        return <Crown className="h-4 w-4 text-yellow-600" />;
      default:
        return <Users className="h-4 w-4 text-blue-600" />;
    }
  };

  const getMemberBadgeColor = (memberType: string) => {
    switch (memberType) {
      case "Manager":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Captain":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const startEditing = () => {
    setEditModalOpen(true);
  };

  const switchTeam = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleSaveTeam = async (updateData: UpdateTeamRequest) => {
    if (!selectedTeam) return;

    await updateTeam(selectedTeam.id, updateData);
    
    const updatedTeam = {
      ...selectedTeam,
      name: updateData.name || selectedTeam.name,
      logoUrl: updateData.logoUrl || null,
      captainId: updateData.captainId || null,
      status: updateData.status || selectedTeam.status
    };
    
    setSelectedTeam(updatedTeam);
    setTeams(teams.map(team => 
      team.id === selectedTeam.id ? updatedTeam : team
    ));
    
    toast.success("Team updated successfully!");
  };

  const handleDeleteTeam = async (team: Team) => {
    setLoading(true);
    try {
      await deleteTeam(team.id);
      
      const updatedTeams = teams.filter(t => t.id !== team.id);
      setTeams(updatedTeams);
      
      if (selectedTeam?.id === team.id) {
        setSelectedTeam(null);
        setTeamMembers([]);
      }
      
      toast.success("Team deleted successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete team");
    }
    finally{
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Teams</h1>
        <p className="text-gray-600 mt-1">Manage your teams and members</p>
      </div>
      <div className="mt-10">

        {teams.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Teams Yet</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Create your first team to start managing members and participating in tournaments.
            </p>
            <button
              onClick={() => navigate("/teams/create")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your First Team
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Select Team</h2>
                  {teams.length > 0 && (
                    <span className="text-sm text-gray-500">{teams.length} team{teams.length !== 1 ? 's' : ''}</span>
                  )}
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    {selectedTeam ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                          {selectedTeam.logoUrl ? (
                            <img
                              src={selectedTeam.logoUrl}
                              alt={`${selectedTeam.name} logo`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Users className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <span className="font-medium text-gray-900">
                          {selectedTeam.name}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500">
                        {teams.length > 0 ? "Choose a team to manage" : "No teams available"}
                      </span>
                    )}
                    <ChevronDown 
                      className={`h-4 w-4 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {teams.map((team) => (
                        <button
                          key={team.id}
                          onClick={() => {
                            switchTeam(team);
                            setDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {team.logoUrl ? (
                              <img
                                src={team.logoUrl}
                                alt={`${team.name} logo`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Users className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-gray-900">{team.name}</div>
                            <div className="text-sm text-gray-500">
                              {team.members?.length || 0} members
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {selectedTeam && (
              <div className="lg:col-span-1 ">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="mt-6 space-y-4">
                      <div className="border-b flex justify-between border-gray-200 pb-4">
                        <div className="text-lg font-medium text-gray-900">{selectedTeam.name}</div>
                        <div className="flex gap-2">
                          <button
                            onClick={startEditing}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                          >
                            <Edit3 size={14} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTeam(selectedTeam)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Created {new Date(selectedTeam.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{teamMembers.length} members</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield className="h-4 w-4" />
                        <span>Manager: {selectedTeam.manager.fullName}</span>
                      </div>
                      {selectedTeam.captain && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Crown className="h-4 w-4" />
                          <span>Captain: {selectedTeam.captain.fullName}</span>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            )}

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
                  {selectedTeam && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      <UserPlus size={16} />
                      Invite Member
                    </button>
                  )}
                </div>

                {!selectedTeam ? (
                  <div className="text-center py-12 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a team to view members</p>
                  </div>
                ) : membersLoading ? (
                  <div className="flex justify-center py-12">
                    <LoadingSpinner />
                  </div>
                ) : teamMembers.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="mb-4">No members in this team yet</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Invite First Member
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {member.user.profilePicture ? (
                              <img
                                src={member.user.profilePicture}
                                alt={`${member.user.fullName} avatar`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Users className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{member.user.fullName}</h3>
                            <p className="text-sm text-gray-500">
                              Joined {new Date(member.joinedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getMemberBadgeColor(member.memberType)}`}>
                            {getMemberIcon(member.memberType)}
                            {member.memberType}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Mail className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedTeam && (
        <EditTeamModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveTeam}
          team={selectedTeam}
        />
      )}
    </>
  );
}

export default Teams;
