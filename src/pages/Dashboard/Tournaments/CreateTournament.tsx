import React, { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import type { TournamentFormat, CreateTournament } from "../../../types";
import {
  createTournament,
  getTournamentFormats,
} from "../../../service/tournaments.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateTournaments() {
  const { user, loading: isLoading } = useAuth();
  const [formats, setFormats] = useState<TournamentFormat[]>([]);
  const navigation = useNavigate();

  const [formData, setFormData] = useState<CreateTournament>({
    name: null,
    organizerId: user?.id ?? null,
    description: null,
    formatId: 0,
    numberOfTeams: 2,
    maxPlayersPerTeam: 2,
    startDate: null,
    endDate: null,
    location: null,
    allowJoinViaLink: false,
    bannerImage: null,
    contactEmail: null,
    contactPhone: null,
    entryFee: null,
    matchDuration: 0,
    registrationDeadline: null,
    isPublic: true,
  });

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        const data = await getTournamentFormats();
        setFormats(data);
      } catch (err: any) {
        toast.error(err.message);
        console.error(err);
      }
    };

    fetchFormats();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createTournament({
        ...formData,
        organizerId: user?.id || "",
      });
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

  if (isLoading)
    return <div className="text-center py-10">Loading formats...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-center gap-3 mb-6">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Create Your Tournament
        </h1>
      </div>

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

        <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Organizer Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="bannerImage"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
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
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Contact (Email or Phone)
              </label>
              <input
                id="contact"
                type="text"
                placeholder="info@league.com or +27123456789"
                value={(formData.contactEmail || formData.contactPhone) ?? ""}
                onChange={handleContactChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
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
            className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-lg 
               transition-all duration-200"
            required
          />
        </div>

        <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Tournament Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="formatId"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Tournament Format
              </label>
              <select
                id="formatId"
                name="formatId"
                value={formData.formatId ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select format</option>
                {formats.map((format) => (
                  <option key={format.id} value={format.id}>
                    {format.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="numberOfTeams"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Number of Teams
              </label>
              <input
                id="numberOfTeams"
                name="numberOfTeams"
                type="number"
                min="2"
                max="128"
                value={formData.numberOfTeams ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="maxPlayersPerTeam"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Max Players per Team
              </label>
              <input
                id="maxPlayersPerTeam"
                name="maxPlayersPerTeam"
                type="number"
                min="1"
                max="25"
                value={formData.maxPlayersPerTeam ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City Sports Complex"
                value={formData.location ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Schedule
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label
                htmlFor="registrationDeadline"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
              >
                Registration Deadline
              </label>
              <input
                id="registrationDeadline"
                name="registrationDeadline"
                type="date"
                value={formData.registrationDeadline ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
        </div>

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
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
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
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
              />
            </div>

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
                  setFormData((prev) => ({
                    ...prev,
                    isPublic: e.target.value === "public",
                  }))
                }
                className="w-full px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg"
              >
                <option value="public">Public - Visible to everyone</option>
                <option value="private">Private - Only via invite</option>
              </select>
            </div>
          </div>
        </div>

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
    </div>
  );
}

export default CreateTournaments;
