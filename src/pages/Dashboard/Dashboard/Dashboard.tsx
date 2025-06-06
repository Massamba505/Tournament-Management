import { useState } from "react";
import StatsOverview from "./StatsOverview";
import TabNavigation from "./Tab/TabNavigation";
import TabContent from "./Tab/TabContent";
import UpcomingMatches from "./UpcomingMatches";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tournaments");

  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-5">Dashboard</h1>
      <StatsOverview />
      <div className="flex flex-wrap gap-6 mt-8 h-full">
        <div className="flex-1 min-w-md flex flex-col">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab} />
        </div>
        <UpcomingMatches />
      </div>
    </>
  );
};

export default Dashboard;
