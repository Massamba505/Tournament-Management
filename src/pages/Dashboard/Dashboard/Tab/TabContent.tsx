import TeamsSection from "../TeamsSection";
import TournamentSection from "../TournamentSection";

interface TabContentProp {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProp) => {
  return (
    <div className="flex flex-wrap w-full justify-between gap-3">
      {activeTab === "tournaments" && <TournamentSection />}
      {activeTab === "teams" && <TeamsSection />}
    </div>
  );
};

export default TabContent;
