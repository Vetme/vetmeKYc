import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

instance.interceptors.response.use((response: any) => response.data);
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// AUTHORIZATION
const token = JSON.parse(localStorage.getItem("token") as any);

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
