import TabButton from "./TabButton";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="bg-white rounded-lg p-1 mb-6 shadow-sm border">
      <div className="grid grid-cols-2 gap-1">
        <TabButton
          label="My Tournaments"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabKey="tournaments"
        />
        <TabButton
          label="My Teams"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabKey="teams"
        />
      </div>
    </div>
  );
};

export default TabNavigation;
