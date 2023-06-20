import React, { useState } from "react";
import TextInput from "../utils/TextInput";
import { FormCon } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, InputBox, InputInner } from "..";
import { countries } from "../../pages/data";
import { renderError, renderSuccess } from "../../service/alert.service";
import { processGeo } from "../../service/kyc.service";
import LayeredBtn from "../utils/LayeredBtn";

const GeoLocation = ({ next }: { next: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
      zip: "",
      home_address_1: "",
      home_address_2: "",
      office_address_1: "",
      office_address_2: "",
      ip: "123:4242",
      long: 244354,
      lat: 453654,
    },
    onSubmit: async (data) => {
      setLoading(true);
      try {
        const sData: any = { ...data };
        const res: any = await processGeo(sData);
        next();
        renderSuccess("Personal Information Saved!");
      } catch (error: any) {
        renderError(error.response || "Opps, Something went wrong");
      } finally {
        setLoading(false);
      }

      setLoading(false);
    },
    validationSchema: Yup.object().shape({
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is Required"),
      zip: Yup.string().required("Zip is Required"),
      home_address_1: Yup.string().required("Home address is required"),
      office_address_1: Yup.string().required("Office Address is required"),
    }),
  });

  return (
    <div>
      <FormCon>
        <form onSubmit={formik.handleSubmit}>
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
                <InputBox className="standard" required>
                  <label htmlFor="country">Country of Residence</label>
                  <InputInner>
                    <select
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      name="country"
                      id="country"
                    >
                      <option>Select Residence</option>
                      {countries.map((country, i) => (
                        <option value={country.name} key={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </InputInner>
                </InputBox>

                <InputBox className="standard" required>
                  <label htmlFor="state">State</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="state"
                      value={formik.values.state}
                      type="text"
                      placeholder=""
                      id="state"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.state && (
                    <span className="error">{formik.errors.state}</span>
                  )}
                </InputBox>

                <InputBox className="standard" required>
                  <label htmlFor="city">City</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="city"
                      value={formik.values.city}
                      type="text"
                      placeholder=""
                      id="city"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.city && (
                    <span className="error">{formik.errors.city}</span>
                  )}
                </InputBox>

                <InputBox className="standard" required>
                  <label htmlFor="zip">Zip</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="zip"
                      value={formik.values.zip}
                      type="text"
                      placeholder=""
                      id="zip"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.zip && (
                    <span className="error">{formik.errors.zip}</span>
                  )}
                </InputBox>

                <InputBox className="standard" required>
                  <label htmlFor="zip">Home Address 1</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="home_address_1"
                      value={formik.values.home_address_1}
                      type="text"
                      placeholder=""
                      id="home_address_1"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.home_address_1 && (
                    <span className="error">
                      {formik.errors.home_address_1}
                    </span>
                  )}
                </InputBox>

                <InputBox className="standard" required>
                  <label htmlFor="zip">Office Address 1</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="office_address_1"
                      value={formik.values.office_address_1}
                      type="text"
                      placeholder=""
                      id="office_address_1"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.office_address_1 && (
                    <span className="error">
                      {formik.errors.office_address_1}
                    </span>
                  )}
                </InputBox>

                <InputBox className="standard">
                  <label htmlFor="zip">Home Address 2</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="home_address_2"
                      value={formik.values.home_address_2}
                      type="text"
                      placeholder=""
                      id="home_address_2"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.home_address_2 && (
                    <span className="error">
                      {formik.errors.home_address_2}
                    </span>
                  )}
                </InputBox>

                <InputBox className="standard">
                  <label htmlFor="zip">Office Address 2</label>
                  <InputInner>
                    <Input
                      onChange={formik.handleChange}
                      name="office_address_2"
                      value={formik.values.office_address_2}
                      type="text"
                      placeholder=""
                      id="office_address_2"
                    />
                  </InputInner>
                  {formik.touched && formik.errors.office_address_2 && (
                    <span className="error">
                      {formik.errors.office_address_2}
                    </span>
                  )}
                </InputBox>
              </div>
            </div>

            <LayeredBtn
              bgColor="#BEFECD"
              width="88%"
              block
              height="63px"
              parentClassNames="mb-4 justify-between"
            >
              <span className="text-[#170728]">Submit</span>
            </LayeredBtn>

            {/* <div>
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
          </div> */}
          </div>
        </form>
      </FormCon>
    </div>
  );
};

export default GeoLocation;
