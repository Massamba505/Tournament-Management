import { useAuth } from "../hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";

interface FooterProps {
  isOpen: boolean;
}

function Footer({ isOpen }: FooterProps) {
  const { user } = useAuth();
  return (
    <div className="absolute bottom-0 left-0 flex flex-col right-0 p-4">
      {user && (
        <div className={`flex w-full items-center ${isOpen && "pl-2"}`}>
          <ProfileDropdown />
          {!isOpen && (
            <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
              Profile
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Footer;
