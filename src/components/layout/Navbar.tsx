import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-2 flex justify-between items-center mb-3 p-2 border border-[#5D5169] rounded-[100px] h-[72px] w-full">
      <img src="/logo.png" alt="" />
      <span className="block mr-3">Welcome to Vetme KYC</span>
    </nav>
  );
};

export default Navbar;
