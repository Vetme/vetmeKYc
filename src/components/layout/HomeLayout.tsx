import React, { ReactNode } from "react";
import Navbar from "./HomeNavbar";
import Footer from "./HomeFooter";
import { HomeWrapper } from "./styles";

interface HomeProps {
  children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <>
      <HomeWrapper className=" mx-auto">
        <Navbar />
        <div className=" gap-5">{children}</div>
        <Footer />
      </HomeWrapper>
    </>
  );
};

export default Home;
