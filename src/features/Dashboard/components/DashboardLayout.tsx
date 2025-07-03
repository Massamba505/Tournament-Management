import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@features/Authentication/hooks/useAuth";
import MainLayout from "@shared/components/Layouts/MainLayout";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const { user } = useAuth();
  const userRole = user?.role!;

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainLayout>
      <div className="flex h-full">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          userRole={userRole}
        />
        <main
          className={`flex-1 h-full transition-all duration-300 p-6 ${
            sidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </MainLayout>
  );
}

export default DashboardLayout;
