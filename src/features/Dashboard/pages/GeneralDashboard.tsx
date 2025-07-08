import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "@shared/types/user";
import GeneralTournamentSection from "../components/GeneralTournamentSection";
import SectionCard from "../components/SectionCard";
import TabNavigation from "../components/TabNavigation";
import { getCurrentUserTeams } from "@features/Teams/services/teams.service";
import type { Team } from "@features/Teams/types/team";
import LoadingSpinner from "@shared/components/LoadingSpinner";
import { 
  Trophy, Users,
  LayoutDashboard
} from "lucide-react";

interface GeneralDashboardProps {
  user: User;
}

function GeneralDashboard({ user }: GeneralDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsLoading, setTeamsLoading] = useState(true);
  const navigate = useNavigate();
  const tabs = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={16} /> },
    { id: "teams", label: "My Teams", icon: <Users size={16} /> }
  ]

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getCurrentUserTeams();
        if (response.success && response.data) {
          setTeams(response.data);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setTeamsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3">
              <SectionCard 
                title="Available Tournaments" 
                icon={<Trophy size={18} />}
              >
                <GeneralTournamentSection user={user}/>
              </SectionCard>
            </div>
          </div>
        );
      case "teams":
        return (
          <SectionCard title="My Teams" icon={<Users size={18} />}>
            {teamsLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner />
              </div>
            ) : teams.length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <Users size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="mb-2 text-lg font-medium">You haven't joined any teams yet</p>
                <p className="mb-6 text-sm max-w-md mx-auto">Create a new team or join an existing one to participate in tournaments and track your progress</p>
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => navigate('/teams/create')}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition-all"
                  >
                    Create a Team
                  </button>
                  <button 
                    onClick={() => navigate('/teams')}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    View Teams
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">You're a member of {teams.length} team{teams.length !== 1 ? 's' : ''}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => navigate('/teams/create')}
                      className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                    >
                      Create Team
                    </button>
                    <button 
                      onClick={() => navigate('/teams')}
                      className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Manage Teams
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teams.slice(0, 6).map((team) => (
                    <div key={team.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                          {team.logoUrl ? (
                            <img
                              src={team.logoUrl}
                              alt={`${team.name} logo`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Users className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 truncate">{team.name}</h3>
                          <p className="text-sm text-gray-500">
                            {team.members?.length || 0} members
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Created {new Date(team.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
                {teams.length > 6 && (
                  <div className="text-center pt-4">
                    <button 
                      onClick={() => navigate('/teams')}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View all {teams.length} teams →
                    </button>
                  </div>
                )}
              </div>
            )}
          </SectionCard>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome, {user.name}!</p>
        </div>
      </div>
      
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {renderTabContent()}
    </>
  );
}

export default GeneralDashboard;
