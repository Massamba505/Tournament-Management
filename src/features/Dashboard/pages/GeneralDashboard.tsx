import { useState } from "react";
import type { User } from "@shared/types/user";
import GeneralTournamentSection from "../components/GeneralTournamentSection";
import SectionCard from "../components/SectionCard";
import TabNavigation from "../components/TabNavigation";
import { 
  Trophy, Users,
  LayoutDashboard
} from "lucide-react";

interface GeneralDashboardProps {
  user: User;
}

function GeneralDashboard({ user }: GeneralDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const tabs = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={16} /> },
    { id: "teams", label: "My Teams", icon: <Users size={16} /> }
  ]

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
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="mb-2 text-lg font-medium">You haven't joined any teams yet</p>
              <p className="mb-6 text-sm max-w-md mx-auto">Create a new team or join an existing one to participate in tournaments and track your progress</p>
              <button className="mt-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition-all">
                Create a Team
              </button>
            </div>
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
