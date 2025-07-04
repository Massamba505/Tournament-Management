import React, { useState } from "react";
import { Trophy } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createTournament } from "../services/tournaments.service";
import OrganizerInfoSection from "./OrganizerInfoSection";
import TournamentDetailsSection from "./TournamentDetailsSection";
import ScheduleSection from "./ScheduleSection";
import AdditionalSettingsSection from "./AdditionalSettingsSection";
import { TournamentStatus, TournamentFormatEnum } from "../types/tournament";
import type { CreateTournamentRequest, TournamentFormatItem } from "../types/tournament";

interface Props {
  userId: string;
  formats: TournamentFormatItem[];
}

function CreateTournamentForm({ userId, formats }: Props) {
  const navigation = useNavigate();

  const initialFormData: CreateTournamentRequest = {
    name: "",
    organizerId: userId,
    description: "",
    format: TournamentFormatEnum.SingleElimination,
    numberOfTeams: 2,
    maxPlayersPerTeam: 2,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    location: "",
    allowJoinViaLink: false,
    bannerImage: null,
    contactEmail: null,
    contactPhone: null,
    entryFee: null,
    matchDuration: null,
    registrationDeadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    isPublic: true,
    status: TournamentStatus.Draft
  };

  const [formData, setFormData] = useState<CreateTournamentRequest>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTournament({ ...formData, organizerId: userId });
      toast.success("Tournament created successfully!");
      navigation("/dashboard");
    } catch (err: any) {
      toast.error(err.message);
      console.error(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    let val: string | number | boolean = value;

    if (type === "checkbox") {
      val = (e.target as HTMLInputElement).checked;
    } else if (type === "number") {
      val = Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isEmail = value.includes("@");

    setFormData((prev) => ({
      ...prev,
      contactEmail: isEmail ? value : null,
      contactPhone: !isEmail ? value : null,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
      <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
        <label
          htmlFor="name"
          className="block text-sm sm:text-base font-medium text-gray-800 mb-2"
        >
          Tournament Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Summer League 2023"
          value={formData.name ?? ""}
          onChange={handleChange}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="block text-lg font-medium text-gray-800">
            Description
          </h2>
          <span className="text-sm text-gray-500">
            {formData.description?.length ?? 0}/255
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">
          Describe your tournament format, rules, and any special requirements
        </p>
        <textarea
          id="description"
          name="description"
          placeholder="e.g., This is a 5-a-side summer tournament with knockout rounds..."
          value={formData.description ?? ""}
          onChange={handleChange}
          maxLength={255}
          className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200"
          required
        />
      </div>

      <OrganizerInfoSection
        formData={formData}
        handleChange={handleChange}
        handleContactChange={handleContactChange}
      />

      <TournamentDetailsSection
        formData={formData}
        formats={formats}
        handleChange={handleChange}
      />

      <ScheduleSection formData={formData} handleChange={handleChange} />

      <AdditionalSettingsSection
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
      />

      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-[#142d4c] to-[#1a508b] hover:from-[#1a508b] hover:to-[#142d4c] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <Trophy className="w-5 h-5" />
          Create Tournament
        </button>
      </div>
    </form>
  );
}

export default CreateTournamentForm;
