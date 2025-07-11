import React from "react";
import type { TournamentFormat } from "../types/tournament";
type TournamentDetailsSectionProps = {
  formData: any;
  formats: TournamentFormat[];
  handleChange: (e: React.ChangeEvent<any>) => void;
};

const TournamentDetailsSection: React.FC<TournamentDetailsSectionProps> = ({
  formData,
  formats,
  handleChange,
}) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Tournament Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="formatId"
            className="block mb-2 font-medium text-gray-700"
          >
            Tournament Format
          </label>
          <select
            id="formatId"
            name="formatId"
            value={formData.formatId ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select format</option>
            {formats.map((format) => (
              <option key={format.id} value={format.id}>
                {format.name}
              </option>
            ))}
          </select>
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
            value={formData.numberOfTeams ?? ""}
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
