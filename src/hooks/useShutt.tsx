import { useEffect, useState } from "react";
import { SHUFTI_PRO_CLIENT_ID, SHUFTI_PRO_SECRET_KEY } from "../lib/constants";
import { useAuth } from "./useAuthProvider";

const useShuftipro = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  function createIframe(src: string, elem: any) {
    let iframe: any = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.id = "shuftipro-iframe";
    iframe.name = "shuftipro-iframe";
    iframe.allow = "camera";
    iframe.src = src;
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.bottom = 0;
    iframe.style.right = 0;
    iframe.style.margin = 0;
    iframe.style.padding = 0;
    iframe.style.overflow = "hidden";
    iframe.style.border = "none";
    iframe.style.zIndex = "2147483647";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.dataset.removable = true;

    elem.appendChild(iframe);
  }

  useEffect(() => {
    setLoading(true);
    const script = document.createElement("script");
    const elem = document.querySelector("#kycFrame");
    script.src = "https://app.shuftipro.com/biometric/sdk/shuftipro.min.js";
    script.async = true;
    elem?.appendChild(script);
    // callback_url: "https://kyc.requestcatcher.com/test",

    let payload: any = {
      reference: `SP_REQUEST_${Math.random()}`,
      callback_url:
        "kyc-api.vetemeblock.com",
      redirect_url: "https://kyc-success.vetmeblock.com/",
      language: "EN",
      verification_mode: "any",
      email: user.email,
      ttl: 60,
    };
    //Use this key if you want to perform document verification with OCR
    payload["document"] = {
      proof: "",
      additional_proof: "",
      name: "",
      allow_offline: "1",
      allow_online: "1",
      supported_types: ["id_card", "passport"],
    };

    payload["face"] = "";
    //Use this key if you want to perform address verification with OCR
    // payload["address"] = {
    //   name: "",
    //   full_address: "",
    //   address_fuzzy_match: "1",
    //   issue_date: "",
    //   supported_types: ["utility_bill", "passport", "bank_statement"],
    // };

    //BASIC AUTH TOKEN
    //Use your Shufti Pro account client id and secret key
    var token = btoa(`${SHUFTI_PRO_CLIENT_ID}:${SHUFTI_PRO_SECRET_KEY}`); //BASIC AUTH TOKEN
    // if Access Token
    //var token = "YOUR_ACCESS_TOKEN";
    //Dispatch request via fetch API or with whatever else which best suits for you
    fetch("https://api.shuftipro.com/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + token, // if access token then replace "Basic" with "Bearer"
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.event && data.event === "request.pending") {
          setLoading(false);
          createIframe(data.verification_url, elem);
        }
      });
  }, []);

  return { loading };
};
export default useShuftipro;
