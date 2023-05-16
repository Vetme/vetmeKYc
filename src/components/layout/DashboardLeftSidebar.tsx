import React from "react";
import { Link } from "react-router-dom";
import { BsBuildingFill, BsGearFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

const DashboardLeftSidebar = () => {
  return (
    <div className="bg-[#170728] border border-[#170728] text-white rounded-[12px] p-8 min-h-[500px] max-w-[312px]">
      <div className="relative flex flex-col h-[500px] justify-between px-3 gap-5">
        <div className="flex flex-col items-center gap-5">
          <Link
            to=""
            className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
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
          </Link>
          <Link
            to=""
            className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
          >
            <BsBuildingFill />
            <span>Companies</span>
          </Link>
          <Link
            to=""
            className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
          >
            <BiTransferAlt className="transform rotate-90" />
            <span>Transfer KYC </span>
          </Link>
          <Link
            to=""
            className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
          >
            <BsGearFill />
            <span>Settings</span>
          </Link>
        </div>

        <Link
          to=""
          className="flex items-center justify-center gap-3 uppercase border border-[#EFF1EA] rounded-[100px] w-11/12 h-[42px]"
        >
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardLeftSidebar;
