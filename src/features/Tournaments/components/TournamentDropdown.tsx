import type { Tournament } from "@/shared/types/tournament";
import { formatDate } from "@/shared/utils/formatDate";
import SimpleDropdown from "@/shared/components/Dropdown";

export default function TournamentDropdown({
  tournaments,
  selectedTournament,
  onSelect,
}: {
  tournaments: Tournament[];
  selectedTournament: Tournament | null;
  onSelect: (tournament: Tournament) => void;
}) {
  return (
    <SimpleDropdown
      label="Select Tournament"
      placeholder="Choose a tournament..."
      options={tournaments}
      value={selectedTournament}
      onChange={onSelect}
      getOptionId={(tournament) => tournament.id}
      getOptionLabel={(tournament) => tournament.name}
      getOptionSubtitle={(tournament) => formatDate(tournament.startDate)}
      emptyMessage="No tournaments available"
      className="mb-8"
    />
  );
}
