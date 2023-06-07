import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";
import TextInput3 from "../components/utils/TextInput3";
import { useFormik } from "formik";
import { register } from "../service/auth.service";
import { renderError, renderSuccess } from "../service/alert.service";
import { useAuth } from "../hooks/useAuthProvider";

const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { saveVerificationToken } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ name, email, password }) => {
      setLoading(true);
      try {
        const res: any = await register({
          name,
          email,
          password,
        });

        saveVerificationToken(res?.verification_key);
        navigate(`/verify?email=${email}`);
        renderSuccess("Account Created");
      } catch (error: any) {
        renderError(error.response || "Opps, Something went wrong");
      } finally {
        setLoading(false);
      }

      setLoading(false);
    },
  });

  return (
    <Layout>
      <div className="flex flex-col items-center w-full pt-[25px] lg:pt-0 gap-4">
        <div className="relative auth-card w-full sm:w-[436px] pt-[44px] flex justify-center items-center p-[26px] mt-4">
          {/* <img src="/base.png" alt="" className="" /> */}
          <span className="uppercase text-sm absolute left-[50%] top-0 translate-x-[-50%]">
            Sign up
          </span>
          <div className="inner">
            <div className="flex items-center flex-col  top-[56px] left-[64px] lg:left-[29px]">
              <form onSubmit={formik.handleSubmit}>
                <TextInput3
                  label="Name"
                  inputCustomClassNames="w-[40%] lg:w-[78%] left-[39%] lg:left-[49%]"
                  shapeCustomClassNames="w-[100%] lg:w-[100%] h-[64px] sm:h-auto"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                />
                <TextInput3
                  label="Email"
                  inputCustomClassNames="w-[40%] lg:w-[78%] left-[39%] lg:left-[49%]"
                  shapeCustomClassNames="w-[100%] lg:w-[100%] h-[64px] sm:h-auto"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <TextInput3
                  label="Password"
                  type="password"
                  inputCustomClassNames="w-[40%] lg:w-[78%] left-[39%] lg:left-[49%]"
                  shapeCustomClassNames="w-[100%] lg:w-[100%] h-[64px] sm:h-auto"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                {/* <span className="self-start ml-6s text-[#8C8C8C] text-xs text-center -mt-4 lg:-mt-2  block mb-4 w-[60%]  lg:w-auto">
                Password must be at least 6 characters
              </span> */}
                <br />
                <div className="w-full">
                  <div className="hidden lg:block">
                    <LayeredBtn
                      bgColor="#BEFECD"
                      width="95%"
                      height="63px"
                      parentClassNames="left-[3px] mb-4"
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
                      width="95%"
                      height="63px"
                      parentClassNames="-left-[1px] mb-4"
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
                      width="95%"
                      height="63px"
                      parentClassNames="left-[3px]"
                      linkTo="" // pass the path here
                    >
                      <img src="/google.png" alt="" />
                      <span>Sign up with google</span>
                    </LayeredBtn>
                  </div>
                  <div className="lg:hidden block">
                    <LayeredBtn
                      bgColor="#FFFFFF"
                      width="95%"
                      height="63px"
                      parentClassNames="-left-[1px]"
                      linkTo="" // pass the path here
                    >
                      <img src="/google.png" alt="" className="w-4" />
                      <span>Sign up with google</span>
                    </LayeredBtn>
                  </div>
                </div>
              </form>
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

export default SignUp;
