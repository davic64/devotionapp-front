import { create } from "zustand";

export const useAuthStore = create((set) => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
    setUser: (user) => {
      set({ user });
      if (user === null) localStorage.removeItem("user");
      else localStorage.setItem("user", JSON.stringify(user));
    },
    setToken: (token) => {
      set({ token });
      if (token === null) localStorage.removeItem("token");
      else localStorage.setItem("token", token);
    },
  };
});
