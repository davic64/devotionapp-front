import { useQuery } from "@tanstack/react-query";
import * as topicService from "../api/topicService";
import { useAuthStore } from "../store/authStore";

export const useTopic = () => {
  const { token } = useAuthStore();

  const {
    data: topics,
    error: topicsError,
    isLoading: topicsLoading,
  } = useQuery({
    queryKey: ["topic"],
    queryFn: () => topicService.getTopics(token),
  });

  return {
    topics: topics?.data.body,
    topicsError,
    topicsLoading,
  };
};
