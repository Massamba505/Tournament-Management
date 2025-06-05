import Sidebar from "./Sidebar";
import MainLayout from "../../../components/Layouts/MainLayout";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <MainLayout>
      <div className="flex h-full">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <main
          className={`flex-1 min-h-screen transition-all duration-300 p-6 ${
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
