import React from "react";

type Props = {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ScheduleSection: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {["startDate", "endDate", "registrationDeadline"].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block mb-2 font-medium text-gray-700 capitalize"
            >
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              id={field}
              name={field}
              type="date"
              value={formData[field] ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
