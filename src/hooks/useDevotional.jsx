import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import * as devotionalService from "../api/devotionalService";
import { notifications } from "@mantine/notifications";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useDevotional = (location, topicId) => {
  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const createDevotionalMutation = useMutation({
    mutationFn: (devoData) => devotionalService.create(devoData, token),
    onSuccess: () => {
      notifications.show({
        color: "violet",
        title: "¡Genial!",
        message: "Tu devocional ha sido creado correctamente",
        onClose: navigate(-1),
      });
      queryClient.invalidateQueries({ queryKey: ["devotional"] });
    },
  });

  const { data: devotionals, isLoading: devotionalsLogin } = useQuery({
    queryKey: ["devotionals", topicId],
    queryFn: () => devotionalService.get(token, location, topicId),
    enabled: !!topicId,
  });

  return {
    devotionals,
    devotionalsLogin,
    createDevotional: createDevotionalMutation.mutate,
  };
};
