import { useState } from "react";
import StatsOverview from "./StatsOverview";
import TabNavigation from "./Tab/TabNavigation";
import TabContent from "./Tab/TabContent";
import UpcomingMatches from "./UpcomingMatches";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tournaments");

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <StatsOverview />
      <div className="flex flex-wrap gap-6 mt-8">
        <div className="flex-1 flex min-w-96 flex-col">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
        <div className="space-y-6">
          <UpcomingMatches />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
