import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Teams", path: "/teams" },
  { name: "Fixtures", path: "/fixtures" },
  { name: "Statistics", path: "/statistics" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-[#142d4c] text-white h-screen pt-7 p-5">
      <header>
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-10 h-10 border-2 rounded-2xl"
            src={Logo}
            alt="Logo"
          />
          <span className="font-bold text-white text-lg tracking-wide">
            TRM
          </span>
        </Link>
      </header>
      <nav className="flex flex-col mt-7 gap-4">
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
