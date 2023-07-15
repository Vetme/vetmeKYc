import { AiOutlineClose } from "react-icons/ai";
import FadeLoader from "react-spinners/FadeLoader";

import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import "./css/react-tabs.css";
import { useState } from "react";
import { CBody, CItem, CTabs } from "../styles";
import {
  Biometrics,
  Certification,
  GeoLocation,
  Identification,
  Personal,
  Reviews,
} from "../components/kyc";
import { useAuth } from "../hooks/useAuthProvider";

enum CustomTabs {
  PERSONAL_INFORMATION = "Personal Information",
  IDENTIFICATION = "Identification",
  BIOMETRIC = "Biometric",
  GEOLOCATION = "Geo-Location",
  REVIEW_TERMS_CONDITION = "Review/Terms & Condition",
  CERTIFICATION = "Certification",
}

const Process = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const { user } = useAuth();
  const [active, setActive] = useState<CustomTabs>(
    CustomTabs.PERSONAL_INFORMATION
  );
  const [certificateGenerationStage, setCertificateGenerationStage] = useState({
    generating: false,
    generated: false,
  });
  let navigate = useNavigate();

  const handleShowPopup = () => {
    setPopup(!popup);
  };

  const handlePrint = () => {
    setPopup(!popup);

    setCertificateGenerationStage({
      ...certificateGenerationStage,
      generating: true,
      generated: false,
    });
    setTimeout(() => {
      setCertificateGenerationStage({
        ...certificateGenerationStage,
        generating: false,
        generated: true,
      });
    }, 3000);
    setTimeout(() => {
      setCertificateGenerationStage({
        ...certificateGenerationStage,
        generating: false,
        generated: false,
      });
    }, 6000);
  };

  const handleNext = (val: any) => {
    setActive(val);
  };
  return (
    <Layout>
      {popup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#F2FFF5B2]">
          <img src="popup1.png" alt="" className="w-[500px]" />
          {/* <img src="popup2.png" alt="" className="w-[500px]" /> */}

          <div className="absolute">
            <div
              className="bg-[#170728] flex items-center justify-center h-[52px] w-[52px] rounded-xl text-white 
          absolute -right-[1px] -top-[7px] cursor-pointer"
            >
              <AiOutlineClose onClick={handleShowPopup} />
            </div>
            <div className="p-4  w-[497px]">
              <h1 className="text-lg text-[#170728] mb-3">
                Terms and Conditions
              </h1>
              <p className="text-[#5D5169] border border-[#2E203E] rounded-[10px] p-4">
                Accepting Terms and Conditions..............................
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per Curabitur tempor quis eros tempus lacinia. Nam
                venenatis.{" "}
              </p>
              <div className="flex gap-6 mt-4">
                <LayeredBtn bgColor="#FBF2FF" width="220px" height="63px">
                  <span
                    className="text-[#170728] text-[0.87em]"
                    onClick={handleShowPopup}
                  >
                    Decline
                  </span>
                </LayeredBtn>
                <LayeredBtn bgColor="#BEFECD" width="220px" height="63px">
                  <span
                    className="text-[#170728] text-[0.87em]"
                    onClick={handlePrint}
                  >
                    I agree
                  </span>
                </LayeredBtn>
              </div>
            </div>
          </div>
        </div>
      )}

      {certificateGenerationStage.generating && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#F2FFF5B2]">
          <img src="popup2.png" alt="" className="w-[500px]" />
          <div className="absolute">
            <div className="absolute right-[220px] -top-[117px] text-[0.82em] cursor-pointer uppercase">
              Loading
            </div>
            <div className="p-4  w-[497px] flex flex-col gap-7 items-center justify-center">
              <FadeLoader color="#170728" height={15} width={5} />
              <span className="text-[#5D5169] text-[0.9em] text-center block w-[300px]">
                Kindly exercise patience while we generate your KYC certificate
              </span>
            </div>
          </div>
        </div>
      )}

      {certificateGenerationStage.generated && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#F2FFF5B2]">
          <img src="popup2.png" alt="" className="w-[500px]" />
          <div className="absolute">
            <div className="absolute right-[220px] -top-[130px] text-[0.82em] cursor-pointer uppercase">
              Loading
            </div>
            <div className="p-4  w-[497px] flex flex-col gap-4 items-center justify-center">
              <img src="tick.svg" alt="" width="66px" />
              <span className="text-[#5D5169] text-[0.9em] text-center block w-[300px]">
                Completed
              </span>
            </div>
          </div>
        </div>
      )}
      {user.kyc_enabled ? (
        <div className=" w-full gap-4">
          <CTabs className="pricing">
            {Object.values(CustomTabs).map((val, i) => (
              <CItem
                href="#solutions"
                className={active == val ? "active" : ""}
                value={val}
                onClick={() => setActive(val)}
                as="a"
              >
                <span></span>
                {val}
              </CItem>
            ))}
          </CTabs>

          <CBody>
            {CustomTabs.PERSONAL_INFORMATION == active && (
              <Personal next={() => handleNext(CustomTabs.IDENTIFICATION)} />
            )}
            {CustomTabs.IDENTIFICATION == active && (
              <Identification next={() => handleNext(CustomTabs.BIOMETRIC)} />
            )}
            {CustomTabs.BIOMETRIC == active && <Biometrics />}
            {CustomTabs.GEOLOCATION == active && (
              <GeoLocation
                next={() => handleNext(CustomTabs.REVIEW_TERMS_CONDITION)}
              />
            )}
            {CustomTabs.REVIEW_TERMS_CONDITION == active && <Reviews />}
            {CustomTabs.CERTIFICATION == active && <Certification />}
          </CBody>
        </div>
      ) : (
        <div className=" w-full gap-4">
          <div className="p-5">
            <div className="my-4">
              {" "}
              <h4 className="text-lg">Welcome {user.name}!</h4>
            </div>

            <LayeredBtn
              lDir="right"
              bgColor="#FBF2FF"
              width="147px"
              height="46px"
              parentClassNames="w-auto"
              onClick={() => navigate("/pricing")}
            >
              <span className="text-[#170728] text-[0.87em]">
                Start Your Kyc
              </span>
            </LayeredBtn>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Process;
