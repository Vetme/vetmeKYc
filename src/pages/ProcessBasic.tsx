import { Link, useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import "./css/react-tabs.css";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuthProvider";
import { SHUFTI_PRO_CLIENT_ID, SHUFTI_PRO_SECRET_KEY } from "../lib/constants";
import { getCurrentUser } from "../service/auth.service";
import Button from "../components/utils/Button";
import { startKyc } from "../service/kyc.service";
import { renderError, renderSuccess } from "../service/alert.service";
import { Copy } from "../components/icons";
import { CBody, CItem, CTabs } from "../styles";
import { Certification, Personal } from "../components/kyc";

enum CustomTabs {
  KYC_VERIFICATION = "Kyc verification",
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

const ProcessBasic = () => {
  const { user, saveUser } = useAuth();
  const [active, setActive] = useState<CustomTabs>(CustomTabs.KYC_VERIFICATION);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res: any = await getCurrentUser();
      saveUser(res.user);
    } catch (err) {}
  };

  const handleNext = (val: any) => {
    setActive(val);
  };

  return (
    <Layout>
      <div className=" w-full gap-4">
        <CTabs className="pricing">
          <Link to="/process">
            <CItem value="Dashboard">
              <span></span>
              Dashboard
            </CItem>
          </Link>
          {Object.values(CustomTabs).map((val, i) => (
            <CItem
              href="#solutions"
              className={active == val ? "active" : ""}
              value={val}
              onClick={() => setActive(val)}
              as="a"
              key={i}
            >
              <span></span>
              {val}
            </CItem>
          ))}
        </CTabs>

        <CBody>
          {CustomTabs.KYC_VERIFICATION == active && (
            <Personal next={() => handleNext(CustomTabs.CERTIFICATION)} />
          )}
          {CustomTabs.CERTIFICATION == active && <Certification />}
        </CBody>
      </div>
    </Layout>
  );
};

export default ProcessBasic;
