interface TabButtonProps {
  label: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabKey: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  activeTab,
  setActiveTab,
  tabKey,
}) => {
  return (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={`py-2 px-4 text-sm font-medium rounded-md ${
        activeTab === tabKey
          ? "bg-gray-900 text-white shadow-sm"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
