import React, { useState } from "react";
import { Trophy, Calendar } from "lucide-react";

function Tournaments() {
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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tournament data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="text-[#142d4c] w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-900">
          Create Your Tournament
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
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

        <div className="space-y-2">
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

        <div className="space-y-2">
          <label htmlFor="type" className="text-base font-medium text-gray-900">
            Tournament Type
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="h-12 text-base w-full border border-gray-300 rounded px-3"
          >
            <option value="">Select tournament type</option>
            <option value="7aside">5-aside</option>
            <option value="7aside">6-aside</option>
            <option value="7aside">7-aside</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
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

          <div className="space-y-2">
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
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
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

          <div className="space-y-2">
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

        <div className="space-y-2">
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
              If enabled, you'll get a shareable link that teams can use to join
              your tournament.
            </p>
          </div>
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

export default Tournaments;
