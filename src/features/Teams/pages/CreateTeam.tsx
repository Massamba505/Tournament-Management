import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Upload } from "lucide-react";
import { createTeam } from "../services/teams.service";
import type { CreateTeamRequest } from "../types/team";
import toast from "react-hot-toast";

function CreateTeam() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CreateTeamRequest>({
    name: "",
    logoUrl: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Team name is required");
      return;
    }

    setLoading(true);
    try {
      await createTeam(formData);
      toast.success("Team created successfully!");
      navigate("/teams");
    } catch (error: any) {
      toast.error(error.message || "Failed to create team");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
        <div className="flex justify-between items-center mb-6">
            <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Team</h1>
            <p className="text-gray-600 mt-1">Build your team and start competing in tournaments</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {formData.logoUrl ? (
                        <img
                        src={formData.logoUrl}
                        alt="Team logo"
                        className="w-full h-full object-cover"
                        />
                    ) : (
                        <Users className="h-10 w-10 text-gray-400" />
                    )}
                    </div>
                    <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Team Logo (Optional)
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                        type="url"
                        name="logoUrl"
                        value={formData.logoUrl || ""}
                        onChange={handleInputChange}
                        placeholder="https://example.com/logo.png"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                        <Upload size={16} />
                        Upload
                        </button>
                    </div>
                    <p className="text-xs text-gray-500">
                        Provide a URL to your team logo or upload an image
                    </p>
                    </div>
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Name *
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your team name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    maxLength={100}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                    Choose a unique name for your team (max 100 characters)
                    </p>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    disabled={loading || !formData.name.trim()}
                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                    {loading ? "Creating..." : "Create Team"}
                    </button>
                </div>
            </form>
        </div>
    </>
  );
}

export default CreateTeam;
