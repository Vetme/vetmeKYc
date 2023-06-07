import Api from "./../lib/api";

export const register = async (data: any) => {
  return Api.post("/auth/register", data);
};

export const verifyOtp = async (data: any) => {
  return Api.post("/auth/verify", data);
};

export const login = async (data: any) => {
  return Api.post("/auth/login", data);
};
