import { useState, useEffect } from "react";
import MainLayout from "../../../components/Layouts/MainLayout";
import type { Tournament, TournamentTeam } from "../../../types/tournament";
import TournamentDropdown from "./component/TournamentDropdown";
import TournamentDetails from "./component/TournamentDetails";
import TournamentActions from "./component/TournamentActions";
import TeamsList from "./component/TeamsList";
import {
  getTournaments,
  getTournamentTeams,
} from "../../../service/tournaments.service";

function TournamentManagement() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [selectedTournament, setSelectedTournament] =
    useState<Tournament | null>(null);
  const [tournamentTeams, setTournamentTeams] = useState<TournamentTeam[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const data = await getTournaments();
      setTournaments(data);
    } catch (error) {
      console.error("Error fetching tournaments:", error);
    }
  };

  const fetchTournamentTeams = async (tournamentId: string) => {
    setLoading(true);
    try {
      const data = await getTournamentTeams(tournamentId);
      setTournamentTeams(data);
    } catch (error) {
      console.error("Error fetching tournament teams:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTournamentSelect = (tournament: Tournament) => {
    setSelectedTournament(tournament);
    fetchTournamentTeams(tournament.id);
  };

  const handleToggleStatus = () => {
    if (!selectedTournament) return;

    const updatedTournament = {
      ...selectedTournament,
      isActive: !selectedTournament.isActive,
    };

    setSelectedTournament(updatedTournament);
    setTournaments(
      tournaments.map((t) =>
        t.id === selectedTournament.id ? updatedTournament : t
      )
    );
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Tournament Management</h1>
        <p className="text-lg text-gray-600">
          Manage your tournaments and view registered teams
        </p>
      </div>

      <TournamentDropdown
        tournaments={tournaments}
        selectedTournament={selectedTournament}
        onSelect={handleTournamentSelect}
      />

      {selectedTournament && (
        <>
          <TournamentDetails
            tournament={selectedTournament}
            actions={
              <TournamentActions
                tournament={selectedTournament}
                onToggleStatus={handleToggleStatus}
                onManageTeams={() => console.log("Manage teams")}
                onScheduleMatches={() => console.log("Schedule matches")}
                onSettings={() => console.log("Open settings")}
              />
            }
          />

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
            <TeamsList tournamentTeams={tournamentTeams} loading={loading} />
          </div>
        </>
      )}
    </MainLayout>
  );
}

export default TournamentManagement;
