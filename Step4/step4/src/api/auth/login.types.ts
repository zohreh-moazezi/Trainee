export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}
export interface ILoginRequest {
  username: string;
  password: string;
}
