import React from "react";
import Layout from "../../components/layout/Layout";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { BsArrowRight } from "react-icons/bs";
import { TbCloudDownload } from "react-icons/tb";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="grid dashboard-layout_ gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border border-[#170728] p-6 rounded-[12px] min-h-[240px]">
            <img src="graph.png" alt="" />
            <span className="text-[35px]">6,523</span>
            <span className="uppercase text-[12px]">Total Users</span>
          </div>
          <div className="flex flex-col items-center p-6 gap-2 uppercase text-[#170728] border border-[#170728] rounded-[12px] min-h-[240px]">
            <div className="flex items-center justify-between w-full">
              <span>KYC Companies list</span>
              <BsArrowRight />
            </div>
            <img src="building.png" alt="" />
            <span className="text-[78px]">1,230</span>
            <span className="uppercase">+5% Registered Companies</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#170728] flex flex-col items-center gap-5 text-white p-6 rounded-[12px] min-h-[240px]">
            <img src="ribbon.png" alt="" className="w-9" />
            <span className="text-[20px]">CERTIFICATE OF KYC</span>
            <span className="text-[14px]">
              This certificate is proudly presented to
            </span>
            <span className="text-[20px] text-[#FFCC91]">
              James Ike Gregory
            </span>
            <p className="text-[14px">
              We certify that this user has successfully generated a certificate
              for KYC. If you like, you can generate your own certificates using
              Vetme KYC.
            </p>
            <div className="border border-white flex gap-2 items-center h-[39px] p-2 text-[11px] uppercase rounded-full">
              <TbCloudDownload />
              <span>Click here to download</span>
            </div>
          </div>

          <div className="border border-[#170728] text-[#170728] flex flex-col gap-4 justify-between p-6 rounded-[12px] min-h-[140px]">
            <div className="flex justify-between w-full">
              <img src="message.png" alt="" className="h-5" />
              <span className="text-[11px]">Feb 20, 5pm</span>
            </div>
            <p className="text-[14px]">
              You have 5 insights on KYC verification flow and active 10 cases
            </p>
            <span className="text-[11px]">Updates</span>
          </div>
          <div className="bg-[#FBF2FF] border border-[#170728] text-[#170728] flex flex-col gap-4 justify-between p-6 rounded-[12px] min-h-[140px]">
            <div className="flex justify-between w-full">
              <img src="message.png" alt="" className="h-5" />
              <span className="text-[11px]">Feb 20, 5pm</span>
            </div>
            <p className="text-[14px]">
              You have 5 insights on KYC verification flow and active 10 cases
            </p>
            <span className="text-[11px]">Updates</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
