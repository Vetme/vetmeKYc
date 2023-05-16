import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="flex gap-5">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
