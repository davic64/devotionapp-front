import instance from "./axiosConfig";

const baseURL = {
  auth: "auth/",
  user: "user/",
};

export const login = async (credentials) => {
  try {
    const response = await instance.post(`${baseURL.auth}login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
