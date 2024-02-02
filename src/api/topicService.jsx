import instance from "./axiosConfig";

const baseURL = "topic/";

export const getTopics = async (token) => {
  try {
    const topics = await instance.get(`${baseURL}list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return topics;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};

export const getTopic = async (token, slug) => {
  try {
    const topic = await instance.get(`${baseURL}${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return topic;
  } catch (error) {
    throw new Error(error.response.data.body);
  }
};
