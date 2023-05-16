import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput2 from "../components/utils/TextInput2";

const Verify = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="relative">
          <img
            src="/base.png"
            alt=""
            className="w-4/5 lg:w-full mt-10 lg:mt-3 mx-auto h-[480px]"
          />
          <div className="flex items-center flex-col absolute top-[80px] left-[45px]">
            <span className="text-[#8C8C8C] text-xs text-left block mb-8">
              Enter the 4 digit otp sent to your email address
            </span>
            <div className="flex justify-center mb-8">
              <TextInput2 />
              <TextInput2 />
              <TextInput2 />
              <TextInput2 />
            </div>
            <Link
              to=""
              className="text-[#8C8C8C] text-xs text-left block mb-8 uppercase"
            >
              Resend otp
            </Link>

            <div className="w-full">
              <LayeredBtn
                bgColor="#BEFECD"
                width="90%"
                height="63px"
                parentClassNames="left-[30px] mb-4"
                linkTo="" // pass the path here
              >
                <span className="text-[#170728]">Sign up</span>
                <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                  <BsArrowRight color="#FFFFFF" />
                </div>
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
};

export default Verify;
