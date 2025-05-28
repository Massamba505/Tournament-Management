import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tournaments", path: "/dashboard/tournaments" },
  { name: "Teams", path: "/dashboard/teams" },
  { name: "Fixtures", path: "/dashboard/fixtures" },
  { name: "Statistics", path: "/dashboard/statistics" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-[#142d4c] text-white h-screen p-5 pt-16">
      <nav className="flex flex-col gap-4">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `py-2 px-4 rounded-md text-sm font-medium ${
                isActive ? "bg-white text-[#142d4c]" : "hover:bg-[#1f3c5e]"
              }`
            }
            end={path === "/dashboard"}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
