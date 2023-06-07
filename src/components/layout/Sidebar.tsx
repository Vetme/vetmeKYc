import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="hidden lg:block  bg-[#EFF1EA] border border-[#453953] rounded-[10px] h-auto min-h-[500px] w-[322px]">
      <div className="relative flex flex-col h-full justify-center items-start px-3 gap-5">
        <img src="/shape1.png" alt="" />
        <img
          src="/user.png"
          alt=""
          className="absolute top-[81px] left-[63px]"
        />
        <p className="text-[0.9em]" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
          “With issues pertaining to corruption, terrorist financing, and money
          laundering becoming so prevalent, KYC policies have now evolved into
          an important tool to combat illegal transactions.”
        </p>
        <p className="font-bold text-[#453953]">Comply Advantage</p>
        <div className="flex gap-1">
          <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
            <BsArrowLeft />
          </div>
          <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
