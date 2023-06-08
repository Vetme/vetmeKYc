import React from "react";
import TextInput from "../utils/TextInput";
import LayeredBtn from "../utils/LayeredBtn";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components";
import { FormCon } from "../../styles";

const Personal = () => {
  return (
    <FormCon>
      <div className="px-[50px] py-[50px]">
        <div className="header">
          <h4>Personal Information</h4>
        </div>
        <div className="info">
          <span>User information(field marked with *are mandatory) </span>
        </div>
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
    </FormCon>
  );
};

export default Personal;
