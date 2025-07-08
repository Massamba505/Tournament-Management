import React from "react";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
  icon?: React.ReactNode;
}

const SectionCard = ({ title, children, actionButton, icon }: SectionCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-2">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        </div>
        {actionButton && <div>{actionButton}</div>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default SectionCard;
