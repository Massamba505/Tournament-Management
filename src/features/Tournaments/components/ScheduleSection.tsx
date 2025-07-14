import type { TournamentCreateRequest } from "@/shared/types/tournament";
import React from "react";

type ScheduleSectionProps = {
  formData: TournamentCreateRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ScheduleSection: React.FC<ScheduleSectionProps






















> = ({ formData, handleChange }) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="startDate"
            className="block mb-2 font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label
            htmlFor="endDate"
            className="block mb-2 font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            min={formData.startDate}
            required
          />
        </div>

        <div>
          <label
            htmlFor="registrationDeadline"
            className="block mb-2 font-medium text-gray-700"
          >
            Registration Deadline
          </label>
          <input
            id="registrationDeadline"
            name="registrationDeadline"
            type="date"
            value={formData.registrationDeadline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            max={formData.startDate}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
