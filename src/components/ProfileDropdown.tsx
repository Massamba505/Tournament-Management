import { useState, useRef, useEffect } from "react";
import { LogOut, Settings, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProfileDropdown() {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const menuItems = [
    {
      label: "Profile",
      icon: <UserCircle2 />,
      action: () => navigate("/profile"),
    },
    {
      label: "Settings",
      icon: <Settings />,
      action: () => navigate("/settings"),
    },
    {
      label: "Logout",
      icon: <LogOut />,
      action: () => {
        logout();
        navigate("/");
      },
    },
  ];

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
    <div className="relative flex-shrink-0" ref={dropdownRef}>
      <button
        className="flex cursor-pointer items-center gap-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src={user?.profilePicture}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
      </button>

      {open && (
        <div className="absolute left-0 -top-35 mt-2 w-36 bg-white rounded-lg shadow-lg z-50">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-lg flex justify-between items-center hover:bg-gray-100"
            >
              {item.label}
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
