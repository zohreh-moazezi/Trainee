import axiosInstance from "./axiosInstance";

type LoginData={
  username : string;
  password:string
}

type Data = {
  data: {
    access_token: string;
    refresh_token: string;
  };
};

export const authLoginPost = async (loginData:LoginData): Promise<Data> => {
  const { data } = await axiosInstance.post<Data>("auth/login", loginData);
  const { access_token, refresh_token } = data.data;
  return data;
};
