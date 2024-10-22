export const setAccessToken = (access_token: string): void => {
  localStorage.setItem("Access Token:", access_token);
};

export const getAccessToken = (): string | null => {
  return typeof localStorage === "object"
    ? localStorage.getItem("access_token")
    : null;
};
export const removeAccessToken = (): void => {
  if (getAccessToken !== null) localStorage.removeItem("access_token");
};
export const setRefreshToken = (refresh_token: string): void => {
  localStorage.setItem("Refresh Token:", refresh_token);
};
export const getRefreshToken = (): string | null => {
  return typeof localStorage === "object"
    ? localStorage.getItem("refresh_token")
    : null;
};
export const removeRefreshToken = (): void => {
  if (getRefreshToken !== null) localStorage.removeItem("refresh_token");
};
