import axios from "axios";
import { BASE_URL } from "./constants";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use((response: any) => response.data);
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// AUTHORIZATION

instance.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("token") as any);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
