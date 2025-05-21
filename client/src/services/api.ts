import axios from "axios";
import type {
  UserRegister,
  UserLogin,
  User,
  Shoe,
  ShoeData,
} from "../utils/types";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const authApi = {
  register: (data: UserRegister) => api.post("/auth/register", data),
  login: (data: UserLogin) => api.post("/auth/login", data),
  logout: () => api.post("/auth/logout"),
  currentUser: () => api.get<{ user: User }>("/auth/me"),
};

export const shoesApi = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  create: (data: ShoeData) => api.post<Shoe>("/shoes", data),
  edit: (id: string, data: ShoeData) => api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};
