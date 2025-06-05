import { Link } from "react-router-dom";
// import { Logo } from "../assets";
import { useAuth } from "../hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";

function NavBar() {
  const { user } = useAuth();

  return (
    <header className="w-fit right-15 top-3 absolute z-50 bg-transparent">
      <div className="container mx-auto px-4 py-3 ">
        <div className="flex items-center justify-end">
          {/* <Link to="/" className="flex gap-2 items-center">
            <img className="w-8 h-8 rounded-2xl" src={Logo} alt="Logo" />
            <span className="font-bold text-white text-lg tracking-wide">
              Tournament Manager
            </span>
          </Link> */}

          {/* <nav className="hidden md:flex items-center gap-6 text-white font-medium">
            <Link
              to="/"
              className="hover:text-[#6bacec] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/tournaments"
              className="hover:text-[#6bacec] transition-colors duration-200"
            >
              Tournaments
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="hover:text-[#6bacec] transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}
          </nav> */}

          <div className="flex items-center gap-3 text-white font-medium ">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="border border-white px-4 py-2 rounded-md hover:bg-white/10 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#142d4c] px-4 py-2 rounded-md hover:shadow-lg transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <ProfileDropdown />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
