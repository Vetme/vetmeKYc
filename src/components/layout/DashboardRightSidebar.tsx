import React from "react";
import { Link } from "react-router-dom";
import { BsBuildingFill, BsGearFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import LayeredBtn from "../utils/LayeredBtn";

const DashboardLeftSidebar = () => {
  return (
    <div className="bg-[#EFF1EA] border border-[#453953] rounded-[10px] p-6 min-h-[1000px] max-w-[322px]">
      <div className="relative  h-[500px] text-center text-[#170728]">
        <img
          src="/shape1.png"
          alt=""
          className="absolute w-[140px] top-0 left-[60px]"
        />
        <img
          src="/user.png"
          alt=""
          className="absolute w-[92px] top-[45px] left-[105px]"
        />
        <div className="relative top-[180px] flex flex-col justify-between  px-3 gap-4">
          <span className="text-[14px] uppercase">Welcome back</span>
          <span className="text-[28px] uppercase">Jame Ike</span>
          <span>Crypto enthusiast</span>
          <div className="border border-[#170728] flex gap-2 justify-center items-center h-[39px] p-2 mb-4 text-[11px] uppercase w-[194px] rounded-full">
            <img src="edit.png" alt="" className="w-5" />
            <span className="text-[12px]">Edit Profile</span>
          </div>

          <div className="flex gap-2 items-center">
            <img src="notification.png" alt="" className="w-3" />
            <span>Notifications</span>
          </div>
          <span className="text-left text-[11px]">Today 2, 2023</span>
          <div>
            <LayeredBtn
              bgColor="#BEFECD"
              width="100%"
              height="79px"
              parentClassNames="mb-4"
            >
              <div className="p-2 flex items-center gap-2">
                <img src="user.png" alt="" className="h-[42px] rounded-full" />
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-left capitalize  text-[#170728] font-bold">
                    James completed his KYC
                  </span>
                  <span className="text-[14px] capitalize  text-[#170728]">
                    Approved
                  </span>
                </div>
              </div>
            </LayeredBtn>

            <LayeredBtn
              bgColor="#BEFECD"
              width="100%"
              height="79px"
              parentClassNames="mb-4"
            >
              <div className="p-2 flex items-center gap-2">
                <img src="user.png" alt="" className="h-[42px] rounded-full" />
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-left capitalize  text-[#170728] font-bold">
                    James completed his KYC
                  </span>
                  <span className="text-[14px] capitalize  text-[#170728]">
                    Approved
                  </span>
                </div>
              </div>
            </LayeredBtn>
          </div>

          <span className="text-left text-[11px]">Yesterday 1, 2023</span>
          <div>
            <LayeredBtn
              bgColor="#BEFECD"
              width="100%"
              height="79px"
              parentClassNames="mb-4"
            >
              <div className="p-2 flex items-center gap-2">
                <img src="user.png" alt="" className="h-[42px] rounded-full" />
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-left capitalize  text-[#170728] font-bold">
                    James completed his KYC
                  </span>
                  <span className="text-[14px] capitalize  text-[#170728]">
                    Approved
                  </span>
                </div>
              </div>
            </LayeredBtn>

            <LayeredBtn
              bgColor="#BEFECD"
              width="100%"
              height="79px"
              parentClassNames="mb-4"
            >
              <div className="p-2 flex items-center gap-2">
                <img src="user.png" alt="" className="h-[42px] rounded-full" />
                <div className="flex flex-col items-start">
                  <span className="text-[15px] text-left capitalize  text-[#170728] font-bold">
                    James completed his KYC
                  </span>
                  <span className="text-[14px] capitalize  text-[#170728]">
                    Approved
                  </span>
                </div>
              </div>
            </LayeredBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeftSidebar;
