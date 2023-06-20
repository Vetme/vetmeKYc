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
      <div className="container mx-auto h-full overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="flex-1">
            <Navbar />
            <div className="flex mb-8 ">
              <Sidebar />
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
