import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";
import TextInput3 from "../components/utils/TextInput3";

const Login = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="relative">
          <img
            src="/base.png"
            alt=""
            className="w-[95%] lg:w-full mt-10 lg:mt-3 mx-auto h-[480px]"
          />
          <div className="flex items-center flex-col absolute top-[96px] left-[7px] lg:-left-[4px]">
            <div className="relative left-4">
              <TextInput3
                label="Name"
                inputCustomClassNames="w-[40%] lg:w-[78%] left-[39%] lg:left-[49%]"
                shapeCustomClassNames="w-[87%] lg:w-[90%]"
                labelCustomClassNames="left-[29px] lg:left-[33px]"
              />
              <TextInput3
                label="Password"
                inputCustomClassNames="w-[40%] lg:w-[78%] left-[39%] lg:left-[49%]"
                shapeCustomClassNames="w-[87%] lg:w-[90%]"
                labelCustomClassNames="left-[29px] lg:left-[33px]"
              />
            </div>
            <span className="text-[#8C8C8C] text-xs text-center lg:text-left block mb-4 w-[60%]  lg:w-auto">
              Password must be at least 6 characters
            </span>
            <div className="w-full">
              <div className="hidden lg:block">
                <LayeredBtn
                  bgColor="#BEFECD"
                  width="90%"
                  height="63px"
                  parentClassNames="left-[20px] mb-4"
                  linkTo="" // pass the path here
                >
                  <span className="text-[#170728]">Login</span>
                  <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                    <BsArrowRight color="#FFFFFF" />
                  </div>
                </LayeredBtn>
              </div>
              <div className="block lg:hidden">
                <LayeredBtn
                  bgColor="#BEFECD"
                  width="60%"
                  height="63px"
                  parentClassNames="left-[72px] mb-4"
                  linkTo="" // pass the path here
                >
                  <span className="text-[#170728]">Login</span>
                  <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                    <BsArrowRight color="#FFFFFF" />
                  </div>
                </LayeredBtn>
              </div>
              <div className="hidden lg:block">
                <LayeredBtn
                  bgColor="#FFFFFF"
                  width="90%"
                  height="63px"
                  parentClassNames="left-[20px]"
                  linkTo="" // pass the path here
                >
                  <img src="/google.png" alt="" />
                  <span>Login in with google</span>
                </LayeredBtn>
              </div>
              <div className="lg:hidden block">
                <LayeredBtn
                  bgColor="#FFFFFF"
                  width="60%"
                  height="63px"
                  parentClassNames="left-[72px]"
                  linkTo="" // pass the path here
                >
                  <img src="/google.png" alt="" className="w-4" />
                  <span>Log in with google</span>
                </LayeredBtn>
              </div>
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
};

export default Login;
