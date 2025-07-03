import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div role="status" aria-label="Loading" className="loader">
      <svg
        className="w-20 h-20 animate-spinCustom text-transparent mb-4"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="80"
          strokeDashoffset="60"
        />
      </svg>

      <style>
        {`
        @keyframes spinCustom {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-spinCustom {
          animation: spinCustom 1.2s linear infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
