import { ShieldCheck, Users } from "lucide-react";
import type { Roles } from "../../../types";

interface Props {
  selectedRole: Roles;
  setSelectedRole: (roleId: Roles) => void;
  onSubmit: () => void;
  loading: boolean;
}

const RegisterStepTwo: React.FC<Props> = ({
  selectedRole,
  setSelectedRole,
  onSubmit,
  loading,
}) => {
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Choose Your Role</h2>
        <p className="text-sm text-gray-500 mt-1">
          Select the option that best describes how you’ll use the platform.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <RoleCard
          icon={<ShieldCheck className="w-6 h-6 text-[#142d4c]" />}
          title="Tournament Organizer"
          description="Create, manage, and host tournaments."
          selected={selectedRole === 2}
          onClick={() => setSelectedRole(2)}
        />
        <RoleCard
          icon={<Users className="w-6 h-6 text-[#142d4c]" />}
          title="Member"
          description="Join or create teams and enter tournaments."
          selected={selectedRole === 1}
          onClick={() => setSelectedRole(1)}
        />

        <button
          onClick={onSubmit}
          disabled={loading}
          className="w-full mt-4 bg-[#142d4c] hover:bg-[#1f3c5e] text-white font-semibold py-2.5 rounded-md transition disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default RegisterStepTwo;

function RoleCard({
  icon,
  title,
  description,
  selected,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-5 border rounded-lg transition shadow-sm ${
        selected ? "border-[#142d4c] bg-[#f0f4f8]" : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h4 className="text-md font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
