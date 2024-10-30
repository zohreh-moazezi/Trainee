import axios from "axios";
import { getAccessToken, getRefreshToken, setAccessToken } from "@utils/token";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4200/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer${accessToken} `;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getRefreshToken();
        const response = await axios.post("auth/refresh-token", {
          token: refreshToken,
        });
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
      }
    }
    return Promise.reject(error);
  }
);
