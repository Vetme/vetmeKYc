import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import "./css/react-tabs.css";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuthProvider";
import { SHUFTI_PRO_CLIENT_ID, SHUFTI_PRO_SECRET_KEY } from "../lib/constants";
import useShuftipro from "../hooks/useShutt";
import { KYCWrapper } from "../styles";
import { MoonLoader } from "react-spinners";

const ProcessKyc = () => {
  const { user } = useAuth();
  const { loading } = useShuftipro();

  let navigate = useNavigate();

  useEffect(() => {
    if (!user.kyc_enabled) {
      navigate("/");
    }
  }, []);

  return (
    <Layout>
      <KYCWrapper id="kycFrame">
        {loading && <MoonLoader color="#170728" />}
      </KYCWrapper>
    </Layout>
  );
};

export default ProcessKyc;
