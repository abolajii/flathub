export const getToken = () => localStorage.getItem("access-token");

export const setAccessToken = async (token) =>
  localStorage.setItem("access-token", token);
export const setRefreshToken = async (token) =>
  localStorage.setItem("refresh_token", token);
export const destroyToken = () => {
  localStorage.removeItem("access-token");
  return null;
};
