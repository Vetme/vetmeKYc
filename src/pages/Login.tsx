import { BsArrowRight } from "react-icons/bs";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";
import TextInput3 from "../components/utils/TextInput3";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../hooks/useAuthProvider";
import { useState } from "react";
import { renderError, renderSuccess } from "../service/alert.service";
import { login, googleVerify } from "../service/auth.service";
import { Input, InputBox, InputInner, Spacer } from "../components";
import * as Yup from "yup";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { saveAccessToken, saveUser } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      setLoading(true);
      try {
        const res: any = await login({
          email,
          password,
        });

        saveAccessToken(res?.token);
        saveUser(res?.user);
        navigate(`/process`);
        renderSuccess("Welcome Back!");
      } catch (error: any) {
        renderError(error.response || "Opps, Something went wrong");
      } finally {
        setLoading(false);
      }

      setLoading(false);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      googleVerify(tokenResponse.access_token).then((res: any) => {
        saveAccessToken(res?.token);
        saveUser(res?.user);
        navigate(`/process`);
        renderSuccess("Welcome Back!");
      });
    },
  });
  return (
    <Layout>
      <div className="flex flex-col items-center w-full pt-[25px] lg:pt-0 gap-4">
        <div className="relative auth-card  w-full sm:w-[436px] pt-[44px]  justify-center items-center p-[10px] sm:p-[26px] mt-4">
          <span className="uppercase text-sm top-0 absolute left-[50%] translate-x-[-50%]">
            Login
          </span>
          <form onSubmit={formik.handleSubmit}>
            <div className="sm:pt-[50px] top-[96px]  w-full">
              <div className="relative w-full">
                <InputBox className="standard">
                  <label htmlFor="">Email Address</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="email"
                      value={formik.values.email}
                      type="email"
                      placeholder=""
                    />
                  </InputInner>
                </InputBox>

                <Spacer height={20} />

                <InputBox className="standard">
                  <label htmlFor="">Password</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="password"
                      value={formik.values.password}
                      type="password"
                      placeholder="********"
                    />
                  </InputInner>
                </InputBox>
              </div>

              <Spacer height={32} />

              <div className="w-full">
                <div className="hidden lg:block">
                  <LayeredBtn
                    bgColor="#BEFECD"
                    width="95%"
                    block
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
                    width="100%"
                    height="63px"
                    block
                    linkTo="" // pass the path here
                  >
                    <span className="text-[#170728]">Login</span>
                    <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                      <BsArrowRight color="#FFFFFF" />
                    </div>
                  </LayeredBtn>
                </div>
                <Spacer height={20} />
                <div className="hidden lg:block">
                  <LayeredBtn
                    bgColor="#FFFFFF"
                    width="95%"
                    height="63px"
                    parentClassNames="left-[20px]"
                    block
                    onClick={() => handleLogin()}
                  >
                    <img src="/google.png" alt="" />
                    <span>Login in with google</span>
                  </LayeredBtn>
                </div>
                <div className="lg:hidden block">
                  <LayeredBtn
                    bgColor="#FFFFFF"
                    width="100%"
                    height="63px"
                    block
                    onClick={() => handleLogin()}
                  >
                    <img src="/google.png" alt="" className="w-4" />
                    <span>Log in with google</span>
                  </LayeredBtn>
                </div>
              </div>
            </div>
          </form>
        </div>
        <span className="font-semibold text-center text-[#453953] text-[0.87em]">
          Don't have an account?
          <Link to="/signup" className="text-[#12B347]">
            {" "}
            Register{" "}
          </Link>
        </span>
      </div>
    </Layout>
  );
};

export default Login;
