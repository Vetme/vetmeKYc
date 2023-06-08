import React from "react";
import TextInput from "../utils/TextInput";
import AudioPlayback from "../AudioPlayback";
import { FormCon } from "../../styles";

const Reviews = () => {
  return (
    <div>
      <FormCon className="geo">
        <div className="px-[50px] py-[50px]">
          <div className="header">
            <h4>Reviews</h4>
          </div>
          <div className="">
            <div className="custom-height mb-16 h-[1020px] lg:h-[500px]">
              <span className="text-[#170728] uppercase block mb-4">
                Personal Information
              </span>
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
                  <TextInput
                    label="First Name"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Middle Name"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 ">
                  <TextInput
                    label="Last Name"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Marital status"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 ">
                  <TextInput
                    label="State of Origin"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Phone Number"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 ">
                  <TextInput
                    label="Disability"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Email Address"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 ">
                  <TextInput
                    label="Nationality"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Religion"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 ">
                  <TextInput
                    label="Social Media"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Date Of Birth"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-4 ml-[21px] w-[86%] lg:w-[679px]">
                <div
                  className="bg-[#D9D9D94D] border border-[#453953] rounded-lg h-[52px] grid gap-4 items-center
              py-1 px-3 uppercase"
                  style={{ gridTemplateColumns: "10% 60% 10%" }}
                >
                  <img src="/shape.png" alt="" />
                  <span>Facebook.com</span>
                  <div className="bg-white border h-[40px] w-[40px]  flex items-center justify-center rounded-full border-[#5D5169]">
                    <img src="/trash.png" alt="" />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-4 ml-[21px] w-[86%] lg:w-[679px]">
                <div
                  className="bg-[#D9D9D94D] border border-[#453953] rounded-lg h-[52px] grid gap-4 items-center
              py-1 px-3 uppercase"
                  style={{ gridTemplateColumns: "10% 60% 10%" }}
                >
                  <img src="/shape.png" alt="" />
                  <span>Instagram.com</span>
                  <div className="bg-white border h-[40px] w-[40px]  flex items-center justify-center rounded-full border-[#5D5169]">
                    <img src="/trash.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[520px] lg:h-[600px]">
              <span className="text-[#170728] uppercase block mb-8">
                Identification
              </span>

              <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                Required documents details.
              </p>
              <div className="relative">
                <img src="shape8.png" alt="" className="w-[86%] lg:w-auto" />
                <img
                  src="id-card.png"
                  alt=""
                  className="absolute top-[10px] lg:top-[12px] left-[24px] lg:left-[31px] w-[78%] lg:w-auto"
                />
                <div className="absolute mt-5">
                  <div className="">
                    <TextInput
                      label="Card Number"
                      inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                      shapeCustomClassNames="w-11/12"
                      labelCustomClassNames="left-[29px] lg:left-[33px]"
                    />
                    <TextInput
                      label="Expiration date"
                      inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                      shapeCustomClassNames="w-11/12"
                      labelCustomClassNames="left-[29px] lg:left-[33px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[290px]">
              <span className="block mb-6 text-[#453953] text-[14px]">
                2. Proof of Address
              </span>
              <div className="relative">
                <img src="shape8.png" alt="" className="absolute w-[340px]" />
                <img
                  src="form.png"
                  alt=""
                  className="relative left-[39px] top-[32px]"
                />
              </div>
            </div>

            <div className="h-[200px] mt-16">
              <span className="text-[#170728] uppercase block mb-4">
                Biometrics
              </span>
              <span className="text-[14px] text-[#453953] block mb-8">
                Facial Scan (Data)
              </span>
              <div className="relative">
                <img src="shape8.png" alt="" className="absolute w-[340px]" />
                <img
                  src="head2.png"
                  alt=""
                  className="absolute top-[26px] left-[78px] w-[200px]"
                />
                <img
                  src="shape11.png"
                  alt=""
                  className="relative left-[60px] top-[50px] "
                />
              </div>
            </div>

            <div className="h-[350px] mt-[150px]">
              <span className="text-[14px] text-[#453953] block mb-8">
                Voice Recognition (Data)
              </span>

              <AudioPlayback
                fileName="User_recording1"
                date="4 Feb 2023"
                duration="00:17:20"
                time="4:30pm"
              />
              <AudioPlayback
                fileName="User_recording2"
                date="4 Feb 2023"
                time="4:30pm"
                duration="00:17:20"
              />
              <AudioPlayback
                fileName="User_recording3"
                date="4 Feb 2023"
                time="4:30pm"
                duration="00:17:20"
              />
            </div>

            <div className="h-[640px] lg:h-[350px] mt-16">
              <span className="text-[#170728] uppercase block mb-4">
                Geo-Location
              </span>
              <span className="text-[14px] text-[#453953] block mb-8">
                Residential Address (Data)
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                <TextInput
                  label="Country of Residence"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
                <TextInput
                  label="State / Province"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                <TextInput
                  label="City"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
                <TextInput
                  label="ZIP / Postal COde"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                <TextInput
                  label="Home Address 1"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
                <TextInput
                  label="Office Address 1"
                  inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                  shapeCustomClassNames="w-11/12"
                  labelCustomClassNames="left-[29px] lg:left-[33px]"
                />
              </div>
            </div>

            <div className=" mt-16">
              <span className="text-[14px] text-[#453953] block mb-6">
                Random Motion Task
              </span>

              <div className="relative">
                <img src="shape7.png" alt="" className="w-[90%] lg:w-auto" />
                <img
                  src="sample-map.png"
                  alt=""
                  className="absolute top-[15px] lg:top-[37px] left-[14px] lg:left-[33px]  w-[85%] lg:w-auto"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </FormCon>
    </div>
  );
};

export default Reviews;
