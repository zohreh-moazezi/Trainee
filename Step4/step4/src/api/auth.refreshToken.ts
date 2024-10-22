import axiosInstance from "./axiosInstance";
import { IRefreshTokenResponse } from "interfaces/auth.interface";

export const refreshToken = async (refreshToken: string):Promise<IRefreshTokenResponse> => {
  const { data } = await axiosInstance.post<IRefreshTokenResponse>(
    `auth/refresh-token`,
    refreshToken
  );
  return data;
};
