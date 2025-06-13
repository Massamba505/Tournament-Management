import Sidebar from "./Sidebar";
import MainLayout from "../../../components/Layouts/MainLayout";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

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
