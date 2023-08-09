import { useNavigate, useParams } from "react-router-dom";

import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import "./css/react-tabs.css";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuthProvider";
import { SHUFTI_PRO_CLIENT_ID, SHUFTI_PRO_SECRET_KEY } from "../lib/constants";
import { getCurrentUser } from "../service/auth.service";
import Button from "../components/utils/Button";
import {
  generateCertificate,
  startKyc,
  validateKycCode,
} from "../service/kyc.service";
import { renderError, renderSuccess } from "../service/alert.service";
import { Copy } from "../components/icons";
import { Flex } from "../components";
import Modal from "../components/utils/modal";
import { CodeInput } from "./styles";
import CertificationModal from "../components/utils/modal/Certification";

enum CustomTabs {
  KYC_VERIFICATION = "Kyc verification",
  // IDENTIFICATION = "Identification",
  // BIOMETRIC = "Biometric",
  // GEOLOCATION = "Geo-Location",
  CERTIFICATION = "Certification",
}

const configObject = {
  open_webview: true,
  asyncRequest: false,
  captureEnabled: true,
};

const authObject = {
  auth_type: "basic_auth",
  client_id: SHUFTI_PRO_CLIENT_ID,
  secret_key: SHUFTI_PRO_SECRET_KEY,
};

const Process = () => {
  const { user, saveUser } = useAuth();
  const [active, setActive] = useState<CustomTabs>(CustomTabs.KYC_VERIFICATION);
  const [starting, setStarting] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  const [popup, setPopup] = useState<boolean>(false);
  const [certificateGenerationStage, setCertificateGenerationStage] = useState({
    generating: false,
    generated: false,
  });

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

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    getUser();
    console.log(params, "hello");
  }, [navigate.name]);

  const getUser = async () => {
    try {
      const res: any = await getCurrentUser();
      saveUser(res.user);
      setUsers(res.kyc);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = (val: any) => {
    setActive(val);
  };

  const handleStart = async () => {
    try {
      setStarting(true);
      const res = await startKyc();
      getUser();
      renderSuccess("Kyc Created");
    } catch (err: any) {
      renderError(err.response);
    } finally {
      setStarting(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (code.length < 1) throw new Error("Code required");
      setStarting(true);
      const res = await validateKycCode(code);
      setOpen(false);
      getUser();
      renderSuccess("Kyc Created");
    } catch (err: any) {
      renderError(err.response || err.message);
    } finally {
      setStarting(false);
      setCode("");
    }
  };

  return (
    <Layout>
      <CertificationModal
        {...{ popup, certificateGenerationStage, handleShowPopup, handlePrint }}
      />
      {user.kyc_enabled ? (
        // <div className=" w-full gap-4">
        //   <CTabs className="pricing">
        //     {Object.values(CustomTabs).map((val, i) => (
        //       <CItem
        //         href="#solutions"
        //         className={active == val ? "active" : ""}
        //         value={val}
        //         onClick={() => setActive(val)}
        //         as="a"
        //         key={i}
        //       >
        //         <span></span>
        //         {val}
        //       </CItem>
        //     ))}
        //   </CTabs>

        //   <CBody>
        //     {CustomTabs.KYC_VERIFICATION == active && (
        //       <Personal next={() => handleNext(CustomTabs.CERTIFICATION)} />
        //     )}
        //     {CustomTabs.CERTIFICATION == active && <Certification />}
        //   </CBody>
        // </div>

        <div className="p-4 flex-1 w-full">
          <div className="table-container">
            {users.length > 0 ? (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className=" text-xs text-gray-700 uppercase border-[#453953] border  bg-[#eff1ea] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        S/N
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Full name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Kyc Code
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((kyc: any, i: number) => (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="px-6 py-6">{user.email}</td>
                        <td className="px-6 py-6">{user.name}</td>
                        <td className="px-6 py-6">
                          <div className="cursor-pointer flex items-center gap-3">
                            <span> {kyc.kyc_code}</span>
                            <Copy />
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div>
                            {kyc.is_verified ? (
                              <Button
                                text="Download Certificate"
                                onClick={() => setPopup(true)}
                              />
                            ) : (
                              <Button text="Continue" to="/process/basic" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <EmptyKyc handleStart={handleStart} loading={starting} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full gap-4">
          <div className="p-5">
            <div className="my-4">
              {" "}
              <h4 className="text-lg">Welcome {user.name}!</h4>
            </div>

            <Flex gap={20}>
              <LayeredBtn
                lDir="right"
                bgColor="#FBF2FF"
                width="147px"
                height="46px"
                parentClassNames="w-auto"
                onClick={() => navigate("/pricing")}
              >
                <span className="text-[#170728] text-[0.87em]">Subscribe</span>
              </LayeredBtn>

              <LayeredBtn
                lDir="right"
                bgColor="#FBF2FF"
                width="147px"
                height="46px"
                parentClassNames="w-auto"
                onClick={() => setOpen(true)}
              >
                <span className="text-[#170728] text-[0.87em]">
                  I have Kyc Code
                </span>
              </LayeredBtn>
            </Flex>
          </div>

          <Modal open={open} close={() => setOpen(false)}>
            <CodeInput
              placeholder="Enter Code"
              onChange={(e) => setCode(e.target.value)}
              value={code}
            />
            <Button onClick={handleSubmit} text="Apply" />
          </Modal>
        </div>
      )}
    </Layout>
  );
};

export const EmptyKyc = ({ handleStart, loading }: any) => (
  <div className="flex items-center justify-center h-[400px]">
    <div className="text-center">
      <h4 className="text-xl">You have not initiated the KYC process yet.</h4>
      <p></p>
      <Button
        onClick={handleStart}
        loading={loading}
        disabled={loading}
        text="Start Kyc"
      />
    </div>
  </div>
);

export default Process;
