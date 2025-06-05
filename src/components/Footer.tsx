import { Settings } from "lucide-react";

interface FooterProps {
  isOpen: boolean;
}

function Footer({ isOpen }: FooterProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
      <a
        href="/settings"
        className={`flex ${
          !isOpen ? " flex justify-center items-center" : ""
        } items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group`}
      >
        <Settings className="h-5 w-5 flex-shrink-0 flex justify-between items-center" />
        {isOpen && <span className="text-sm font-medium">Settings</span>}
        {!isOpen && (
          <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            Settings
          </div>
        )}
      </a>
    </div>
  );
}

export default Footer;
