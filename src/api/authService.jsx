import instance from "./axiosConfig";

const baseURL = {
  auth: "auth/",
  user: "user/",
};

export const login = async (credentials) => {
  const response = await instance.post(`${baseURL.auth}login`, credentials);
  return response.data;
};
