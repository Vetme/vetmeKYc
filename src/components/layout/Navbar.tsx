import React from "react";
import { LogoSVG, LogoutIcon, User } from "../icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthProvider";
import { Flex } from "..";

const Navbar = () => {
  const { loggedIn, clear } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    clear();
    navigate("/login");
  };

  return (
    <nav className="p-4 mx-auto mt-2 flex justify-between items-center mb-3 border lg:border-[#5D5169] rounded-[100px] h-[72px] w-full">
      <Link to={"/"}>
        <LogoSVG />
      </Link>
      {loggedIn && (
        <Flex align="center" gap={20}>
          <div
            onClick={logout}
            title="Logout"
            className="cursor-pointer bg-[#eff1ea] h-[40px] w-[40px] rounded-full flex items-center justify-center "
          >
            <LogoutIcon />
          </div>

          <div
            onClick={() => navigate("/process")}
            title="Dashboard"
            className="cursor-pointer bg-[#befecd] h-[40px] w-[40px] rounded-full flex items-center justify-center "
          >
            <User />
          </div>
        </Flex>
      )}
    </nav>
  );
};

export default Navbar;
