import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as userService from "../api/userService";
import { notifications } from "@mantine/notifications";

export const useUser = () => {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: userService.create,
    onSuccess: (data, toggle) => {
      if (!data.body.errors) {
        notifications.show({
          color: "violet",
          title: "Usuario creado correctamente",
          message: "Inicia sesión y conecta con Dios",
        });
      }
      if ((data.body.errors[0].message = "email must be unique")) {
        notifications.show({
          color: "red",
          title: "Error",
          message: "El email que intentas registrar ya existe",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return {
    createUser: createUserMutation.mutate,
  };
};
