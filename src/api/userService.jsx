import instance from "./axiosConfig";

const baseURL = "user/";

export const create = async (userData) => {
  try {
    const response = await instance.post(`${baseURL}create`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
