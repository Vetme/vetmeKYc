import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { SidebarContext } from "../../contexts/SidebarContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { sidebarIsOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav className="container mx-auto mt-2 flex justify-between items-center mb-8 lg:mb-3 px-4 py-2 lg:border lg:border-[#5D5169] rounded-[100px] h-[72px] w-full">
      <img src="/logo.png" alt="" />
      <div className="hidden lg:block">
        <span className="uppercase">Dashboard | </span>
        <span className="text-[#8C8C8C] text-[14px]">
          Your informations are secured with us.
        </span>
      </div>

      {!sidebarIsOpen && (
        <div className="flex gap-2 items-center text-[29px] lg:hidden">
          <Link to="/dashboard/notifications">
            <IoNotificationsOutline />
          </Link>

          <GiHamburgerMenu onClick={toggleSidebar} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
