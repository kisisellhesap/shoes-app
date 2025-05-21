// custom hook - kendi oluşturuğumuz hooklar
// useAuth: auth işlev / verilerine erişmeye yarayacak hook

import { useMutation } from "@tanstack/react-query";
import { authApi } from "../services/api";
import { useNavigate } from "react-router-dom";
import type { UserLogin, UserRegister } from "../utils/types";

export default function useAuth() {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: (data: UserLogin) => authApi.login(data),
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/");
    },
  });

  const register = useMutation({
    mutationFn: (data: UserRegister) => authApi.register(data),
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      navigate("/");
    },
  });

  const logout = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: (res) => {
      localStorage.removeItem("accessToken");
      navigate("/login");
    },
  });

  return {
    login,
    register,
    logout,
    isAuthenticated: !!localStorage.getItem("accessToken"),
  };
}
