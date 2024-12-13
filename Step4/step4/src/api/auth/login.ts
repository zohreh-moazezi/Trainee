import { axiosInstance } from "@api/axiosInstance";
import { setAccessToken, setRefreshToken } from "@utils/token";
import { ILoginRequest, ILoginResponse } from "./login.types";

export const authLoginPost = async (
  loginData: ILoginRequest
): Promise<ILoginResponse> => {

  try {
    const { data } = await axiosInstance.post<ILoginResponse>(
      "auth/login",
      loginData
    );
    const { access_token, refresh_token } = data;

    setAccessToken(access_token);
    setRefreshToken(refresh_token);

    return data;
    
  } catch (error: any) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("An error occurred while trying to login.");
    }
  }
};
