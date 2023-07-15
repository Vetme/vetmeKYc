import React, { useEffect, useState } from "react";
import { TbCloudDownload } from "react-icons/tb";
import { FormCon } from "../../styles";
import { getCurrentUser } from "../../service/auth.service";
import { useAuth } from "../../hooks/useAuthProvider";
import { Flex } from "..";
import { AiOutlineClose } from "react-icons/ai";
import LayeredBtn from "../utils/LayeredBtn";
import { FadeLoader } from "react-spinners";
import { generateCertificate } from "../../service/kyc.service";
import fileDownload from "js-file-download";

const Certification = () => {
  const { saveUser, user } = useAuth();
  const [popup, setPopup] = useState<boolean>(false);
  const [certificateGenerationStage, setCertificateGenerationStage] = useState({
    generating: false,
    generated: false,
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res: any = await getCurrentUser();
      saveUser(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowPopup = () => {
    setPopup(!popup);
  };

  const handlePrint = async () => {
    setPopup(!popup);

    setCertificateGenerationStage({
      ...certificateGenerationStage,
      generating: true,
      generated: false,
    });
    try {
      const res = await generateCertificate();
      setTimeout(() => {
        setCertificateGenerationStage({
          ...certificateGenerationStage,
          generating: false,
          generated: true,
        });

        const link = document.createElement("a");

        const file = new Blob([res as any], { type: "application/pdf" });
        let fileURL = URL.createObjectURL(file);
        link.href = fileURL;
        // window.open(fileURL);
        link.setAttribute("download", "certificate.pdf");
        document.body.appendChild(link);
        link.click();
      }, 3000);
    } catch (err) {
    } finally {
      setTimeout(() => {
        setCertificateGenerationStage({
          ...certificateGenerationStage,
          generating: false,
          generated: false,
        });
      }, 6000);
    }
  };

  return (
    <div>
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
      <FormCon className="cert">
        <div className="px-[50px] py-[50px]">
          <div className="header">
            <h4>Certificate</h4>
          </div>

          <h3 className="font-semibold text-[1.1em] mb-4">
            VetMe Know Your Customer Certification
          </h3>
          <div className="font-light leading-[30px] w-11/12 text-justify">
            <p className="mb-4">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            </p>
          </div>

          {user.kyc_enabled && user.is_verified ? (
            <Flex gap={10}>
              <button
                onClick={() => setPopup(true)}
                className="flex gap-3 items-center justify-center px-4 h-[51px] border border-[#170728] rounded-[14px] mt-7"
              >
                <TbCloudDownload />
                <span className="text-[#170728]">Download KYC certificate</span>
              </button>
              <button className="flex gap-3 items-center justify-center  px-4 h-[51px] border border-[#170728] rounded-[14px] mt-7">
                <span className="text-[#170728]">
                  Generate Certification Key
                </span>
              </button>
            </Flex>
          ) : (
            <div className="p-4 rounded bg-blue-100 text-blue-800 border border-blue-800">
              Your KYC verification process is still pending. Kindly complete
              the verification to gain access to download your certificate.
            </div>
          )}
        </div>
      </FormCon>
    </div>
  );
};

export default Certification;
