import { useQuery } from "@tanstack/react-query";
import * as topicService from "../api/topicService";
import { useAuthStore } from "../store/authStore";

export const useTopic = (slug) => {
  const { token } = useAuthStore();

  const { data: topics, isLoading: topicsLoading } = useQuery({
    queryKey: ["topics"],
    queryFn: () => topicService.getTopics(token),
  });

  const { data: topic, isLoading: topicLoading } = useQuery({
    queryKey: ["topic"],
    queryFn: () => topicService.getTopic(token, slug),
  });

  return {
    topic: topic?.data.body,
    topics: topics?.data.body,
    topicsLoading,
    topicLoading,
  };
};
