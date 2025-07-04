import React from "react";
import type { CreateTournamentRequest } from "../types/tournament";

type Props = {
  formData: CreateTournamentRequest;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OrganizerInfoSection: React.FC<Props> = ({
  formData,
  handleChange,
  handleContactChange,
}) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Organizer Information
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="bannerImage"
            className="block mb-2 font-medium text-gray-700"
          >
            Banner Image URL
          </label>
          <input
            id="bannerImage"
            name="bannerImage"
            type="text"
            placeholder="https://example.com/banner.jpg"
            value={formData.bannerImage ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="block mb-2 font-medium text-gray-700"
          >
            Contact (Email or Phone)
          </label>
          <input
            id="contact"
            type="text"
            placeholder="info@league.com or +27123456789"
            value={(formData.contactEmail || formData.contactPhone) ?? ""}
            onChange={handleContactChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizerInfoSection;
