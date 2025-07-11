import {
  Home,
  Trophy,
  Users,
  Calendar,
  PlusCircle,
  Bell,
  Menu,
} from "lucide-react";
import { Logo } from "@assets/index";
import React from "react";
import { NavLink } from "react-router-dom";
import { Roles } from "@shared/constants/roles";
import Footer from "@shared/components/Footer";

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  userRole: Roles;
}

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    roles: [Roles.Organizer, Roles.General],
  },
  {
    title: "Tournaments",
    url: "/tournaments",
    icon: Trophy,
    roles: [Roles.Organizer],
  },
  {
    title: "Teams",
    url: "/teams",
    icon: Users,
    roles: [Roles.General],
  },
  {
    title: "Fixtures",
    url: "/fixtures",
    icon: Calendar,
    roles: [Roles.Organizer, Roles.General],
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    roles: [Roles.Organizer, Roles.General],
  },
];

const quickActions = [
  {
    title: "Create Tournament",
    url: "/create-tournament",
    icon: PlusCircle,
    roles: [Roles.Organizer],
  },
  {
    title: "Create Team",
    url: "/create-team",
    icon: PlusCircle,
    roles: [Roles.General],
  },
];

const Sidebar: React.FC<AppSidebarProps> = React.memo(
  ({ isOpen, onToggle, userRole }) => {
    return (
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="px-4 pt-4">
          <div className="flex justify-between items-center gap-2">
            {isOpen && (
              <header>
                <NavLink to="/" className="flex gap-2 items-center">
                  <img
                    className="w-10 h-10 rounded-2xl"
                    src={Logo}
                    alt="Logo"
                  />
                  <span className="font-bold text-lg text-gray-500">TRM</span>
                </NavLink>
              </header>
            )}
            <button
              onClick={onToggle}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-6">
            {isOpen && (
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Navigation
              </h3>
            )}
            <nav className="space-y-1">
              {menuItems
                .filter((item) => item.roles.includes(userRole))
                .map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg group text-sm font-medium ${
                        isActive
                          ? "bg-gray-100 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {isOpen && <span>{item.title}</span>}
                    {!isOpen && (
                      <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.title}
                      </div>
                    )}
                  </NavLink>
                ))}
            </nav>
          </div>

          <div className="mb-6">
            {isOpen && (
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Quick Actions
              </h3>
            )}
            <nav className="space-y-1">
              {quickActions
                .filter((action) => action.roles.includes(userRole))
                .map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.url}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg group text-sm font-medium ${
                        isActive
                          ? "bg-gray-100 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {isOpen && <span>{item.title}</span>}
                    {!isOpen && (
                      <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {item.title}
                      </div>
                    )}
                  </NavLink>
                ))}
            </nav>
          </div>
        </div>

        <Footer isOpen={isOpen} />
      </div>
    );
  }
);

export default Sidebar;
