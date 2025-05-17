import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

function MainLayout({ children, showFooter = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
