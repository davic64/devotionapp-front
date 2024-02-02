import instance from "./axiosConfig";

const baseURL = "devotional/";

export const create = async (devoData, token) => {
  try {
    const devotional = await instance.patch(baseURL, devoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return devotional;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
