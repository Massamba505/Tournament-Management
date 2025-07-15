import type { TournamentCreateRequest } from "@/shared/types/tournament";
import React from "react";
import { DateInput } from "@/shared/components/DateInput";
import { format, parseISO } from "date-fns";

type ScheduleSectionProps = {
  formData: TournamentCreateRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  formData,
  handleChange,
}) => {
  const startDate = formData.startDate ? parseISO(formData.startDate) : null;
  const endDate = formData.endDate ? parseISO(formData.endDate) : null;
  const registrationDeadline = formData.registrationDeadline
    ? parseISO(formData.registrationDeadline)
    : null;

    const handleDateChange = (name: string, date: Date | null) => {
      const value = date ? format(date, "yyyy-MM-dd") : "";
      const syntheticEvent = {
        target: { name, value },
      } as React.ChangeEvent<HTMLInputElement>;
    
      handleChange(syntheticEvent);
    };

  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <DateInput
          label="Start Date"
          name="startDate"
          selected={startDate}
          onChange={(date) => handleDateChange("startDate", date)}
          required
        />
        <DateInput
          label="End Date"
          name="endDate"
          selected={endDate}
          onChange={(date) => handleDateChange("endDate", date)}
          minDate={startDate || undefined}
          required
        />
        <DateInput
          label="Registration Deadline"
          name="registrationDeadline"
          selected={registrationDeadline}
          onChange={(date) =>
            handleDateChange("registrationDeadline", date)
          }
          maxDate={startDate || undefined}
          required
        />
      </div>
    </div>
  );
};

export default ScheduleSection;
