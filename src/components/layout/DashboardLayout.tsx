import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardLeftSidebar from "./DashboardLeftSidebar";
import DashboardRightSidebar from "./DashboardRightSidebar";
import DashboardNavbar from "./DashboardNavbar";
import "./css/style.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <DashboardNavbar />
        <div className="grid gap-5 dashboard-layout">
          <DashboardLeftSidebar />
          {children}
          <DashboardRightSidebar />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
