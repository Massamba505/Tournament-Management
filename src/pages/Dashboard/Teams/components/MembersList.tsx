import React from "react";
import { Users } from "lucide-react";
import type { Member } from "../../../../types/tournament";
import MemberCard from "./MemberCard";

interface MembersListProps {
  members: Member[];
  loading?: boolean;
}

const MembersList: React.FC<MembersListProps> = ({
  members,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg h-20 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No team members
        </h3>
        <p className="text-gray-500">This team doesn't have any members yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Team Members ({members.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} role="Player" />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
