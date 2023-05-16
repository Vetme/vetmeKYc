import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-2 flex justify-between items-center mb-3 px-4 py-2 border border-[#5D5169] rounded-[100px] h-[72px] w-full">
      <img src="/logo.png" alt="" />
      <div>
        <span className="uppercase">Dashboard | </span>
        <span className="text-[#8C8C8C] text-[14px]">
          Your informations are secured with us.
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
