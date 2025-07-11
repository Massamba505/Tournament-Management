import React from "react";
import type { CreateTournamentRequest } from "../types/tournament";

type Props = {
  formData: CreateTournamentRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ScheduleSection: React.FC<Props> = ({ formData, handleChange }) => {
  // Helper function to format Date to YYYY-MM-DD for date inputs
  const formatDateForInput = (date: Date | string | null): string => {
    if (!date) return "";
    
    // If it's already a string, assume it's in correct format
    if (typeof date === "string") return date;
    
    // If it's a Date object, format it
    return date.toISOString().split('T')[0];
  };

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
            value={formatDateForInput(formData.startDate)}
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
            value={formatDateForInput(formData.endDate)}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            min={formatDateForInput(formData.startDate)}
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
            value={formatDateForInput(formData.registrationDeadline)}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            max={formatDateForInput(formData.startDate)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
