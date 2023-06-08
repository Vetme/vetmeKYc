import React from "react";
import { IoMdArrowDropright, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FormCon } from "../../styles";

const Biometrics = () => {
  return (
    <FormCon>
      <div className="px-[50px] py-[50px]">
        <div className="header">
          <h4>Biometrics</h4>
        </div>
        <div className="info">
          <span>(Let’s make sure you are a real person)</span>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-[#170728] uppercase">
                1.Facial Recognition
              </span>
              <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                Automatically scan your face using our latest technology
              </p>
              <div className="relative mb-16">
                <img src="shape6.png" alt="" className="lg:w-auto w-[90%]" />
                <div className="absolute top-[34px] lg:top-[55px] left-[75px] lg:left-[160px] flex flex-col items-center">
                  <div className="flex items-center justify-center h-[108px] w-[108px] lg:h-[198px] lg:w-[198px] mb-4 border border-dashed border-[#453953] rounded-full">
                    <div className="flex items-center justify-center h-[86px] w-[86px] border border-dashed border-[#45395380] rounded-full">
                      <img src="/cam-icon.png" alt="" />
                    </div>
                  </div>
                  <div className="bg-[#BEFECD] w-[192px] h-[40px] flex items-center justify-center text-[0.8em] text-[#170728] uppercase border border-[#2E203E] rounded-[100px]">
                    Click to begin scan
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex bg-[#170728] text-white flex gap-4 p-4 rounded-xl capitalize w-[420px]">
              <div className="relative">
                <img src="shape5.png" alt="absolute" />
                <img
                  src="shape4.png"
                  alt=""
                  className="absolute left-[21px] top-[4px]"
                />
              </div>
              <div className="text-[13px]">
                <h3 className="text-[15px] mb-2">Steps</h3>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>Detect face in image</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>
                    Rotate face 360° to capture all areas{" "}
                    <IoMdCheckmarkCircleOutline
                      color="#79B97F"
                      className="inline"
                    />
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>Extract facial features</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>
                    Recognize face image (Verify & Identify)
                    <IoMdCheckmarkCircleOutline
                      color="#79B97F"
                      className="inline"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-[#170728] uppercase">
                2.Voice Recognition
              </span>
              <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                Automatically record your for easy accessibility.
              </p>
              <div className="relative mb-16">
                <img src="shape6.png" alt="" className="w-[90%] lg:w-auto" />
                <div className="absolute top-[55px] left-[50px] lg:left-[100px] ">
                  <span className="inline-block w-[90%] lg:w-full text-[0.8em] text-[#453953] text-center relative -left-[19px] lg:-left-[12px] top-[14px] lg:top-[100px]">
                    Tap the record button to start a voice memo
                  </span>

                  <div
                    className="bg-[#BEFECD] w-[98%] lg:w-[464px] h-[90px] flex justify-center items-center absolute top-[77px] lg:top-[183px] -left-[33px] lg:-left-[76px]
                 rounded-br-[8px] rounded-bl-[8px]"
                  >
                    <div className="bg-[#EB4335] h-[46px] w-[46px] rounded-full border-[4px] border-white"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex bg-[#170728] text-white gap-4 p-4 rounded-xl capitalize w-[420px]">
              <div className="relative">
                <img src="shape5.png" alt="absolute" />
                <img
                  src="shape4.png"
                  alt=""
                  className="absolute left-[21px] top-[4px]"
                />
              </div>
              <div className="text-[13px]">
                <h3 className="text-[15px] mb-2">Says this words</h3>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>Hi, my name is (Your name).</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>I’m here to verify my voice.</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>Thank you so much</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdArrowDropright />
                  <span>Recognize face image (Verify & Identify)</span>
                  <IoMdCheckmarkCircleOutline color="#79B97F" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="text-[#170728] uppercase">3. FINGERPRINT</span>
              <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                Automatically scan your thumb.
              </p>

              <div className="bg-[#75747E] text-white text-[0.8em] flex items-center justify-center w-[306px] h-[40px] rounded-full uppercase">
                Available on our mobile version
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormCon>
  );
};

export default Biometrics;
