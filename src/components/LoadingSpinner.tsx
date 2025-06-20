import { Loader2 } from "lucide-react";
import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 6,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className={`relative ${color} animate-spin`}>
        <Loader2 size={size * 8} className="animate-spin-slow" />
      </div>
      <span className={`${color} text-xl`}>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
