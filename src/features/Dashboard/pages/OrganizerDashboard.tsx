import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "@shared/types/user";
import type { Tournament } from "@features/Tournaments/types/tournament";
import { getOrganizerTournaments } from "@features/Tournaments/services/tournaments.service";
import SectionCard from "../../../shared/components/SectionCard";
import TabNavigation from "../components/TabNavigation";
import LoadingSpinner from "@shared/components/LoadingSpinner";
import {
  Trophy,
  Users,
  BarChart3,
  Plus,
  MapPin,
  Clock,
  Eye,
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface OrganizerDashboardProps {
  user: User;
}

function OrganizerDashboard({ user }: OrganizerDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const tabs = [
    { id: "overview", label: "Overview", icon: <BarChart3 size={16} /> },
    { id: "tournaments", label: "My Tournaments", icon: <Trophy size={16} /> },
    { id: "analytics", label: "Analytics", icon: <TrendingUp size={16} /> },
  ];

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await getOrganizerTournaments(user.id);
        if (response.data) {
          setTournaments(response.data);
        }
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, [user.id]);

  const activeTournaments = tournaments.filter(
    (t) =>
      new Date(t.startDate) <= new Date() && new Date(t.endDate) >= new Date()
  );
  const upcomingTournaments = tournaments.filter(
    (t) => new Date(t.startDate) > new Date()
  );
  const completedTournaments = tournaments.filter(
    (t) => new Date(t.endDate) < new Date()
  );

  const totalTeams = tournaments.reduce(
    (sum, t) => sum + (t.numberOfTeams || 0),
    0
  );
  const totalParticipants = tournaments.reduce(
    (sum, t) => sum + (t.numberOfTeams || 0) * (t.maxPlayersPerTeam || 0),
    0
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <SectionCard title="Recent Tournaments" icon={<Trophy size={18} />}>
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : tournaments.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <Trophy size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="mb-2 text-lg font-medium">
              No tournaments created yet
            </p>
            <p className="mb-6 text-sm max-w-md mx-auto">
              Create your first tournament to start organizing competitions
            </p>
            <button
              onClick={() => navigate("/create-tournament")}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition-all"
            >
              Create Your First Tournament
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {tournaments.slice(0, 3).map((tournament) => (
              <div
                key={tournament.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {tournament.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tournament.numberOfTeams} teams
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {tournament.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {new Date(tournament.startDate) > new Date() ? (
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      )}
                      <span className="text-sm font-medium text-gray-700">
                        {new Date(tournament.startDate) > new Date()
                          ? "Upcoming"
                          : "Active"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(tournament.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      navigate(`/manage-tournament/${tournament.id}`)
                    }
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );

  const renderTournaments = () => (
    <SectionCard title="My Tournaments" icon={<Trophy size={18} />}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
              All ({tournaments.length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Active ({activeTournaments.length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Upcoming ({upcomingTournaments.length})
            </button>
          </div>
          <button
            onClick={() => navigate("/create-tournament")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            New Tournament
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : tournaments.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <Trophy size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="mb-2 text-lg font-medium">No tournaments yet</p>
            <p className="mb-6 text-sm max-w-md mx-auto">
              Create your first tournament to start organizing competitions
            </p>
            <button
              onClick={() => navigate("/create-tournament")}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition-all"
            >
              Create Tournament
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  {tournament.bannerImage ? (
                    <img
                      src={tournament.bannerImage}
                      alt={tournament.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Trophy className="h-12 w-12 text-white opacity-70" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tournament.isPublic
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}
                    >
                      {tournament.isPublic ? "Public" : "Private"}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate">
                      {tournament.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {tournament.format} Tournament
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{tournament.numberOfTeams} teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{tournament.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{tournament.matchDuration} min matches</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">
                        {new Date(tournament.startDate) > new Date()
                          ? "Starts: "
                          : new Date(tournament.endDate) < new Date()
                          ? "Ended: "
                          : "Active"}
                      </span>
                      <span className="block">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => navigate(`/tournament/${tournament.id}`)}
                        className="p-1 text-gray-600 hover:text-blue-600 transition-colors"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/manage-tournament/${tournament.id}`)
                        }
                        className="p-1 text-gray-600 hover:text-blue-600 transition-colors"
                        title="Manage Tournament"
                      >
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionCard>
  );

  const renderAnalytics = () => (
    <SectionCard title="Tournament Analytics" icon={<BarChart3 size={18} />}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Tournament Status
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Active</span>
                <span className="font-medium text-blue-900">
                  {activeTournaments.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Upcoming</span>
                <span className="font-medium text-blue-900">
                  {upcomingTournaments.length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Completed</span>
                <span className="font-medium text-blue-900">
                  {completedTournaments.length}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Participation</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Total Teams</span>
                <span className="font-medium text-green-900">{totalTeams}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Avg per Tournament</span>
                <span className="font-medium text-green-900">
                  {tournaments.length > 0
                    ? Math.round(totalTeams / tournaments.length)
                    : 0}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-700">Total Players</span>
                <span className="font-medium text-green-900">
                  {totalParticipants}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="font-semibold text-purple-900 mb-2">
              Tournament Types
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-purple-700">Public</span>
                <span className="font-medium text-purple-900">
                  {tournaments.filter((t) => t.isPublic).length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-purple-700">Private</span>
                <span className="font-medium text-purple-900">
                  {tournaments.filter((t) => !t.isPublic).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {tournaments.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <BarChart3 size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">No analytics available</p>
            <p className="text-sm">
              Create tournaments to see detailed analytics and insights
            </p>
          </div>
        )}
      </div>
    </SectionCard>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "tournaments":
        return renderTournaments();
      case "analytics":
        return renderAnalytics();
      default:
        return renderOverview();
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

export default OrganizerDashboard;
