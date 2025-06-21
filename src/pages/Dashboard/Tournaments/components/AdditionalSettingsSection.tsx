import React from "react";

type Props = {
  formData: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const AdditionalSettingsSection: React.FC<Props> = ({
  formData,
  handleChange,
  setFormData,
}) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Additional Settings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Match Duration */}
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

        {/* Entry Fee */}
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

        {/* Allow Join via Link */}
        <div className="flex items-start space-x-3">
          <input
            id="allowJoinViaLink"
            name="allowJoinViaLink"
            type="checkbox"
            checked={formData.allowJoinViaLink}
            onChange={handleChange}
            className="mt-1 w-5 h-5 text-[#142d4c] rounded focus:ring-[#142d4c]"
          />
          <div>
            <label
              htmlFor="allowJoinViaLink"
              className="block text-sm sm:text-base font-medium text-gray-700"
            >
              Allow join via link
            </label>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Teams can join using a shareable link
            </p>
          </div>
        </div>

        {/* Visibility */}
        <div>
          <label
            htmlFor="isPublic"
            className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
          >
            Visibility
          </label>
          <select
            id="isPublic"
            name="isPublic"
            value={formData.isPublic ? "public" : "private"}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                isPublic: e.target.value === "public",
              }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="public">Public - Visible to everyone</option>
            <option value="private">Private - Only via invite</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSettingsSection;
