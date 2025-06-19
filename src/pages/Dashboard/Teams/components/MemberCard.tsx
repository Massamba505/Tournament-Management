import React, { useState } from "react";
import { User, MoreVertical, UserMinus, Crown, Shield } from "lucide-react";
import type { Member } from "../../../../types/tournament";

interface MemberCardProps {
  member: Member;
  role?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, role = "Player" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const initials =
    member.name.charAt(0) + (member.surname ? member.surname.charAt(0) : "");

  const handleMakeCaptain = () => {
    console.log("Making captain:", member.name);
  };

  const handleMakeManager = () => {
    console.log("Making manager:", member.name);
  };

  const handleRemoveMember = () => {
    console.log("Removing member:", member.name);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {member.profilePicture ? (
            <img
              src={member.profilePicture}
              alt={`${member.name} ${member.surname || ""}`}
              className="h-full w-full object-cover rounded-full"
            />
          ) : initials ? (
            <span className="text-gray-600 font-medium">{initials}</span>
          ) : (
            <User className="h-6 w-6 text-gray-400" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900">
            {member.name} {member.surname}
          </h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-4 top-16 bg-white border border-gray-200 rounded shadow-md w-48 z-10">
          <button
            onClick={() => {
              handleMakeCaptain();
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            <Crown className="h-4 w-4 mr-2" />
            Make Captain
          </button>
          <button
            onClick={() => {
              handleMakeManager();
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
          >
            <Shield className="h-4 w-4 mr-2" />
            Make Manager
          </button>
          <hr className="my-1 border-gray-200" />
          <button
            onClick={() => {
              handleRemoveMember();
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center px-4 py-2 hover:bg-red-100 text-sm text-red-600"
          >
            <UserMinus className="h-4 w-4 mr-2" />
            Remove from Team
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
