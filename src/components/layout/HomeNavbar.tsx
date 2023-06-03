import React, { useEffect, useState } from "react";
import { LogoSVG } from "../icons";
import { Item, NavMiddle, NavRight, Nav, Bar } from "./styles";
import { Flex } from "..";
import Button from "../utils/Button";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  let prevScroll = 0;
  let header: any;

  useEffect(() => {
    header = document.getElementById("nav");
  }, []);

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
              <Item className="active" value="Solutions">
                <span></span>
                Solutions
              </Item>
              <Item value="Developers">
                <span></span>
                Developers
              </Item>
              <Item value="Kyc">
                <span></span>Kyc
              </Item>
              <Item value="Price">
                <span></span>Pricing
              </Item>
              <Item value="Support">
                <span></span>Support
              </Item>
            </NavMiddle>
            <NavRight>
              <Button text="Sign up" to="/register" />
              <Button classNames="dark" text="Login" />
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
    </Nav>
  );
};

export default Navbar;
