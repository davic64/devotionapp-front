import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import * as devotionalService from "../api/devotionalService";
import { notifications } from "@mantine/notifications";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useDevotional = (data) => {
  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const createDevotionalMutation = useMutation({
    mutationFn: (devoData) => devotionalService.upsert(devoData, token),
    onSuccess: () => {
      notifications.show({
        color: "violet",
        title: "¡Genial!",
        message: "Tu devocional ha sido creado correctamente",
        onClose: navigate(`/topic/${data?.slug}`),
      });
      queryClient.invalidateQueries({ queryKey: ["devotional"] });
    },
  });

  const { data: devotionals, isLoading: devotionalsLoading } = useQuery({
    queryKey: ["devotionals", data?.topicId],
    queryFn: () => devotionalService.get(token, data.location, data?.topicId),
    enabled: !!data?.topicId,
  });

  const { data: devotional, isLoading: devotionalLoading } = useQuery({
    queryKey: ["devotional", data?.devoId],
    queryFn: () => devotionalService.getOne(token, data?.devoId),
    enabled: !!data?.devoId,
  });

  return {
    devotionals,
    devotionalsLoading,
    devotional,
    devotionalLoading,
    createDevotional: createDevotionalMutation.mutate,
  };
};
