import React from "react";

interface TabNavigationProps {
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) => {
  return (
    <div className="border-b border-gray-200 mb-6 bg-white rounded-t-lg shadow-sm">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-all duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
