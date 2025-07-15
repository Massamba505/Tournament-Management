import React from "react";
import SimpleDropdown from "@/shared/components/Dropdown";

const visibilityOptions = [
  { id: "public", name: "Public - Visible to everyone" },
  { id: "private", name: "Private - Only via invite" }
];

type AdditionalSettingsSectionProps = {
  formData: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const AdditionalSettingsSection: React.FC<AdditionalSettingsSectionProps> = ({
  formData,
  handleChange,
  setFormData,
}) => {
  const selectedVisibility = formData.isPublic 
    ? visibilityOptions[0]
    : visibilityOptions[1];
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Additional Settings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="matchDuration"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Match Duration (minutes)
          </label>
          <input
            id="matchDuration"
            name="matchDuration"
            type="number"
            min="0"
            max="120"
            value={formData.matchDuration ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label
            htmlFor="entryFee"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Entry Fee (optional)
          </label>
          <input
            id="entryFee"
            name="entryFee"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 200"
            value={formData.entryFee ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <input
            id="allowJoinViaLink"
            name="allowJoinViaLink"
            type="checkbox"
            checked={formData.allowJoinViaLink}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-[#142d4c] rounded cursor-pointer border-gray-300 transition-colors duration-200"
          />
          <div>
            <label
              htmlFor="allowJoinViaLink"
              className="block text-sm sm:text-base font-medium text-gray-700 cursor-pointer"
            >
              Allow join via link
            </label>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Teams can join using a shareable link without approval
            </p>
          </div>
        </div>

        <div>
          <SimpleDropdown
            label="Visibility"
            placeholder="Choose visibility..."
            options={visibilityOptions}
            value={selectedVisibility}
            onChange={(option) =>
              setFormData((prev: any) => ({
                ...prev,
                isPublic: option.id === "public",
              }))
            }
            getOptionId={(option) => option.id}
            getOptionLabel={(option) => option.name}
            required={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalSettingsSection;
