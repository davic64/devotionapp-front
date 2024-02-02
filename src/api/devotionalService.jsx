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

export const get = async (token, location, topicId) => {
  try {
    const devotionals = await instance.get(
      `${baseURL}list?location=${location}&topicId=${topicId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return devotionals?.data.body;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
