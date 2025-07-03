import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import { useAuth } from "../Authentication/hooks/useAuth";
import MainLayout from "../../shared/components/Layouts/MainLayout";

function LandingPage() {
  const { user } = useAuth();
  return (
    <MainLayout>
      <header className="w-fit right-15 top-3 absolute z-50 bg-transparent">
        <div className="container mx-auto px-4 py-3 ">
          <div className="flex items-center justify-end">
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
                <>
                  <Link
                    to="/dashboard"
                    className="border border-white px-4 py-2 rounded-md hover:bg-white/10 transition"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-white text-black">
        <Hero />
      </main>
    </MainLayout>
  );
}

export default LandingPage;
