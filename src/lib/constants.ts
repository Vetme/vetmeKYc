export const SHUFTI_PRO_CLIENT_ID = import.meta.env.VITE_SHUFTI_PRO_CLIENT_ID;
export const SHUFTI_PRO_SECRET_KEY = import.meta.env.VITE_SHUFTI_PRO_SECRET_KEY;
export const SHUFTI_PRO_CALLBACK_URL = import.meta.env
  .VITE_SHUFTI_PRO_CALLBACK_URL;
export const SHUFTI_PRO_REDIRECT_URL = import.meta.env
  .VITE_SHUFTI_PRO_REDIRECT_URL;

export const BASE_URL =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_SERVER_URL
    : import.meta.env.VITE_LOCAL_SERVER_URL;

export const PAYMENT_CONTRACT =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_PAYMENT_CONTRACT
    : import.meta.env.VITE_PAYMENT_CONTRACT;

export const PAYMENT_TOKEN =
  import.meta.env.MODE == "production"
    ? import.meta.env.VITE_TOKEN_CONTRACT
    : import.meta.env.VITE_TOKEN_CONTRACT;
