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
