import { bsc, polygon, goerli } from "wagmi/chains";

export const SHUFTI_PRO_CLIENT_ID =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_SHUFTI_PRO_CLIENT_ID_LIVE
    : import.meta.env.VITE_SHUFTI_PRO_CLIENT_ID;
export const SHUFTI_PRO_SECRET_KEY =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_SHUFTI_PRO_SECRET_KEY_LIVE
    : import.meta.env.VITE_SHUFTI_PRO_SECRET_KEY;
export const SHUFTI_PRO_CALLBACK_URL = import.meta.env
  .VITE_SHUFTI_PRO_CALLBACK_URL;
export const SHUFTI_PRO_REDIRECT_URL = import.meta.env
  .VITE_SHUFTI_PRO_REDIRECT_URL;

export const BASE_URL =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_SERVER_URL
    : import.meta.env.VITE_LOCAL_SERVER_URL;

export const SUPPORTED_CHAIN = [bsc, polygon, goerli];

export const PAYMENT_CONTRACT: {
  [chainId: number]: string;
} = {
  137: import.meta.env.VITE_PAYMENT_CONTRACT_POLYGON,
  56: import.meta.env.VITE_PAYMENT_CONTRACT_BNB,
  5: import.meta.env.VITE_PAYMENT_CONTRACT_GOERLI,
};

export const PAYMENT_TOKEN: {
  [chainId: number]: string;
} = {
  137: import.meta.env.VITE_TOKEN_CONTRACT_POLYGON,
  56: import.meta.env.VITE_TOKEN_CONTRACT_BNB,
  5: import.meta.env.VITE_TOKEN_CONTRACT_GOERLI,
};
