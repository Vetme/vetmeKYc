import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";

const Notifications = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default Notifications;
