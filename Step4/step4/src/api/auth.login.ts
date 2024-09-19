import axiosInstance from "./axiosInstance";

export const authLoginPost = async () => {
  const data = await axiosInstance.post("auth/login");

  return data;
};
