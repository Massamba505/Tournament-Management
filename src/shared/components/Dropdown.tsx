import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SimpleDropdownProps<T> {
  label: string;
  placeholder?: string;
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getOptionId: (option: T) => string | number;
  getOptionLabel: (option: T) => string;
  getOptionSubtitle?: (option: T) => string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  emptyMessage?: string;
}

export default function SimpleDropdown<T>({
  label,
  placeholder = "Select an option...",
  options,
  value,
  onChange,
  getOptionId,
  getOptionLabel,
  getOptionSubtitle,
  required = false,
  disabled = false,
  className = "",
  emptyMessage = "No options available"
}: SimpleDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: T) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`w-full max-w-md bg-white border border-gray-300 rounded-lg px-4 py-3 text-left shadow-sm transition-colors ${
            disabled 
              ? "bg-gray-50 cursor-not-allowed text-gray-400" 
              : "hover:bg-gray-50 cursor-pointer"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={value ? "text-gray-900 font-medium" : "text-gray-500"}>
              {value ? getOptionLabel(value) : placeholder}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } ${disabled ? "opacity-50" : ""}`}
            />
          </div>
        </button>

        {isOpen && !disabled && (
          <div className="absolute z-10 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="py-1 max-h-60 overflow-y-auto">
              {options.length > 0 ? (
                options.map((option) => (
                  <button
                    key={getOptionId(option)}
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        {getOptionLabel(option)}
                      </div>
                      {getOptionSubtitle && (
                        <div className="text-sm text-gray-500">
                          {getOptionSubtitle(option)}
                        </div>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">
                  {emptyMessage}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
