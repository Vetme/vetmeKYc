import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBuildingFill, BsGearFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SidebarContext } from "../../contexts/SidebarContext";

const DashboardLeftSidebar = () => {
  const { sidebarIsOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      className={`z-30   ${
        sidebarIsOpen
          ? "fixed overflow-auto inset-0 bg-gray-900 bg-opacity-50"
          : "hidden lg:block"
      }`}
    >
      <AiOutlineCloseCircle
        className="fixed top-3 right-3 z-50 text-[#170728] text-[25px] lg:hidden"
        onClick={toggleSidebar}
      />
      <div
        className="fixed top-0 lg:relative bg-[#170728] border border-[#170728] text-white lg:rounded-[12px]
       p-3 pt-12 lg:pt-5 lg:p-8 h-screen lg:min-h-[500px] w-[70%] lg:w-full lg:max-w-[312px]"
      >
        <div className="relative flex flex-col h-[500px] justify-between px-3 gap-5">
          <div className="flex flex-col gap-5">
            <NavLink
              to="/dashboard"
              className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="humbleicons hi-dashboard h-4"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm10-3a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span>Dashboard</span>
            </NavLink>
            <Link
              to="/dashboard/companies"
              className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
              onClick={toggleSidebar}
            >
              <BsBuildingFill />
              <span>Companies</span>
            </Link>
            <Link
              to="/dashboard/transfer-kyc"
              className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
              onClick={toggleSidebar}
            >
              <BiTransferAlt className="transform rotate-90" />
              <span>Transfer KYC </span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
              onClick={toggleSidebar}
            >
              <BsGearFill />
              <span>Settings</span>
            </Link>
          </div>

          <Link
            to=""
            className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
          >
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeftSidebar;
