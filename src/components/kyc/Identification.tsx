import React from "react";
import TextInput from "../utils/TextInput";
import { IoMdArrowDropright, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FormCon } from "../../styles";

const Identification = () => {
  return (
    <FormCon>
      <div className="px-[50px] py-[50px]">
        <div className="header">
          <h4>Identification</h4>
        </div>
        <div className="info">
          <span>
            (kindly make sure the information provided matches the id)
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-[#170728] uppercase">
              1. Required documents details.
            </span>
            <div className="pt-6 uppercase">
              <div className="flex flex-wrap gap-2 mb-6">
                <div
                  className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                >
                  National ID
                </div>
                <div
                  className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                >
                  Passport
                </div>
                <div
                  className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                >
                  Driver licence
                </div>
              </div>
              <div>
                <div className="">
                  <div>
                    <TextInput
                      label="Card number"
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
                    <div className="relative">
                      <img src="upload-shape.png" alt="" />
                      <label
                        htmlFor="custom-input"
                        className="absolute top-[60px] left-[26px] w-4/5 items-center cursor-pointer flex flex-col gap-2"
                      >
                        {/* <div className="flex items-center flex-col gap-3"> */}
                        <input
                          type="file"
                          className="hidden"
                          id="custom-input"
                        />
                        <span className="text-[0.9em]">Upload Document</span>
                        <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                          <img src="/upload-icon.png" alt="" />
                        </div>
                        <p className="text-[0.8em] text-center capitalize">
                          Please upload a copy of your valid identification in
                          PNG, JPEG, or PDF format no longer than 3mb in size
                        </p>
                        {/* </div> */}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-6 relative mt-[150px]">
              <div className="mt-5">
                <span className="text-[#170728] uppercase">
                  2. Proof of Address
                </span>
                <div className="relative">
                  <img src="shape9.png" alt="" className="mt-6 w-[340px]" />
                  <label
                    htmlFor="custom-input2"
                    className="absolute top-[48px] left-[12px] w-4/5 items-center cursor-pointer flex flex-col gap-2"
                  >
                    <input type="file" className="hidden" id="custom-input2" />
                    <span className="text-[0.9em]">Upload Document</span>
                    <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                      <img src="/upload-icon.png" alt="" />
                    </div>
                    <p className="text-[0.8em] text-center capitalize">
                      Drop your file to upload or{" "}
                      <span className="text-[#12B347]"> Browse </span>
                    </p>
                    {/* </div> */}
                  </label>
                </div>
                <span className="text-[#8C8C8C] text-[11px] ml-11">
                  Maximum size of image 5mb PDF, JPG,PNG
                </span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 gap-[490px]">
              <div className="bg-[#170728] text-white flex gap-6 p-4 rounded-xl capitalize self-end">
                <div className="relative">
                  <img src="shape5.png" alt="absolute" />
                  <img
                    src="shape4.png"
                    alt=""
                    className="absolute left-[30px] top-[7px]"
                  />
                </div>

                <div>
                  <h3>Approved Documents</h3>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>National ID cards</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>International Passport</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>Driver Licence</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                </div>
              </div>

              <div className="bg-[#170728] text-white flex gap-6 p-4 rounded-xl capitalize self-end">
                <div className="relative">
                  <img src="shape5.png" alt="absolute" />
                  <img
                    src="shape4.png"
                    alt=""
                    className="absolute left-[30px] top-[7px]"
                  />
                </div>

                <div>
                  <h3>Approved Documents</h3>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>Bank Statements</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>Credit Card Statement</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoMdArrowDropright />
                    <span>Utility Bill</span>
                    <IoMdCheckmarkCircleOutline color="#79B97F" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormCon>
  );
};

export default Identification;
