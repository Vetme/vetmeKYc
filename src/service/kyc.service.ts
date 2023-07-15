import Api from "./../lib/api";

export const processBasic = async (data: any) => {
  return Api.post("/kyc/basic/create", data);
};

export const processGeo = async (data: any) => {
  return Api.post("/kyc/geo/create", data);
};

export const processId = async (data: any) => {
  return Api.post("/kyc/id/create", data);
};

export const getBasic = async () => {
  return Api.get("/kyc/basic");
};

export const getCurrUser = async () => {
  return Api.get("/auth/user");
};

export const generateCertificate = () => {
  return Api.get("/kyc/generate-certificate", {
    responseType: "blob",
  });
};

export const startKyc = async () => {
  return Api.post("/kyc/start");
};

export const validateKycCode = async (code: string) => {
  return Api.post("/kyc/validate-code", { code });
};

export const createSub = async (data: any) => {
  return Api.post("/kyc/create-sub", data);
};
