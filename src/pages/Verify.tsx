import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput2 from "../components/utils/TextInput2";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { verifyOtp } from "../service/auth.service";
import { renderError, renderSuccess } from "../service/alert.service";
import { useAuth } from "../hooks/useAuthProvider";

const PIN_LENGTH = 4;
let currentIndex: number = 0;

const Verify = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pins, setPins] = useState<any[]>(Array(PIN_LENGTH).fill(""));
  const [activeIndex, setActive] = useState<number>(0);
  const [hasError, setError] = useState<boolean>(false);
  let navigate = useNavigate();
  let [params] = useSearchParams();
  const { clear } = useAuth();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const val = value.substring(value.length - 1);
    const newPin = [...pins];
    newPin[currentIndex] = val;

    if (!val) setActive(currentIndex - 1);
    else setActive(currentIndex + 1);
    setPins(newPin);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    i: number
  ): void => {
    currentIndex = i;
    if (e.key === "Backspace") setActive(currentIndex - 1);
  };

  const validate = async () => {
    const otp = pins.join("");
    if (otp.length < PIN_LENGTH) return;

    try {
      await verifyOtp({
        otp,
        check: params.get("email"),
        verification_key: localStorage.getItem("verification_key"),
      });

      renderSuccess("Otp Verified");

      clear();
      navigate("/login");
    } catch (error: any) {
      renderError(error.response || "Opps, Something went wrong");
    }

    // try {
    //   if (router.query?.email) {
    //     const { data, errors } = await authService.validateEmailOtp(otp);

    //   } else {
    //     const { data, errors } = await authService.validateOtp(otp);
    //     console.log({ data });
    //     if (data?.verifyPhoneOTP?.success) {
    //       if (hash?.length) router.push(`/auth/reset-password`);
    //       else router.push(`/auth/signin`);
    //       authService.setToken(
    //         data?.verifyPhoneOTP?.token,
    //         hash?.length ? "password_reset" : "phone_auth"
    //       );
    //     }
    //   }
    // } catch (err: any) {
    //   setError(true);
    //   setActive(0);
    //   parseError(err?.message);
    //   setPins(Array(PIN_LENGTH).fill(""));
    // }
  };

  useEffect(() => {
    inputRef.current?.focus();
    if (pins.join("").length > 0) {
      setError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleSubmit = () => {
    validate();
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="relative">
          <img
            src="/base.png"
            alt=""
            className="w-[95%] lg:w-full mt-10 lg:mt-3 mx-auto h-[480px]"
          />
          <div className="flex items-center flex-col absolute top-[80px] left-[10px]">
            <span className="text-[#8C8C8C] text-xs text-center lg:text-left block mb-8 w-11/12 lg:w-full">
              Enter the 4 digit otp sent to your email address
            </span>
            <div className="flex justify-center mb-8">
              {pins.map((_, i) => (
                <div className={hasError ? "hasError" : ""} key={i}>
                  <div className="relative mb-4">
                    <img
                      src="/input-shape2.png"
                      alt=""
                      className="block mx-auto"
                    />
                    <input
                      type="text"
                      className="absolute top-[65%] left-[63%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40px] text-center outline-0"
                      value={pins[i]}
                      autoComplete="new-pin"
                      onChange={handleChange}
                      ref={i === activeIndex ? inputRef : null}
                      onKeyDown={(e: any) => handleKeyDown(e, i)}
                    />
                  </div>
                </div>
              ))}
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
                onClick={handleSubmit}
              >
                <span className="text-[#170728]">Verify</span>
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
