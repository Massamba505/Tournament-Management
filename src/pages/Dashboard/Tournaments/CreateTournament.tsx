import React, { useState } from "react";
import { Trophy, Calendar } from "lucide-react";

function CreateTournaments() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    format: "",
    numberOfTeams: "",
    startDate: "",
    endDate: "",
    location: "",
    allowJoinViaLink: false,
    organizer: "",
    bannerImage: "",
    prize: "",
    rules: "",
    contact: "",
    entryFee: "",
    matchDuration: "",
    registrationDeadline: "",
    visibility: "public",
    maxPlayers: "",
    ageGroup: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tournament data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Your Tournament
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Tournament Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Summer League 2023"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="organizer"
            className="text-base font-medium text-gray-900"
          >
            Organizer / Organization
          </label>
          <input
            id="organizer"
            type="text"
            placeholder="e.g. Soccer United League"
            value={formData.organizer}
            onChange={(e) =>
              setFormData({ ...formData, organizer: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="bannerImage"
            className="text-base font-medium text-gray-900"
          >
            Banner Image URL
          </label>
          <input
            id="bannerImage"
            type="text"
            placeholder="e.g. https://example.com/banner.jpg"
            value={formData.bannerImage}
            onChange={(e) =>
              setFormData({ ...formData, bannerImage: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-base font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Tell teams what your tournament is about..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="min-h-[120px] text-base w-full border border-gray-300 rounded px-3 py-2 resize-none"
          />
        </div>

        <div className="w-full flex justify-between flex-wrap sm:flex-row flex-col gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="type"
              className="text-base font-medium text-gray-900"
            >
              Tournament Type
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            >
              <option value="">Select tournament type</option>
              <option value="5aside">5-aside</option>
              <option value="6aside">6-aside</option>
              <option value="7aside">7-aside</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="format"
              className="text-base font-medium text-gray-900"
            >
              Tournament Format
            </label>
            <select
              id="format"
              value={formData.format}
              onChange={(e) =>
                setFormData({ ...formData, format: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            >
              <option value="">Select format</option>
              <option value="single-elimination">Single Elimination</option>
              <option value="double-elimination">Double Elimination</option>
              <option value="round-robin">Round Robin</option>
            </select>
          </div>
        </div>

        <div className="w-full flex justify-between flex-wrap sm:flex-row flex-col gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="numberOfTeams"
              className="text-base font-medium text-gray-900"
            >
              Number of Teams
            </label>
            <select
              id="numberOfTeams"
              value={formData.numberOfTeams}
              onChange={(e) =>
                setFormData({ ...formData, numberOfTeams: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            >
              <option value="">Select number</option>
              <option value="4">4 Teams</option>
              <option value="8">8 Teams</option>
              <option value="16">16 Teams</option>
              <option value="32">32 Teams</option>
              <option value="64">64 Teams</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="maxPlayers"
              className="text-base font-medium text-gray-900"
            >
              Max Players per Team
            </label>
            <input
              id="maxPlayers"
              type="number"
              placeholder="e.g. 10"
              value={formData.maxPlayers}
              onChange={(e) =>
                setFormData({ ...formData, maxPlayers: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            />
          </div>
        </div>

        <div className="w-full flex justify-between flex-wrap sm:flex-row flex-col gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="startDate"
              className="text-base font-medium text-gray-900"
            >
              Start Date
            </label>
            <div className="relative">
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="h-12 text-base pr-10 w-full border border-gray-300 rounded px-3"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="endDate"
              className="text-base font-medium text-gray-900"
            >
              End Date
            </label>
            <div className="relative">
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="h-12 text-base pr-10 w-full border border-gray-300 rounded px-3"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between flex-wrap sm:flex-row flex-col gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="registrationDeadline"
              className="text-base font-medium text-gray-900"
            >
              Registration Deadline
            </label>
            <input
              id="registrationDeadline"
              type="date"
              value={formData.registrationDeadline}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  registrationDeadline: e.target.value,
                })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="matchDuration"
              className="text-base font-medium text-gray-900"
            >
              Match Duration (minutes)
            </label>
            <input
              id="matchDuration"
              type="number"
              placeholder="e.g. 30"
              value={formData.matchDuration}
              onChange={(e) =>
                setFormData({ ...formData, matchDuration: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="text-base font-medium text-gray-900"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. City Sports Complex"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="w-full flex justify-between flex-wrap sm:flex-row flex-col gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="ageGroup"
              className="text-base font-medium text-gray-900"
            >
              Age Group
            </label>
            <input
              id="ageGroup"
              type="text"
              placeholder="e.g. U18, Open"
              value={formData.ageGroup}
              onChange={(e) =>
                setFormData({ ...formData, ageGroup: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="entryFee"
              className="text-base font-medium text-gray-900"
            >
              Entry Fee
            </label>
            <input
              id="entryFee"
              type="number"
              placeholder="e.g. 200"
              value={formData.entryFee}
              onChange={(e) =>
                setFormData({ ...formData, entryFee: e.target.value })
              }
              className="h-12 text-base w-full border border-gray-300 rounded px-3"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="prize"
            className="text-base font-medium text-gray-900"
          >
            Prize Information
          </label>
          <input
            id="prize"
            type="text"
            placeholder="e.g. Trophy + R1000"
            value={formData.prize}
            onChange={(e) =>
              setFormData({ ...formData, prize: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="rules"
            className="text-base font-medium text-gray-900"
          >
            Rules & Guidelines
          </label>
          <textarea
            id="rules"
            placeholder="Add key rules or player eligibility requirements..."
            value={formData.rules}
            onChange={(e) =>
              setFormData({ ...formData, rules: e.target.value })
            }
            className="min-h-[120px] text-base w-full border border-gray-300 rounded px-3 py-2 resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact"
            className="text-base font-medium text-gray-900"
          >
            Contact Email / Phone
          </label>
          <input
            id="contact"
            type="text"
            placeholder="e.g. info@soccerleague.com or +27123456789"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="allowJoinViaLink"
            checked={formData.allowJoinViaLink}
            onChange={(e) =>
              setFormData({ ...formData, allowJoinViaLink: e.target.checked })
            }
            className="mt-1 w-4 h-4 text-[#142d4c] border-gray-300 rounded"
          />
          <div>
            <label
              htmlFor="allowJoinViaLink"
              className="text-base font-medium text-gray-900 cursor-pointer"
            >
              Allow teams to join via link
            </label>
            <p className="text-sm text-gray-500 mt-1">
              You'll get a shareable link that teams can use to join your
              tournament.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="visibility"
            className="text-base font-medium text-gray-900"
          >
            Visibility
          </label>
          <select
            id="visibility"
            value={formData.visibility}
            onChange={(e) =>
              setFormData({ ...formData, visibility: e.target.value })
            }
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          >
            <option value="public">Public - visible to everyone</option>
            <option value="private">
              Private - visible only via invite link
            </option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full h-14 bg-[#142d4c] hover:bg-[#142d4c]/90 text-white text-lg font-medium rounded-lg flex items-center justify-center gap-2"
          >
            Create Tournament
            <Trophy className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTournaments;
