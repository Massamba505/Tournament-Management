import React from "react";
import NavBar from "../NavBar/NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

function MainLayout({ children, showNav = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <NavBar />}
      <div className="flex-grow min-h-screen bg-white text-black">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
