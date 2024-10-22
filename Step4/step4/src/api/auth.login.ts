import axiosInstance from "./axiosInstance";
import { setAccessToken } from "@utils/token";
import { setRefreshToken } from "@utils/token";
import { IRefreshTokenResponse } from "interfaces/auth.interface";

type LoginData = {
  username: string;
  password: string;
};

export const authLoginPost = async (
  loginData: LoginData
): Promise<IRefreshTokenResponse> => {
  const { data } = await axiosInstance.post<IRefreshTokenResponse>(
    "auth/login",
    loginData
  );
  const { access_token, refresh_token } = data;

  setAccessToken(access_token);
  setRefreshToken(refresh_token);

  return data;
};
