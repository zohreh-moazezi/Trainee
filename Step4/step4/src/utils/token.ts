export const setAccessToken = (access_token: string): void => {
  localStorage.setItem('access_token', access_token);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};
export const removeAccessToken = () => {
  localStorage.removeItem('access_token');
};
export const setRefreshToken = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token);
};
export const getRefreshToken = () => {
  localStorage.getItem('refresh_token');
};
export const removeRefreshToken = () => {
  localStorage.removeItem('refresh_token');
};
