import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";
import TextInput from "../../components/utils/TextInput";

const SearchResult = () => {
  return (
    <DashboardLayout>
      <div className="">
        <h3 className="uppercase">Tymes Investment KYC Registers</h3>
        <div
          className="bg-[#EFF1EA] grid items-center p-3 text-[14px] text-[#453953] border border-[#453953] h-[54px] rounded-xl"
          style={{ gridTemplateColumns: "15% 20% 25% 20% 20%" }}
        >
          <span>Profile</span>
          <span>Company</span>
          <span>Email</span>
          <span>Phone number</span>
          <span>Date</span>
        </div>
        <div className="w-full relative my-3 h-[40px]">
          <div
            className="absolute w-full bg-white z-10 grid items-center p-3 text-[14px] text-[#453953] border border-[#453953] h-[54px] rounded-xl"
            style={{ gridTemplateColumns: "15% 20% 25% 20% 20%" }}
          >
            <img src="/user.png" alt="" className="w-8" />
            <span>Tyme Investment</span>
            <span>jamesike@yahoo.com</span>
            <span>+1(645) 555-3423</span>
            <span>25/02/2023</span>
          </div>
          <div className="absolute top-1 w-full grid items-center p-3 text-[14px] text-[#453953] border border-[#453953] h-[54px] rounded-xl"></div>
        </div>

        <div className="w-full relative top-5 my-3 h-[40px]">
          <div
            className="absolute w-full bg-white z-10 grid items-center p-3 text-[14px] text-[#453953] border border-[#453953] h-[54px] rounded-xl"
            style={{ gridTemplateColumns: "15% 20% 25% 20% 20%" }}
          >
            <img src="/user.png" alt="" className="w-8" />
            <span>Tyme Investment</span>
            <span>jamesike@yahoo.com</span>
            <span>+1(645) 555-3423</span>
            <span>25/02/2023</span>
          </div>
          <div className="absolute top-1 w-full grid items-center p-3 text-[14px] text-[#453953] border border-[#453953] h-[54px] rounded-xl"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SearchResult;
