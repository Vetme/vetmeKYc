import { sha256 } from "js-sha256";

export const testEndpoint = () => {
  const data = {};
  let payload: any = {
    //your unique request reference
    reference: `SP_REQUEST_${Math.random()}`,
    //URL where you will receive the webhooks from Shufti Pro
    callback_url: "https://yourdomain.com/profile/sp-notify-callback",
    //end-user email
    email: "johndoe@example.com",
    //end-user country
    country: "",
    //select ISO2 code for your desired language on verification screen
    language: "EN",
    //what kind of proofs will be provided to Shufti Pro for verification?
    verification_mode: "image_only",
    //allow end-user to upload verification proofs if the webcam is not accessible
    allow_offline: "1",
    //allow end-user to upload real-time or already catured proofs
    allow_online: "0",
    //privacy policy screen will be shown to end-user
    show_privacy_policy: "1",
    //verification results screen will be shown to end-user
    show_results: "1",
    //consent screen will be shown to end-user
    show_consent: "1",
    //User cannot send Feedback
    show_feedback_form: "0",
  };

  payload["address"] = {
    name: "Emmanuel Taiwo",
    full_address: "No 17 Abuja",
    address_fuzzy_match: "1",
    issue_date: "12/34/22",
    supported_types: ["utility_bill", "passport", "bank_statement"],
  };
  var responsesignature: any = null;
  var token = btoa("YOUR_CLIENT_ID:YOUR_SECRET_KEY"); //BASIC AUTH TOKEN

  const signature = "";
  const SK = "";

  fetch("https://api.shuftipro.com/", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + token,
    },
    body: JSON.stringify(payload),
  })
    .then(function (response) {
      responsesignature= response.headers.get("Signature");
      return response.json();
    })
    .then(function (data) {
      if (validateSignature(data, responsesignature, "YOUR_SECRET_KEY")) {
        console.log("signature validated", data);
      } else {
        console.log("signature not validated", data);
      }
    });
};

const validateSignature = (data: any, signature: any, SK: string) => {
  data = JSON.stringify(data);
  data = data.replace(/\//g, "\\/");
  data = `${data}${SK}`;

  sha256(data);
  var hash = sha256.create();
  hash.update(data);

  if (hash.hex() == signature) {
    return true;
  } else {
    return false;
  }
};