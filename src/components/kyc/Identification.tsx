import React, { useState } from "react";
import TextInput from "../utils/TextInput";
import { IoMdArrowDropright, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FormCon } from "../../styles";
import { Input, InputBox, InputInner, Spacer } from "..";
import { useFormik } from "formik";
import * as Yup from "yup";
import { renderError, renderSuccess } from "../../service/alert.service";
import { processBasic, processId } from "../../service/kyc.service";
import LayeredBtn from "../utils/LayeredBtn";

const Identification = ({ next }: { next: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [doc, setDoc] = useState<any>({
    file: null,
    url: null,
  });
  const [proof, setProof] = useState<any>({
    file: null,
    url: null,
  });

  const formik = useFormik({
    initialValues: {
      id_type: "",
      card_number: "",
      expiration_date: "",
    },
    onSubmit: async (data) => {
      setLoading(true);
      let formData = new FormData();
      formData.append("id_type", data.id_type);
      formData.append("card_number", data.card_number);
      formData.append("expiration_date", data.expiration_date);
      formData.append("doc", doc.file);
      formData.append("proof", proof.file);

      try {
        const res: any = await processId(formData);
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
      id_type: Yup.string().required("FIrst name is required"),
      card_number: Yup.string().required("Card number is required"),
      expiration_date: Yup.string().required("Expiration date is required"),
    }),
  });

  const handleFile = (e: any, type: any) => {
    const file = e.target.files[0];
    const fileList = URL.createObjectURL(file);
    if (type == "doc") {
      setDoc({ url: fileList, file: file });
    } else {
      setProof({ url: fileList, file: file });
    }
  };
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
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[#170728] uppercase">
                1. Required documents details.
              </span>
              <div className="pt-6 uppercase">
                <InputBox className="standard" required>
                  <label htmlFor="last_name">Document Type</label>
                  <InputInner>
                    <select onChange={formik.handleChange} name="id_type" id="">
                      <option value="">Select Document Type</option>
                      <option value="Passport">Passport</option>
                      <option value="National ID">National ID</option>
                      <option value="Driver license">Driver license</option>
                    </select>
                  </InputInner>
                  {formik.touched && formik.errors.id_type && (
                    <span className="error">{formik.errors.id_type}</span>
                  )}
                </InputBox>
                <Spacer height={20} />

                <div>
                  <div className="">
                    <div>
                      <InputBox className="standard" required>
                        <label htmlFor="card_number">Card number</label>
                        <InputInner>
                          <Input
                            onChange={formik.handleChange}
                            name="card_number"
                            value={formik.values.card_number}
                            type="text"
                            placeholder=""
                            id="card_number"
                          />
                        </InputInner>
                        {formik.touched && formik.errors.card_number && (
                          <span className="error">
                            {formik.errors.card_number}
                          </span>
                        )}
                      </InputBox>

                      <Spacer height={20} />

                      <InputBox className="standard" required>
                        <label htmlFor="expiration_date">Expiration Date</label>
                        <InputInner>
                          <Input
                            onChange={formik.handleChange}
                            name="expiration_date"
                            value={formik.values.expiration_date}
                            type="text"
                            placeholder=""
                            id="expiration_date"
                          />
                        </InputInner>
                        {formik.touched && formik.errors.expiration_date && (
                          <span className="error">
                            {formik.errors.expiration_date}
                          </span>
                        )}
                      </InputBox>

                      <Spacer height={20} />

                      <div className="relative">
                        <img
                          src={doc.url ? doc.url : "upload-shape.png"}
                          alt=""
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
                            onChange={(e) => handleFile(e, "doc")}
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
                    <img
                      src={proof.url ? proof.url : "shape9.png"}
                      alt=""
                      className="mt-6 w-[340px]"
                    />
                    <label
                      htmlFor="custom-input2"
                      className="absolute top-[48px] left-[12px] w-4/5 items-center cursor-pointer flex flex-col gap-2"
                    >
                      <input
                        type="file"
                        onChange={(e) => handleFile(e, "proof")}
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
          <br />

          <LayeredBtn
            bgColor="#BEFECD"
            width="88%"
            block
            height="63px"
            type="submit"
            parentClassNames="mb-4 justify-between"
          >
            <span className="text-[#170728]">Save and Continue</span>
          </LayeredBtn>
        </form>
      </div>
    </FormCon>
  );
};

export default Identification;
