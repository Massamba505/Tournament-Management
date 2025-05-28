import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <MainLayout>
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 pt-15 p-2 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </MainLayout>
  );
}

export default DashboardLayout;
