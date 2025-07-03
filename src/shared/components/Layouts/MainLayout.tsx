import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow h-full bg-white text-black">{children}</div>
    </div>
  );
}

export default MainLayout;
