import React, { useEffect, useState } from "react";
import TextInput from "../utils/TextInput";
import LayeredBtn from "../utils/LayeredBtn";
import styled from "styled-components";
import { FormCon, SocialCon } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { renderError, renderSuccess } from "../../service/alert.service";
import { Flex, Input, InputBox, InputInner } from "..";
import { LinkI, TrashI } from "../icons";
import { countries } from "../../pages/data";
import { processBasic, getBasic } from "../../service/kyc.service";
import FormLoader from "../FormLoading";
import { BsPlus } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuthProvider";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Personal = ({ next }: { next: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [social, setSocial] = useState<string>("");
  const [socials, setSocials] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [basic, setBasic] = useState<any>(null);
  const { user } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      disability: "",
      phone: "",
      state: "",
      nationality: "",
      dob: "",
      religion: "",
      marital_status: "Single",
    },
    onSubmit: async (data) => {
      setLoading(true);
      try {
        const sData: any = { ...data };
        sData.socials = JSON.stringify(socials);
        sData.disability = sData.disability == "Yes" ? true : false;
        const res: any = await processBasic(sData);
        navigate("/process/kyc");
        renderSuccess("Personal Information Saved!");
      } catch (error: any) {
        renderError(error.response || "Opps, Something went wrong");
      } finally {
        setLoading(false);
      }

      setLoading(false);
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required("FIrst name is required"),
      last_name: Yup.string().required("Last name si required"),
      email: Yup.string().email("Invalid email").required("Email is Required"),
      disability: Yup.string().required("Required"),
      phone: Yup.string().required("Phone Number is required"),
      state: Yup.string().required("State is required"),
      nationality: Yup.string().required("Nationality is required"),
      dob: Yup.string().required("Date of Birth is required"),
    }),
  });

  const addNew = () => {
    if (!social.length) return;
    let s = [...socials];

    s.push(social);
    setSocials(s);
    setSocial("");
  };

  const removeS = (i: number) => {
    setSocials((prev) => prev.filter((_, index) => index !== i));
  };

  useEffect(() => {
    if (user) {
      // formik.setFieldValue("email", user.email);
    }

    fetchBasic();
  }, []);

  const fetchBasic = async () => {
    try {
      const { basic }: any = await getBasic();

      console.log(basic.dob);
      formik.setFieldValue("email", basic.email);
      formik.setFieldValue("first_name", basic.first_name);
      formik.setFieldValue("last_name", basic.last_name);
      formik.setFieldValue("middle_name", basic.middle_name);
      formik.setFieldValue("state", basic.state);
      formik.setFieldValue("nationality", basic.nationality);
      formik.setFieldValue("phone", basic.phone);
      formik.setFieldValue("dob", moment(basic.dob).format("YYYY-MM-DD"));
      formik.setFieldValue("religion", basic.religion);
      formik.setFieldValue("marital_status", basic.marital_status);
      formik.setFieldValue("disability", basic.disability ? "Yes" : "No");

      setSocials(basic.socials);
      setBasic(basic);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormCon>
      {/* <FormLoader busy={false}> */}

      {/* <button onClick={verifyTest}>Verify</button> */}

      <form onSubmit={formik.handleSubmit}>
        <div className="px-[10px] sm:px-[50px] py-[50px]">
          <div className="header">
            <h4>Personal Information</h4>
          </div>
          <div className="info">
            <span>User information(field marked with *are mandatory) </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-6 gap-4">
            <InputBox className="standard" required>
              <label htmlFor="first_name">First Name</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="first_name"
                  value={formik.values.first_name}
                  type="text"
                  placeholder=""
                  id="first_name"
                />
              </InputInner>
              {formik.touched && formik.errors.first_name && (
                <span className="error">{formik.errors.first_name}</span>
              )}
            </InputBox>

            <InputBox className="standard">
              <label htmlFor="middle_name">Middle Name</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="middle_name"
                  value={formik.values.middle_name}
                  type="text"
                  placeholder=""
                  id="middle_name"
                />
              </InputInner>
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="last_name">Last Name</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="last_name"
                  value={formik.values.last_name}
                  type="text"
                  placeholder=""
                  id="last_name"
                />
              </InputInner>
              {formik.touched && formik.errors.last_name && (
                <span className="error">{formik.errors.last_name}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="marital_status">Marital Status</label>
              <InputInner>
                <select
                  onChange={formik.handleChange}
                  name="marital_status"
                  id="marital_status"
                  value={formik.values.marital_status}
                >
                  <option value="">Select marital status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </InputInner>
              {formik.touched && formik.errors.marital_status && (
                <span className="error">{formik.errors.marital_status}</span>
              )}
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
              <label htmlFor="phone">Phone Number</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="phone"
                  value={formik.values.phone}
                  type="text"
                  placeholder=""
                  id="phone"
                />
              </InputInner>
              {formik.touched && formik.errors.phone && (
                <span className="error ">{formik.errors.phone}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="last_name">Do you have disability</label>
              <InputInner>
                <select
                  onChange={formik.handleChange}
                  name="disability"
                  id="disability"
                  value={formik.values.disability}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </InputInner>

              {formik.touched && formik.errors.disability && (
                <span className="error">{formik.errors.disability}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="email">Email Address</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  type="text"
                  placeholder=""
                  id="email"
                />
              </InputInner>
              {formik.touched && formik.errors.email && (
                <span className="error">{formik.errors.email}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="nationality">Nationality</label>
              <InputInner>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.nationality}
                  name="nationality"
                  id="nationality"
                >
                  <option>Select Nationality</option>
                  {countries.map((country, i) => (
                    <option value={country.name} key={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </InputInner>

              {formik.touched && formik.errors.nationality && (
                <span className="error">{formik.errors.nationality}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="religion">Religion</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="religion"
                  value={formik.values.religion}
                  type="text"
                  placeholder="Religion"
                  id="religion"
                />
              </InputInner>
              {formik.touched && formik.errors.religion && (
                <span className="error">{formik.errors.religion}</span>
              )}
            </InputBox>

            <InputBox className="standard" required>
              <label htmlFor="dob">Date Of Birth</label>
              <InputInner>
                <Input
                  onChange={formik.handleChange}
                  name="dob"
                  value={formik.values.dob}
                  type="date"
                  placeholder=""
                  id="dob"
                />
              </InputInner>
              {formik.touched && formik.errors.dob && (
                <span className="error">{formik.errors.dob}</span>
              )}
            </InputBox>
          </div>
          <br />

          <div className="" style={{ width: "300px" }}>
            <InputBox className="standard" required>
              <label htmlFor="social">Social Media</label>
              <InputInner>
                <Input
                  onChange={(e) => setSocial(e.target.value)}
                  name="social"
                  value={social}
                  type="text"
                  placeholder=""
                  id="social"
                />
              </InputInner>
            </InputBox>

            {socials.map((social, i) => (
              <SocialCon key={i}>
                <Flex align="center" gap={10}>
                  <LinkI />
                  {social}
                </Flex>
                <div onClick={() => removeS(i)}>
                  <TrashI />
                </div>
              </SocialCon>
            ))}

            <br />

            <LayeredBtn
              bgColor="#BEFECD"
              width="88%"
              block
              height="63px"
              onClick={addNew}
              type="button"
              parentClassNames="mb-4 justify-between"
              linkTo="" // pass the path here
            >
              <span className="text-[#170728]">Add New Field</span>
              <div className=" bg-[#170728] border border-[#170728] flex justify-center items-center h-8 w-8 rounded-full">
                <BsPlus color="#FFFFFF" />
              </div>
            </LayeredBtn>
          </div>

          {!basic?.isVerified && !user.is_verified && (
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
          )}

          {user.is_verified && (
            <LayeredBtn
              bgColor="#BEFECD"
              width="88%"
              block
              height="63px"
              type="button"
              onClick={() => next()}
              parentClassNames="mb-4 justify-between"
            >
              <span className="text-[#170728]">Download Certificate</span>
            </LayeredBtn>
          )}
        </div>
      </form>
    </FormCon>
  );
};

export default Personal;
