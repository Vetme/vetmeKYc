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
import { Input, InputBox, InputInner, Spacer } from "../components";
import * as Yup from "yup";

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
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  return (
    <Layout>
      <div className="flex flex-col items-center w-full pt-[25px] lg:pt-0 gap-4">
        <div className="relative auth-card w-full sm:w-[436px] pt-[44px] sm:p-[26px] mt-4 p-2">
          {/* <img src="/base.png" alt="" className="" /> */}
          <span className="uppercase text-sm absolute left-[50%] top-0 translate-x-[-50%]">
            Sign up
          </span>
          <div className="inner">
            <div className="p-2 top-[56px]  lg:left-[29px]">
              <form onSubmit={formik.handleSubmit}>
                <InputBox className="standard">
                  <label htmlFor="name">Name</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="text"
                      value={formik.values.name}
                      type="name"
                      placeholder=""
                      id="name"
                    />
                  </InputInner>
                </InputBox>

                <Spacer height={20} />

                <InputBox className="standard">
                  <label htmlFor="email">Email Address</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="email"
                      value={formik.values.email}
                      type="email"
                      placeholder=""
                      id="email"
                    />
                  </InputInner>
                </InputBox>

                <Spacer height={20} />

                <InputBox className="standard">
                  <label htmlFor="password">Password</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="password"
                      value={formik.values.password}
                      type="password"
                      placeholder=""
                      id="password"
                    />
                  </InputInner>
                </InputBox>

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
                      block
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
                      block
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
                      block
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
                      block
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
