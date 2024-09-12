import axiosInstance from "./axios";

export const register = (data) => axiosInstance.post("/auth/register", data);

export const login = (data) => axiosInstance.post("/auth/login", data);
