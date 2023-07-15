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

export const getCurrentUser = async () => {
  return Api.get("/auth/user");
};

export const googleVerify = async (token: string) => {
  return Api.post(`/auth/google/callback`, {
    access_token: token,
  });
};
