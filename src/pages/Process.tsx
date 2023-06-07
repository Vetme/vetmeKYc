import { BsArrowRight, BsPlus } from "react-icons/bs";
import { IoMdArrowDropright, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TbCloudDownload } from "react-icons/tb";
import FadeLoader from "react-spinners/FadeLoader";

import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MdOutlineArrowRight } from "react-icons/md";

import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";
import TextInput2 from "../components/utils/TextInput2";
import "./css/react-tabs.css";
import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import AudioPlayback from "../components/AudioPlayback";
import Footer from "../components/layout/Footer";

const Process = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [certificateGenerationStage, setCertificateGenerationStage] = useState({
    generating: false,
    generated: false,
  });

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

  return (
    <>
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
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per Curabitur
                  tempor quis eros tempus lacinia. Nam venenatis.{" "}
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
                  Kindly exercise patience while we generate your KYC
                  certificate
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
        <div className="flex flex-col items-center w-full gap-4">
          <Tabs className="pt-6" selectedTabClassName="tab-custom--selected">
            <TabList className="tablist-custom flex gap-2 items-center  mb-6 px-3 h-[50px]">
              <Tab className="tabs-custom">Personal Information</Tab>
              <Tab className="tabs-custom">Identification</Tab>
              <Tab className="tabs-custom">Biometric</Tab>
              <Tab className="tabs-custom">Geo-Location</Tab>
              <Tab className="tabs-custom">Review/Terms & Condition</Tab>
              <Tab className="tabs-custom">Certification</Tab>
            </TabList>
            <TabPanel className="relative">
              <div className="absolute">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-4 lg:ml-5 ml-4  w-[87%]">
                  <div
                    className="bg-[#D9D9D94D] border border-[#453953] rounded-lg h-[52px] grid gap-4 items-center
                       py-1 px-3 uppercase"
                    style={{ gridTemplateColumns: "10% 60% 10%" }}
                  >
                    <img src="/shape.png" alt="" />
                    <span>Facebook.com</span>
                    <div className="bg-white border h-[40px] w-[40px]  flex items-center justify-center align-self-end rounded-full border-[#5D5169]">
                      <img src="/trash.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-4 lg:ml-5 ml-4  w-[87%]">
                  <div
                    className="bg-[#D9D9D94D] border border-[#453953] rounded-lg h-[52px] grid gap-4 items-center
              py-1 px-3 uppercase"
                    style={{ gridTemplateColumns: "10% 60% 10%" }}
                  >
                    <img src="/shape.png" alt="" />
                    <span>Instagram.com</span>
                    <div className="bg-white border h-[40px] w-[40px]  flex items-center justify-center align-self-end  rounded-full border-[#5D5169]">
                      <img src="/trash.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:ml-5 ml-4">
                  <LayeredBtn
                    bgColor="#BEFECD"
                    width="88%"
                    height="63px"
                    parentClassNames="mb-4 justify-between"
                    linkTo="" // pass the path here
                  >
                    <span className="text-[#170728]">Add New Field</span>
                    <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                      <BsPlus color="#FFFFFF" />
                    </div>
                  </LayeredBtn>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="absolute">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <span className="text-[#170728] uppercase">
                    1. Required documents details.
                  </span>
                  <Tabs
                    className="pt-6 uppercase"
                    selectedTabClassName="document-tabs--selected"
                  >
                    <TabList className="flex flex-wrap gap-2 mb-6">
                      <Tab
                        className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                      >
                        National ID
                      </Tab>
                      <Tab
                        className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                      >
                        Passport
                      </Tab>
                      <Tab
                        className="bg-[#BEFECD] h-[39px] min-w-[139px] rounded-full flex items-center justify-center px-4 border 
                border-[#170728]"
                      >
                        Driver licence
                      </Tab>
                    </TabList>
                    <TabPanel className="absolute">
                      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
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
                            <img
                              src="upload-shape.png"
                              alt=""
                              className="w-[344px]"
                            />
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
                              <span className="text-[0.9em]">
                                Upload Document
                              </span>
                              <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                                <img src="/upload-icon.png" alt="" />
                              </div>
                              <p className="text-[0.8em] text-center capitalize">
                                Please upload a copy of your valid
                                identification in PNG, JPEG, or PDF format no
                                longer than 3mb in size
                              </p>
                              {/* </div> */}
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel className="absolute">
                      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
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
                            <img
                              src="upload-shape.png"
                              alt=""
                              className="w-[344px]"
                            />
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
                              <span className="text-[0.9em]">
                                Upload Document
                              </span>
                              <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                                <img src="/upload-icon.png" alt="" />
                              </div>
                              <p className="text-[0.8em] text-center capitalize">
                                Please upload a copy of your valid
                                identification in PNG, JPEG, or PDF format no
                                longer than 3mb in size
                              </p>
                              {/* </div> */}
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel className="absolute">
                      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
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
                            <img
                              src="upload-shape.png"
                              alt=""
                              className="w-[344px]"
                            />
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
                              <span className="text-[0.9em]">
                                Upload Document
                              </span>
                              <div className="border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                                <img src="/upload-icon.png" alt="" />
                              </div>
                              <p className="text-[0.8em] text-center capitalize">
                                Please upload a copy of your valid
                                identification in PNG, JPEG, or PDF format no
                                longer than 3mb in size
                              </p>
                              {/* </div> */}
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                  <div className="grid grid-cols-1 items-center gap-6 relative top-[420px]">
                    <div className="mt-5">
                      <span className="text-[#170728] uppercase">
                        2. Proof of Address
                      </span>
                      <div className="relative">
                        <img
                          src="shape9.png"
                          alt=""
                          className="mt-6 w-[340px]"
                        />
                        <label
                          htmlFor="custom-input2"
                          className="absolute top-[48px] left-[12px] w-4/5 items-center cursor-pointer flex flex-col gap-2"
                        >
                          <input
                            type="file"
                            className="hidden"
                            id="custom-input2"
                          />
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
            </TabPanel>
            <TabPanel className="absolute">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-[#170728] uppercase">
                    1.Facial Recognition
                  </span>
                  <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                    Automatically scan your face using our latest technology
                  </p>
                  <div className="relative mb-16">
                    <img
                      src="shape6.png"
                      alt=""
                      className="lg:w-auto w-[90%]"
                    />
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
                    <img
                      src="shape6.png"
                      alt=""
                      className="w-[90%] lg:w-auto"
                    />
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
                  <span className="text-[#170728] uppercase">
                    3. FINGERPRINT
                  </span>
                  <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                    Automatically scan your thumb.
                  </p>

                  <div className="bg-[#75747E] text-white text-[0.8em] flex items-center justify-center w-[306px] h-[40px] rounded-full uppercase">
                    Available on our mobile version
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="absolute">
              <div className="mb-9">
                <span className="text-[#170728] uppercase block mb-8">
                  1.Residential Address
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 ">
                  <TextInput
                    label="City"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="ZIP / Postal Code"
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 ">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 ">
                  <TextInput
                    label="Home Address 2"
                    isRequired={false}
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                  <TextInput
                    label="Office Address 2"
                    isRequired={false}
                    inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
                    shapeCustomClassNames="w-11/12"
                    labelCustomClassNames="left-[29px] lg:left-[33px]"
                  />
                </div>
              </div>

              <div>
                <span className="text-[#170728] uppercase block mb-8">
                  2. Random Motion Task
                </span>

                <p className="text-[#453953] text-[0.9em] mt-3 mb-5">
                  Automatically scan your location with our latest technology
                </p>

                <div className="relative">
                  <img src="shape7.png" alt="" className="w-[90%] lg:w-auto" />
                  <img
                    src="sample-map.png"
                    alt=""
                    className="absolute top-[15px] lg:top-[37px] left-[14px] lg:left-[33px]  w-[85%] lg:w-auto"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="relative">
              <div className="absolute">
                <div className="custom-height mb-16 h-[1020px] lg:h-[500px]">
                  <span className="text-[#170728] uppercase block mb-4">
                    Personal Information
                  </span>
                  <div className="absolute">
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
                    <img
                      src="shape8.png"
                      alt=""
                      className="w-[86%] lg:w-auto"
                    />
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
                    <img
                      src="shape8.png"
                      alt=""
                      className="absolute w-[340px]"
                    />
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
                    <img
                      src="shape8.png"
                      alt=""
                      className="absolute w-[340px]"
                    />
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

                <div className="h-[200px] mt-16">
                  <span className="text-[14px] text-[#453953] block mb-6">
                    Random Motion Task
                  </span>

                  <div className="relative">
                    <img
                      src="shape7.png"
                      alt=""
                      className="w-[90%] lg:w-auto"
                    />
                    <img
                      src="sample-map.png"
                      alt=""
                      className="absolute top-[15px] lg:top-[37px] left-[14px] lg:left-[33px]  w-[85%] lg:w-auto"
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              {/* <LayeredBtn
              bgColor="#BEFECD"
              width="300px"
              height="63px"
              parentClassNames="left-[30px] mt-4 mb-4"
              linkTo="" // pass the path here
            >
              <span
                className="text-[#170728] uppercase"
                onClick={handleShowPopup}
              >
                Click to accept Terms
              </span>
            </LayeredBtn> */}
            </TabPanel>
            <TabPanel className="absolute">
              <h3 className="font-semibold text-[1.1em] mb-4">
                VetMe Know Your Customer Certification
              </h3>
              <div className="font-light leading-[30px] w-11/12 text-justify">
                <p className="mb-4">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                </p>
                <p className="mb-4">
                  Curabitur vel bibendum lorem. Morbi convallis convallis diam
                  sit amet lacinia. Aliquam in elementum tellus. Curabitur
                  tempor quis eros tempus lacinia. Nam bibendum pellentesque
                  quam a convallis. Sed ut vulputate nisi. Integer in felis sed
                  leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                  feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
                  Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                  Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                  varius volutpat turpis sed lacinia. Nam eget mi in purus
                  lobortis eleifend. Sed nec ante dictum sem condimentum
                  ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
                  ac posuere leo.
                </p>

                <p className="mb-4">
                  Nam pulvinar blandit velit, id condimentum diam faucibus at.
                  Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
                  felis. Quisque mauris dolor, fringilla sed tincidunt ac,
                  finibus non odio. Sed vitae mauris nec ante pretium finibus.
                  Donec nisl neque, pharetra ac elit eu, faucibus aliquam
                  ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh
                  elit sollicitudin felis, eget feugiat sapien diam nec nisl.
                  Aenean gravida turpis nisi, consequat dictum risus dapibus a.
                  Duis felis ante, varius in neque eu, tempor suscipit sem.
                  Maecenas ullamcorper gravida sem sit amet cursus. Etiam
                  pulvinar purus vitae justo pharetra consequat. Mauris id mi ut
                  arcu feugiat maximus. Mauris consequat tellus id tempus
                  aliquet.
                </p>
              </div>

              <button className="flex gap-3 items-center justify-center w-[349px] h-[51px] border border-[#170728] rounded-[14px] mt-7">
                <TbCloudDownload />
                <span className="text-[#170728]">
                  Download KYC certificate-PDF
                </span>
              </button>
            </TabPanel>
          </Tabs>
        </div>
        {/* <div className="flex gap-6">
        <LayeredBtn bgColor="#E4E4E4" width="172px" height="63px">
          <span className="text-[#170728] text-[0.87em] ">Back</span>
        </LayeredBtn>
        <LayeredBtn bgColor="#BEFECD" width="172px" height="63px">
          <span className="text-[#170728] text-[0.87em] ">Next</span>
        </LayeredBtn>
      </div> */}
      </Layout>
    </>
  );
};

export default Process;
