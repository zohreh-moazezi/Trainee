import { axiosInstance } from "@api/axiosInstance";
import { setAccessToken, setRefreshToken } from "@utils/token";
import { ILoginRequest, ILoginResponse } from "./login.types";

export const authLoginPost = async (
  loginData: ILoginRequest
): Promise<ILoginResponse> => {
  const { data } = await axiosInstance.post<ILoginResponse>(
    "auth/login",
    loginData
  );
  const { access_token, refresh_token } = data;

  setAccessToken(access_token);
  setRefreshToken(refresh_token);

  return data;
};
