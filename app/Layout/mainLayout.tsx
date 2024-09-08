import React from "react";
import Navbar from "../Components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Navbar />
      <main className="pt-16 p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
