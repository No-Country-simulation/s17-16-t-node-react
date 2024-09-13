import { env } from "@/env";
import axios, { type AxiosInstance } from "axios";

import { getCookie } from "@/lib/cookieUtils";

const api: AxiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    apikey: env.NEXT_PUBLIC_API_KEY,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

export default api;
