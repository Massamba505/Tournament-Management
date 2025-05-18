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
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
