import instance from "./axiosConfig";

const baseURL = "devotional/";

export const upsert = async (devoData, token) => {
  try {
    const { devoId, ...devo } = devoData;
    const url = devoId ? `${baseURL}/${devoId}` : baseURL;

    const devotional = await instance.patch(url, devo, {
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
    return devotionals?.data?.body;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};

export const getOne = async (token, devoId) => {
  try {
    const devotional = await instance.get(`${baseURL}detail/${devoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return devotional?.data?.body;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
