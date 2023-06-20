import React, { useEffect, useState } from "react";
import { LogoSVG, LogoutIcon, User } from "../icons";
import { motion, AnimatePresence } from "framer-motion";
import {
  Item,
  NavMiddle,
  NavRight,
  Nav,
  Bar,
  MobileMenu,
  MItem,
} from "./styles";
import { Flex } from "..";
import Button from "../utils/Button";
import { useLocation, useNavigate } from "react-router-dom";
import PopUp from "../utils/modal/Popup";
import { useAuth } from "../../hooks/useAuthProvider";

enum NavMenu {
  SOLUTIONS = "Solutions",
  KYC = "kyc",
  DEVELOPER = "Developer",
  PRICING = "Pricing",
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [active, setActive] = useState<NavMenu>(NavMenu.SOLUTIONS);
  const location = useLocation();

  const { loggedIn, clear } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    clear();
    navigate("/login");
  };

  let prevScroll = 0;
  let header: any;

  useEffect(() => {
    header = document.getElementById("nav");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const checkScroll = () => {
    let curScroll = window.pageYOffset;

    if (curScroll <= 0) {
      header?.classList.remove("scroll-up");
    }

    if (curScroll > prevScroll && !header?.classList.contains("scroll-down")) {
      header?.classList.remove("scroll-up");
      header?.classList.add("scroll-down");
    }

    if (curScroll < prevScroll && header?.classList.contains("scroll-down")) {
      header?.classList.remove("scroll-down");
      header?.classList.add("scroll-up");
    }
    prevScroll = curScroll;
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <Nav id="nav">
      <div className="container">
        <div className="wrapper">
          <Flex justify="space-between" className="w-full">
            <div className="flex items-center">
              <LogoSVG />
            </div>
            <NavMiddle className="pricing">
              <Item as="a" href="https://vetmeblock.com" value="Solutions">
                <span></span>
                Main
              </Item>
              <Item
                as="a"
                href="#solutions"
                className={active == NavMenu.SOLUTIONS ? "active" : ""}
                value="Solutions"
                onClick={() => setActive(NavMenu.SOLUTIONS)}
              >
                <span></span>
                Solutions
              </Item>
              <Item
                as="a"
                href="#developers"
                className={active == NavMenu.DEVELOPER ? "active" : ""}
                onClick={() => setActive(NavMenu.DEVELOPER)}
                value="Developers"
              >
                <span></span>
                Developers
              </Item>
              <Item
                as="a"
                href="#kyc"
                className={active == NavMenu.KYC ? "active" : ""}
                value="Kyc"
                onClick={() => setActive(NavMenu.KYC)}
              >
                <span></span>Kyc
              </Item>
              <Item
                as="a"
                href="#pricing"
                className={active == NavMenu.PRICING ? "active" : ""}
                onClick={() => setActive(NavMenu.PRICING)}
                value="Price"
              >
                <span></span>Pricing
              </Item>
              <Item as="a" href="#support" value="Support">
                <span></span>Support
              </Item>
            </NavMiddle>
            <NavRight>
              {loggedIn ? (
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
              ) : (
                <>
                  {" "}
                  <Button onClick={() => setOpenInfo(true)} text="Sign up" />
                  <Button
                    onClick={() => setOpenInfo(true)}
                    classNames="dark"
                    text="Login"
                  />
                </>
              )}
            </NavRight>

            <Bar
              className={open ? "opened" : ""}
              onClick={() => setOpen(!open)}
            >
              <div></div>
            </Bar>
          </Flex>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <MobileMenu
            key="menu"
            as={motion.div}
            className="block sm:hidden"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MItem as={motion.a} variants={item} href="https://vetmeblock.com">
              <span></span>
              Main
            </MItem>
            <MItem
              as={motion.a}
              href="#solutions"
              className={active == NavMenu.SOLUTIONS ? "active" : ""}
              onClick={() => setActive(NavMenu.SOLUTIONS)}
              variants={item}
            >
              <span></span>
              Solutions
            </MItem>
            <MItem
              as={motion.a}
              className={active == NavMenu.DEVELOPER ? "active" : ""}
              onClick={() => setActive(NavMenu.DEVELOPER)}
              variants={item}
            >
              <span></span>
              Developers
            </MItem>
            <MItem
              href="#kyc"
              as={motion.a}
              className={active == NavMenu.KYC ? "active" : ""}
              onClick={() => setActive(NavMenu.KYC)}
              variants={item}
            >
              <span></span>Kyc
            </MItem>
            <MItem
              href="#pricing"
              className={active == NavMenu.PRICING ? "active" : ""}
              onClick={() => setActive(NavMenu.PRICING)}
              as={motion.a}
              variants={item}
            >
              <span></span>Pricing
            </MItem>
            <MItem as={motion.div} variants={item}>
              <span></span>Support
            </MItem>
          </MobileMenu>
        )}
      </AnimatePresence>

      <PopUp open={openInfo} close={() => setOpenInfo(false)} />
    </Nav>
  );
};

export default Navbar;
