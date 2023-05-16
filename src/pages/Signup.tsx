import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";

const Signup = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full pt-[25px] lg:pt-0 gap-4">
        <div className="relative">
          <img
            src="/base.png"
            alt=""
            className="w-4/5 lg:w-full mx-auto h-[500px]"
          />
          <div className="flex items-center flex-col absolute top-[56px] left-[3px] lg:left-[0px]">
            <TextInput label="Name" />
            <TextInput label="Email" />
            <TextInput label="Password" />
            <span className="text-[#8C8C8C] text-xs text-center lg:text-left block mb-4 w-[60%]  lg:w-auto">
              Password must be at least 6 characters
            </span>
            <div className="w-full">
              <div className="hidden lg:block">
                <LayeredBtn
                  bgColor="#BEFECD"
                  width="90%"
                  height="63px"
                  parentClassNames="left-[30px] mb-4"
                  linkTo="" // pass the path here
                >
                  <span className="text-[#170728]">Continue</span>
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
                  parentClassNames="left-[75px] mb-4"
                  linkTo="" // pass the path here
                >
                  <span className="text-[#170728]">Continue</span>
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
                  parentClassNames="left-[30px]"
                  linkTo="" // pass the path here
                >
                  <img src="/google.png" alt="" />
                  <span>Sign up with google</span>
                </LayeredBtn>
              </div>
              <div className="lg:hidden block">
                <LayeredBtn
                  bgColor="#FFFFFF"
                  width="60%"
                  height="63px"
                  parentClassNames="left-[75px]"
                  linkTo="" // pass the path here
                >
                  <img src="/google.png" alt="" className="w-4" />
                  <span>Sign up with google</span>
                </LayeredBtn>
              </div>
            </div>
          </div>

          {/* <LayeredBtn bgColor="#BEFECD" width="375px" height="83px"> */}
          {/* <span>Continue</span> */}
          {/* <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                <BsArrowRight color="#FFFFFF" />
              </div> */}
          {/* </LayeredBtn> */}
          {/* <LayeredBtn
              text="Sign in as employee"
              bgColor="#BEFECD"
              width="375px"
              height="83px"
            >
              <img src="/google.png" alt="" />
              <span>Sign up with google</span>
            </LayeredBtn> */}
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

export default Signup;
