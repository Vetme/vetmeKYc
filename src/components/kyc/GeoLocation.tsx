import React from "react";
import TextInput from "../utils/TextInput";
import { FormCon } from "../../styles";

const GeoLocation = () => {
  return (
    <div>
      <FormCon>
        <div className="px-[50px] py-[50px]">
          <div className="header">
            <h4>Geo-Location</h4>
          </div>
          <div className="info">
            <span>(Let’s know your location)</span>
          </div>
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
        </div>
      </FormCon>
    </div>
  );
};

export default GeoLocation;
