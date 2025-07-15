import type { TournamentCreateRequest, TournamentFormatItem } from "@/shared/types/tournament";
import SimpleDropdown from "@/shared/components/Dropdown";
import React from "react";

type TournamentDetailsSectionProps = {
  formData: TournamentCreateRequest;
  formats: TournamentFormatItem[];
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleFormatChange: (format: TournamentFormatItem) => void;
};

const TournamentDetailsSection: React.FC<TournamentDetailsSectionProps> = ({
  formData,
  formats,
  handleChange,
  handleFormatChange,
}) => {
  const selectedFormat = formats.find(f => f.id === formData.format) || null;
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Tournament Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <SimpleDropdown
            label="Tournament Format"
            placeholder="Choose a format..."
            options={formats}
            value={selectedFormat}
            onChange={handleFormatChange}
            getOptionId={(format) => format.id}
            getOptionLabel={(format) => format.name}
            required={true}
            disabled={formats.length === 0}
            emptyMessage="No formats available"
          />
        </div>

        <div>
          <label
            htmlFor="numberOfTeams"
            className="block mb-2 font-medium text-gray-700"
          >
            Number of Teams
          </label>
          <input
            id="numberOfTeams"
            name="numberOfTeams"
            type="number"
            min="2"
            max="128"
            value={formData.maxNumberOfTeams ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label
            htmlFor="maxPlayersPerTeam"
            className="block mb-2 font-medium text-gray-700"
          >
            Max Players per Team
          </label>
          <input
            id="maxPlayersPerTeam"
            name="maxPlayersPerTeam"
            type="number"
            min="1"
            max="25"
            value={formData.maxPlayersPerTeam ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block mb-2 font-medium text-gray-700"
          >
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default TournamentDetailsSection;
