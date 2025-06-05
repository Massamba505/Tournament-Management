import { useState, useRef, useEffect } from "react";
import { LogOut, UserCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function ProfileDropdown() {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex cursor-pointer items-center gap-2 "
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src={`https://eu.ui-avatars.com/api/?name=${user?.name}+${user?.surname}&size=250`}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg z-50">
          <Link
            to="/profile"
            className="px-4 py-2 text-sm text-gray-700 flex rounded-lg justify-between items-center hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Profile
            <UserCircle2 />
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg flex justify-between items-center hover:bg-gray-100"
          >
            Logout
            <LogOut />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
