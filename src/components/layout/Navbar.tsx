import React from "react";
import { LogoSVG } from "../icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 mx-auto mt-2 flex justify-between items-center mb-3 border lg:border-[#5D5169] rounded-[100px] h-[72px] w-full">
      <Link to={"/"}>
        <LogoSVG />
      </Link>
      <span className="sm:block hidden">Welcome to Vetme KYC</span>
    </nav>
  );
};

export default Navbar;
