import { useState, useEffect } from "react";
import { X, Save, Upload, Users } from "lucide-react";
import type { Team, UpdateTeamRequest } from "../types/team";

interface EditTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updateData: UpdateTeamRequest) => Promise<void>;
  team: Team;
}

function EditTeamModal({ isOpen, onClose, onSave, team }: EditTeamModalProps) {
  const [formData, setFormData] = useState<UpdateTeamRequest>({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (isOpen && team) {
      setFormData({
        name: team.name,
        logoUrl: team.logoUrl,
        captainId: team.captainId
      });
    }
  }, [isOpen, team]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value === "" ? null : value
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name?.trim()) {
      newErrors.name = "Team name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Team name must be less than 100 characters";
    }
    
    if (formData.logoUrl && formData.logoUrl.trim()) {
      try {
        new URL(formData.logoUrl);
      } catch {
        newErrors.logoUrl = "Please enter a valid URL";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error("Failed to save team:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-blur flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Edit Team</h2>
          <button
            onClick={handleClose}
            disabled={loading}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
              {(formData.logoUrl || team.logoUrl) ? (
                <img
                  src={formData.logoUrl || team.logoUrl || ""}
                  alt="Team logo preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : (
                <Users className="h-10 w-10 text-gray-400" />
              )}
              <Users className="h-10 w-10 text-gray-400 hidden" />
            </div>
            <p className="text-sm text-gray-500">Team logo will update automatically when you change the URL</p>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name || ""}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter team name"
              maxLength={100}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Choose a unique name for your team (max 100 characters)
            </p>
          </div>

          <div>
            <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Team Logo URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                id="logoUrl"
                name="logoUrl"
                value={formData.logoUrl || ""}
                onChange={handleInputChange}
                className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.logoUrl ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://example.com/logo.png"
              />
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Upload size={16} />
                Upload
              </button>
            </div>
            {errors.logoUrl && (
              <p className="text-red-500 text-xs mt-1">{errors.logoUrl}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Provide a URL to your team logo or upload an image
            </p>
          </div>

          <div className="flex gap-3 pt-4t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.name?.trim()}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTeamModal;
