import axios, { InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "@utils/token";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4200/",
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Timezone-Val"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.withCredentials = true;
    }
  }
  return config;
};
axiosInstance.interceptors.request.use(authRequestInterceptor);

export default axiosInstance;
