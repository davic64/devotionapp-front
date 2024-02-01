import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import * as authService from "../api/authService";
import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { user, setUser, token, setToken } = useAuthStore();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setUser(data.body.user);
      setToken(data.body.token);
      navigate("/home");
      queryClient.invalidateQueries({ queryKey: ["user", "token"] });
    },
  });

  const logout = () => {
    setUser(null);
    setToken(null);
    queryClient.clear();
  };

  return {
    user,
    token,
    login: loginMutation.mutate,
    logout,
  };
};
