import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
  showNav?: boolean;
}

function MainLayout({
  children,
  showFooter = true,
  showNav = true,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <NavBar />}
      <div className="flex-grow min-h-screen bg-white text-black">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
