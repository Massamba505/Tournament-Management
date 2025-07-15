import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DateInputProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  required?: boolean;
  name: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  selected,
  onChange,
  minDate,
  maxDate,
  required = false,
  name,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      {/* @ts-expect-error: react-datepicker types are not perfect for JSX usage */}
      <DatePicker
        id={name}
        name={name}
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base bg-white"
        dateFormat="yyyy-MM-dd"
        placeholderText="Select date"
        autoComplete="off"
        showPopperArrow={false}
        popperPlacement="bottom-start"
      />
    </div>
  );
};
