import React from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import LayeredBtn from "../components/utils/LayeredBtn";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Link } from "react-router-dom";

const Home = () => (
  <Layout>
    <div className="flex flex-col items-center w-full gap-16 pt-[78px] lg:pt-[130px]">
      <div className="flex  flex-col lg:flex-row gap-16 lg:gap-8">
        <div
          className="border border-[#2E203E] flex justify-center items-end rounded-[12px] w-[290px] h-[219px]"
          style={{
            backgroundImage: "url('shape2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#F2FFF5",
          }}
        >
          <div className="relative top-[22px]">
            <LayeredBtn bgColor="#BEFECD" width="205px" height="46px">
              <span className="text-[#170728] text-[0.87em] ">
                Sign in as employee
              </span>
            </LayeredBtn>
          </div>
        </div>
        <div
          className="border border-[#2E203E] rounded-[12px]  flex justify-center items-end w-[290px] h-[219px]"
          style={{
            backgroundImage: "url('shape3.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#F8F4FB",
          }}
        >
          <div className="relative top-[22px]">
            <LayeredBtn bgColor="#FBF2FF" width="205px" height="46px">
              <span className="text-[#170728] text-[0.87em]">
                Sign in as business
              </span>
            </LayeredBtn>
          </div>
        </div>
      </div>
      <span className="font-semibold text-center text-[#453953] text-[0.87em]">
        Already have an account?
        <Link to="/login" className="text-[#12B347]">
          {" "}
          Log in{" "}
        </Link>
      </span>
    </div>
  </Layout>
);

export default Home;
